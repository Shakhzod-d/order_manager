import useGet from "./hooks/useGet";
import Login from "./components/login";
import Register from "./components/register";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import OrderManagement from "./management";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/orders" element={<OrderManagement />} />
      </Routes>
    </>
  );
}

export default App;
