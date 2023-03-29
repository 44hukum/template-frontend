import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ProtectedRoute from "./routes/ProtectedRoute";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/login/" element={<Login />} />
      <Route path="/register/" element={<Registration/>} />
    </Routes>
  );
};
export default App;
