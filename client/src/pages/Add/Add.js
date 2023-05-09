import React, { useState, useEffect } from "react";
import "./Add.css";
import axios from "../../axios";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser, handleLogin } from "../../slices/userslice";
import Header from "../Header/Header";

const Add = () => {
  const user = useSelector(getUser);
  console.log(user);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [qualification, setQualification] = useState("");
  const [persondata, setPersondata] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const tokenvalue = JSON.parse(localStorage.getItem("token"));
    const token = localStorage.getItem("token");
    dispatch(handleLogin(tokenvalue));
    console.log(tokenvalue);
    if (tokenvalue) {
      navigate("/add");
    } else {
      navigate("/login");
    }
  }, []);

  const submit = async (e) => {
    if (persondata.length == 0) {
      e.preventDefault();
      try {
        const { data } = await axios.post("/add/person", {
          firstname,
          lastname,
          age,
          qualification,
        });
        setPersondata({ ...data });
        alert("submitted successfully");
        setFirstname("");
        setLastname("");
        setAge("");
        setQualification("");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("already submitted");
      setFirstname("");
      setLastname("");
      setAge("");
      setQualification("");
    }
  };

  return (
    // <div>
    //   <h1>Fill the form </h1>
    //   <form>
    //     <h4>Firstname</h4>
    //     <input
    //       type="text"
    //       value={firstname}
    //       onChange={(e) => setFirstname(e.target.value)}
    //     />
    //     <h4>Lastname</h4>
    //     <input
    //       type="text"
    //       value={lastname}
    //       onChange={(e) => setLastname(e.target.value)}
    //     />
    //     <h4>Age</h4>
    //     <input
    //       type="number"
    //       value={age}
    //       onChange={(e) => setAge(e.target.value)}
    //     />
    //     <h4>Qualification</h4>
    //     <input
    //       type="text"
    //       value={qualification}
    //       onChange={(e) => setQualification(e.target.value)}
    //     />
    //   </form>
    //   <button type="submit" onClick={submit}>
    //     submit
    //   </button>
    // </div>
    <div>
      <Header />
      <h1>Registaration Form</h1>

      <div class="container">
        <form>
          <div class="row">
            <div class="col-10">
              <label for="fname">First Name:</label>
            </div>
            <div class="col-90">
              <input
                type="text"
                id="fname"
                value={firstname}
                placeholder="Enter your first name"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <label for="lname">Last Name:</label>
            </div>
            <div class="col-90">
              <input
                type="text"
                id="lname"
                value={lastname}
                placeholder="Enter your last name"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <label for="email">Age</label>
            </div>
            <div class="col-90">
              <input
                type="number"
                id="email"
                value={age}
                placeholder="it should contain 1,2 number"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <label for="mobile">Qualification</label>
            </div>
            <div class="col-90">
              <input
                type="tel"
                id="mobile"
                onChange={(e) => setQualification(e.target.value)}
                placeholder="Enter your degree or currently study"
                value={qualification}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <label for="gender" required>
                Gender:
              </label>
            </div>
            <div class="col-90">
              <input type="radio" id="male" name="gender" value="male" />
              Male
              <input type="radio" id="female" name="gender" value="female" />
              Female
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <label for="dob">Date Of Birth:</label>
            </div>
            <div class="col-90">
              <input type="Date" id="dob" name="dob" />
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <label for="address">Address:</label>
            </div>
            <div class="col-90">
              <textarea
                name="address"
                id="address"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <label for="city">City:</label>
            </div>
            <div class="col-90">
              <input type="text" id="city" name="city" maxlength="10" />
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <label for="pincode">Area PIN:</label>
            </div>
            <div class="col-90">
              <input type="number" id="pin" name="pin" maxlength="6" />
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <label for="state">State:</label>
            </div>
            <div class="col-90">
              <input type="text" id="state" name="state" />
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <label for="qualification" required>
                Qualification:
              </label>
            </div>
            <div class="col-90">
              <select name="qualification" id="qualification">
                <option value=" ">Select Qualification:</option>
                <option value="Graduation">Graduation</option>
                <option value="BTech.">BTech.</option>
                <option value="MTech.">MTech.</option>
                <option value="MCA">MCA</option>
                <option value="BCA">BCA</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <label for="specialization">Specialization:</label>
            </div>
            <div class="col-90">
              <input
                type="checkbox"
                class="specialization"
                id="cs"
                name="specialization[]"
                value="Computer Science"
              />
              Computer Science
              <br />
              <input
                type="checkbox"
                class="specialization"
                id="it"
                name="specialization[]"
                value="Information Technology"
              />
              Information Technology
              <br />
              <input
                type="checkbox"
                class="specialization"
                id="ca"
                name="specialization[]"
                value="Computer Architecture"
              />
              Computer Architecture
              <br />
              <input
                type="checkbox"
                class="specialization"
                id="tc"
                name="specialization[]"
                value="Tele Communication"
              />
              Tele Communication
              <br />
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <label for="password">Password:</label>
            </div>
            <div class="col-90">
              <input
                type="password"
                id="password"
                name="password"
                maxlength="8"
              />
            </div>
          </div>
        </form>
        <div class="row">
          <button type="submit" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
      <Link to="/">Bact to Home page </Link>
    </div>
  );
};

export default Add;
