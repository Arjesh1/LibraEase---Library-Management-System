import { onAuthStateChanged } from 'firebase/auth';
import './App.css';
import 'animate.css'
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import SignIn from './pages/signup-signin/SignIn';
import SignUp from './pages/signup-signin/SignUp';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction } from './pages/signup-signin/userAction';
import { auth } from './config/firebase-config';
import { useEffect } from 'react';
import Books from './pages/books/Books';
import Profile from './pages/signup-signin/Profile';
import History from './pages/History/History';
import NewBook from './pages/books/NewBook';
import Clients from './pages/clients/Clients';
import BookLanding from './pages/books/BookLanding';
import BurrowHistory from './pages/burrow-history/BurrowHistory';
import PasswordReset from './pages/signup-signin/PasswordReset';
import { Contact } from './pages/contact/Contact';
import { About } from './pages/about/About';
import AllBooks from './pages/books/AllBooks';
import Messages from './pages/messages/Message';
import { getAllReviewAction } from './pages/books/BookAction';

function App() {
  const dispatch = useDispatch()
  // const navigate = useNavigate();
  //  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllReviewAction())
  }, [dispatch]);


//let firebase to reauth user if they reload the page
onAuthStateChanged(auth, (userData) =>{
  if(userData.uid){
    dispatch(getUserAction(userData.uid))

  }
})



  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="contact" element ={<Contact/>}/>
      <Route path="/book/:bookId" element ={<BookLanding/>}/>
      <Route path="signin" element ={<SignIn/>}/>
      <Route path="signup" element ={<SignUp/>}/>
      <Route path="history" element ={<History/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='allBooks' element={<AllBooks/>}/>

      


    <Route path="dashboard" element ={<Dashboard/>}/>
    <Route path="new-book" element ={<NewBook/>}/>
    <Route path="books" element ={<Books/>}/>
    <Route path="profile" element ={<Profile/>}/>
    <Route path="book_history" element ={<BurrowHistory/>}/>
    <Route path="message" element ={<Messages/>}/>
    <Route path="clients" element ={<Clients/>}/>
    <Route path="password_reset" element ={<PasswordReset/>}/>

    


      </Routes>

      </BrowserRouter>
      <ToastContainer 
theme="colored" />
    </div>
  );
}

export default App;
