import React from 'react';
import Styles from "./_auth.module.css";
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
import { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import {auth} from "../../apis/firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';
// import {sentPasswordRestEmail} from "@firebase/auth"
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
  let navigate=useNavigate()
//   let [toggle,settoggle]=useState(false);
//   let [showPassword,setshowPassword]=useState(false)
  let [Email,setEmail]=useState("")
//   let [Password,setPassword]=useState("")
  let[isLoading,SetIsLoading]=useState(false)


//   let togglePassword=()=>{
//     settoggle(!toggle);
//     setshowPassword(!showPassword)
//   }

  let handleSubmit= async e=>{
    e.preventDefault()
    try {

        SetIsLoading(true)
      sendPasswordResetEmail(auth,Email);
      toast.info(`password reset link has been sent ${Email} address please reset new password`)
      navigate("/login")
    
    } catch (error) {
      toast.error(error.code)
    }
    setEmail("");
    // setPassword("");
    SetIsLoading(false)
  }
  return (
      <section id={Styles.authLoginBlock}>
<article>


  <div className="container">
    <h1>Reset Password</h1>
    <form action="" onSubmit={handleSubmit}>
      <div className="form-group"><label htmlFor="email">Email</label>
      <input type="text" placeholder='Enter an email' value={Email} onChange={e=>setEmail(e.target.value)} required/>
      </div>
      <div className='form-group'>
        <aside>
        <span>Alerady have an account</span>
        <span><Link to="/login">Login</Link></span>
        </aside>
        {/* <p><Link to="/reset-password">Reset Password</Link></p> */}
      </div>
      <div className='form-group'>
        <button>{isLoading===true?"...Loading":"Reset Password"}</button>
      </div>
    </form>
  </div>
</article>
    </section>
  )
}
export default Login
