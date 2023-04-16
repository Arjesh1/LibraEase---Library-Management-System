import './App.css';
import Home from './pages/Home';
import SignIn from './pages/signup-signin/SignIn';
import SignUp from './pages/signup-signin/SignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="signin" element ={<SignIn/>}/>
      <Route path="signup" element ={<SignUp/>}/>

    

      </Routes>

      </BrowserRouter>
      <ToastContainer 
theme="colored" />
    </div>
  );
}

export default App;
