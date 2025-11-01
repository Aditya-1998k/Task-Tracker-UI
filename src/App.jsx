import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/users/Login";
import Signup from "./components/users/Signup";
import ForgetPassword from "./components/users/ForgetPassword" 
import ChangePassword from "./components/users/ChangePassword"
import Dashboard from "./components/Dashboard";
import GetTask from "./components/Tasks/getTask";
import ForMe from "./components/Tasks/forMe";
import Users from "./components/users/users";
import ProtectedRoute from "./components/ProtectedRoute"
import AddTaskModal from "./components/Tasks/AddTaskModel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forget_password" element={<ForgetPassword/>}/>
        <Route path="/change_password" element={<ChangePassword/>}/>
        <Route element={<ProtectedRoute />}>
          <Route path="/users" element={<Users/>} />  
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<GetTask />} />
          <Route path="/mytask" element={<ForMe />} />
          <Route path="/addtask" element={<AddTaskModal/>}/>
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

