import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

