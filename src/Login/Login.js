import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth, db } from "../firebase";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [reg, setReg] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
     db.collection('Accounts').onSnapshot(snapshot=>{
      snapshot.docs.forEach((doc)=>{
        if(doc.data().email==email)
        {
          dispatch(login({
            email: doc.data().email,
            displayName: doc.data().name,
            profileUrl: doc.data().profilePic,
            password:doc.data().password,
            reg: doc.data().reg,
          }))
        }
      })
     })
    } catch (error) {
      alert(error);
    }
  };

  const register = async () => {
    if (!name) {
      return alert("Please enter a full name!");
    }
    try {
      db.collection('Accounts').add({
        email: email,
        displayName: name,
        profileUrl: profilePic,
        password:password,
        reg: reg,
      })
        dispatch(login(
          {
            email: email,
            displayName: name,
            profileUrl: profilePic,
            password:password,
            reg: reg,
          }
        ))
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="login">
      <img
        src="https://i.ibb.co/D83KL2j/proflinkr.png"
        alt="Proflinkr Logo"
      />

      <form>
        <input
          placeholder="Full name (required for register)"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Profile pic URL (optional)"
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />

        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Reg No."
          type="text"
          value={reg}
          onChange={(e) => setReg(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={loginHandler}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login-register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
