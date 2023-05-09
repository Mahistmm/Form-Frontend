import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const tokenvalue = JSON.parse(localStorage.getItem("token"));
    if (tokenvalue) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return <div></div>;
};

export default Home;
