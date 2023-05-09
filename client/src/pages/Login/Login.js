import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios";
import { useDispatch } from "react-redux";
import { handleLogin } from "../../slices/userslice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const tokenvalue = JSON.parse(localStorage.getItem("token"));
    if (tokenvalue) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  const login = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("/user/login", {
      username,
      password,
    });
    dispatch(handleLogin(data.token));
    if (data && data.token) {
      const value = localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/");
    } else {
      alert(data.msg);
      navigate("/login");
    }
  };

  const register = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("/user/signup", {
        username,
        password,
      });
      alert("Account created successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="container">
      <div class="card">
        <div class="card-image">
          <h2 class="card-heading">
            Get started
            <small>Let us create your account</small>
          </h2>
        </div>
        <form class="card-form">
          <div class="input">
            <input
              type="text"
              class="input-field1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label class="input-label1">Full name</label>
          </div>
          <div class="input">
            <input
              type="password"
              class="input-field1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label class="input-label1">Password</label>
          </div>
          <div class="action">
            <button class="action-button" type="submit" onClick={login}>
              Get started
            </button>
          </div>
        </form>
        <div class="action">
          <button class="action-button" type="submit" onClick={register}>
            Create your account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
