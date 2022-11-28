import React, { useState } from "react";
import Styles from "./_auth.module.css";
import Auth_image from "../../imges/Auth_image.jpg";
import { toast } from "react-toastify";
// custom firebase function
import { auth } from "../../apis/firebase";
// built-in firebase functions for Authetication
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import md5 from "md5"
import { signInWithPhoneNumber } from 'firebase/auth';
const Register = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber:"",
    confirmpassword: "",
    isLoading: false,
  });
  let { username, email, password, confirmpassword, isLoading,phoneNumber } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      if (password !== confirmpassword) {
        toast.error("Password is not matched");
      } else {
        setState({ isLoading: true });
        // let payload = { email, password };
       let userData= await createUserWithEmailAndPassword(auth, email, password);
        // navigate("/login");
        // toast.success(`successfully ${username} created`);
        sendEmailVerification(userData.user)
        let message=`Email Verification has been sent to ${email} address please verify...`
        updateProfile(userData.user,{
          displayName:username,
          photoURL:`https://www.gravatar.com/avatar/${md5(email)}?q=identicon`
        })
        toast.success(message);
        navigate("/login")

      }
      console.log(state);
    } catch (error) {
      toast.error(error.code);
    }
    ////!----------------------------Re-Set input field empty---------------------------
    setState({
      username: "",
      email: "",
      password: "",
      phoneNumber:"",
      confirmpassword: "",
    });
  };

  return (
    <section id={Styles.authBlock}>
      <article>
        <div className={Styles.authLeft}>
          <h1>Register</h1>
          <figure>
            <img src={Auth_image} alt="auth-image" />
          </figure>
        </div>
        <div className={Styles.authRight}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Name</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="enter your name"
                onChange={handleChange}
                value={username}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="enter your email"
                onChange={handleChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="enter your password"
                onChange={handleChange}
                value={password}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmpassword">Confirm-Password</label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                placeholder="enter your confirm-password"
                onChange={handleChange}
                value={confirmpassword}
              />
            </div>
            <div className="form-group">
              <button>{isLoading === true ? "loading...." : "Register"}</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Register;
