
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Search from './pages/Search'
import AllAvailableBuses from './pages/AllAvailableBuses'
import Details from './pages/Details'




import {BrowserRouter, Route, Routes, Link, Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'




const AuthorizeUser = () => {
  const loginStatus = sessionStorage['loginStatus']
  return loginStatus=='1' ? <home/> : <Signin/>
  // if(loginStatus=='1'){
  //   return <home/>
  // }else{
  //   return <Signin/>
  // }
}
function App() {
  return (
    <div className="container"> {/*container brings everything in the middle */}
       
      
      
      <BrowserRouter>
         <Routes>
         <Route path="/" element={<AuthorizeUser/>}></Route>
            <Route path="/Signin" element={<Signin />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Search" element={<Search/>}></Route>
            <Route path="/allavailablebuses" element={<AllAvailableBuses />}></Route>
            <Route path="/details" element={<Details />}></Route>

         </Routes>
      
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
    
  );
}

export default App;