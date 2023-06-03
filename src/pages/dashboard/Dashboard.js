import React, { useEffect, useState } from 'react'
import { PrivateRoute } from '../../components/private-route/PrivateRoute'
import UserLayout from '../../components/layout/UserLayout'
import { Button, Container } from 'react-bootstrap'
import { getAllBookAction, getAllBurrowBookAction } from '../books/BookAction'
import { useDispatch, useSelector } from 'react-redux'
import { getAllClientAction } from '../signup-signin/userAction'
import { ImBooks } from 'react-icons/im'
import { FaUser } from 'react-icons/fa'
import { GiRead } from 'react-icons/gi'
import { FcManager, FcViewDetails } from 'react-icons/fc'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);








const Dashboard = () => {

  const dispatch = useDispatch()
  const { allBurrowRecord } = useSelector(state => state.books)
  const { client } = useSelector(state => state.user)
  const { book } = useSelector(state => state.books)

  const [isMobile, setIsMobile] = useState(false)

  //choose the screen size 
const handleResize = () => {
  if (window.innerWidth < 768) {
      setIsMobile(true)
  } else {
      setIsMobile(false)
  }
}



// create an event listener
useEffect(() => {
  window.addEventListener("resize", handleResize)
})

  useEffect (()=>{
    dispatch(getAllBurrowBookAction())
    dispatch(getAllClientAction())
   

  }, [dispatch])

  const labels = ['Books', 'User',  'Burrowed Books']

  const options = {
    responsive: true,
    plugins: {
      legend: true,
      
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Details',
        data: [book.length,client.length, allBurrowRecord.length],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension:0.4,
        fill: true,
        
      },
      
    ],
  };

  return (

  <PrivateRoute>

{isMobile === true ? (
  <div className='mobile_restrict d-flex justify-content-center  align-items-center p-3' >
  <h1 className='p-4 shadow-lg' >Please use desktop to access dashboard! </h1>
  </div>
):(    
<>  <UserLayout>
        <Container className='mt-3'>

{/* top displays */}
          <div className='d-flex justify-content-around  '>

            <div className='  w-25 d-flex justify-content-around align-items-center shadow  mb-5 bg-body-tertiary rounded'>

              <div className='bg-danger p-2'>
                  <ImBooks className='fs-1 text-light rounded'/>

              </div>
              <div>
              <p className='text-center  mt-2  fs-5 '> Books
              <br/> 
              <span className='fw-bold fs-3'>{book.length}</span>
              </p>
             <p className='text-center   fs-3 fw-bold'> </p>
              </div>
             
              </div>

              <div className='  w-25 d-flex justify-content-around align-items-center shadow  mb-5 bg-body-tertiary rounded'>

              <div className='bg-info p-2'>
                  <FaUser className='fs-1 text-light rounded'/>

              </div>
              <div>
              <p className='text-center  mt-2  fs-5 '> User
              <br/> 
              <span className='fw-bold fs-3'>{client.length}</span>
              </p>
             <p className='text-center   fs-3 fw-bold'> </p>
              </div>
             
              </div>

              <div className='  w-25 d-flex justify-content-around align-items-center shadow  mb-5 bg-body-tertiary rounded'>

              <div className='bg-warning p-2'>
                  <GiRead className='fs-1 rounded text-light'/>

              </div>
              <div>
              <p className='text-center  mt-2  fs-5 '> Burrowed
              <br/> 
              <span className='fw-bold fs-3'>{allBurrowRecord.length}</span>
              </p>
             <p className='text-center   fs-3 fw-bold'> </p>
              </div>
             
              </div>
              
             
          </div>

          {/* charts */}

          <div className='charts d-flex justify-content-center'>

          <Line options={options} data={data} />
          
          </div>

          {/* table */}

          {/* user client */}
          
          <div className='d-flex gap-5 ms-5 me-5'>
            <div className='w-50'> 
            <Table   borderless >
            <thead>
              <tr className='bg-info rounded-top'>
                <th colSpan={5}  className='text-center bg-info  text-light fs-5'>Users</th>
                <th className='text-end'><Link to="/clients">
            <Button variant='dark' className='me-0'>More</Button>
            </Link></th>
                </tr>
                </thead>  
      
      <tbody>

      {client.map((item, index) => {
  if (index < 5) {
    return (
      <tr key={item.id} className='shadow  rounded'>
       
         
            <td>
            <FcManager className='fs-2 me-3 text-dark'/>{item.fName + " " + item.lName} 
          </td>
          
            <td >{item.role}</td>
            <td>{item.email}</td>
          </tr>
    );
  }
  return null;
})}

      
      </tbody>

      <tbody>
        <tr>
          <td colSpan={5} >
            
            
            </td>
          
        </tr>
        
      </tbody>
    </Table>
            </div>

          {/* books table */}
            <div className='w-50 '> 
            <Table borderless  >
            <thead>
              <tr className='bg-warning' >
                <th colSpan={5}  className='text-center  text-light  fs-5'>Books</th>
                <th colSpan={5} className='text-end '>
            
          <Link to="/books">
            <Button variant='dark' className='me-0'>More</Button>
            </Link>
            
            </th>
                </tr>
                </thead>  
      
      <tbody>

      {book.map((item, index) => {
  if (index < 5) {
    return (
      <tr key={item.id} className='shadow  rounded'>
           
            <td>
              <FcViewDetails className='fs-2 me-3 text-warning'/>
            {item.title.slice(0,20) + "...."}
          </td>
            <td>{item.name.slice(0,20) + "...."}</td>
            <td>{item.year}</td>
          
          </tr>
    );
  }
  return null;
})}

      
      </tbody>

    
    </Table>
            </div>


          </div>
          

        



        </Container>
      </UserLayout>
      </> 
      )
}



  </PrivateRoute>
  )
}

export default Dashboard
