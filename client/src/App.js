import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Header from "./pages/Header/Header";
import Add from "./pages/Add/Add";
import View from "./pages/viewperson/View";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Header />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<Add />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
