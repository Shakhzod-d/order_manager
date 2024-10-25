import useGet from "./hooks/useGet";
import Login from "./components/login";
import Register from "./components/register";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import OrderManagement from "./management";

function App() {
  const { data, isLoading } = useGet("/users");
  if (isLoading) {
    return <p>Loading..,</p>;
  }
  console.log(data);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/orders" element={<OrderManagement />} />
      </Routes>
    </>
  );
}

export default App;
