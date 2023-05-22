import { onAuthStateChanged } from 'firebase/auth';
import './App.css';
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

function App() {
  const dispatch = useDispatch()
  // const navigate = useNavigate();
  //  const { user } = useSelector((state) => state.user);

  // useEffect(() => {
  //   user?.uid && navigate("/dashboard");
  // }, []);


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
      <Route path="/book/:bookId" element ={<BookLanding/>}/>
      <Route path="signin" element ={<SignIn/>}/>
      <Route path="signup" element ={<SignUp/>}/>


    <Route path="dashboard" element ={<Dashboard/>}/>
    <Route path="new-book" element ={<NewBook/>}/>
    <Route path="books" element ={<Books/>}/>
    <Route path="profile" element ={<Profile/>}/>
    <Route path="history" element ={<History/>}/>
    <Route path="clients" element ={<Clients/>}/>
    


      </Routes>

      </BrowserRouter>
      <ToastContainer 
theme="colored" />
    </div>
  );
}

export default App;
