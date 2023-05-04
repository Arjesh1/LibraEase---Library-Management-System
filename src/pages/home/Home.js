import React from 'react'
import {MainLayout} from '../../components/layout/MainLayout'
import Carousel from 'react-bootstrap/Carousel';
import { HomeCarousel } from '../../components/carousel/HomeCarousel';
import { Container } from 'react-bootstrap';
import { CustomInput } from '../../components/customInput/CustomInput';

const Home = () => {
  return (
    <div>
      <MainLayout>
      <HomeCarousel/>

      <Container className='p-5'>
      <div> <h3>Explore the library</h3></div>
        <div className='d-flex justify-content-between'>
        <div className='mt-4'>
        <p>4 books found!</p>
        
        </div>
        <CustomInput placeholder="Search by title"/>
        </div>
        <hr/>

        

      </Container>



      </MainLayout>
    </div>
  )
}

export default Home
