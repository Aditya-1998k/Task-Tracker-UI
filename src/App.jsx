import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/users/Login";
import Signup from "./components/users/Signup";
import ForgetPassword from "./components/users/ForgetPassword" 
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forget_password" element={<ForgetPassword/>}/>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;

