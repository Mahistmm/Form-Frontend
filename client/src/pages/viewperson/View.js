import React, { useState, useEffect } from "react";
import "./View.css";
import axios from "../../axios";
import { useNavigate, Link } from "react-router-dom";
import Header from "../Header/Header";

const View = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  console.log(data.map((Element) => Element.firstname));

  useEffect(() => {
    const tokenvalue = JSON.parse(localStorage.getItem("token"));
    if (tokenvalue) {
      navigate("/view");
    } else {
      navigate("/login");
    }
  }, []);

  const view = async () => {
    const data = await axios.get("/add/data");
    setData([...data.data]);
  };

  useEffect(() => {
    view();
  }, []);

  return (
    <div>
      <Header />
      <h2>Form Details</h2>
      <div>
        {data ? (
          <div>
            {data.map((element, index) => (
              <div key={index} className="table-wrapper">
                <table className="fl-table">
                  <thead>
                    <tr>
                      <th>firstname</th>
                      <th>lastname</th>
                      <th>Age</th>
                      <th>Qualification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{element.firstname}</td>
                      <td>{element.lastname}</td>
                      <td>{element.age}</td>
                      <td>{element.qualification}</td>
                    </tr>
                  </tbody>
                </table>
                <h1>{element.firstname}</h1>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h1>No user data</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default View;
