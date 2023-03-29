import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={logout}> Logout</button>
      <a href="/profile">Hello</a>
    </>
  );
}

export default Home;
