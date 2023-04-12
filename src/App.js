import './App.css';
import Home from './pages/Home';
import SignIn from './pages/signup-signin/SignIn';
import SignUp from './pages/signup-signin/SignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

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
    </div>
  );
}

export default App;
