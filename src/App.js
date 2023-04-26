import { onAuthStateChanged } from 'firebase/auth';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/dashboard/Dashboard';
import SignIn from './pages/signup-signin/SignIn';
import SignUp from './pages/signup-signin/SignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { getUserAction } from './pages/signup-signin/userAction';
import { auth } from './config/firebase-config';

function App() {
  const dispatch = useDispatch()


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
      <Route path="signin" element ={<SignIn/>}/>
      <Route path="signup" element ={<SignUp/>}/>
      <Route path="dashboard" element ={<Dashboard/>}/>
      

    <Route path="new-book" element ={<Dashboard/>}/>
    <Route path="books" element ={<Dashboard/>}/>
    <Route path="profile" element ={<Dashboard/>}/>


      </Routes>

      </BrowserRouter>
      <ToastContainer 
theme="colored" />
    </div>
  );
}

export default App;
