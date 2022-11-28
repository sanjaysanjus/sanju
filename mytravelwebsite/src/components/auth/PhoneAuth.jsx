import React from 'react';
import Styles from "./_auth.module.css";

import { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import {auth} from "../../apis/firebase"
import { signInWithPhoneNumber,RecaptchaVerifier } from 'firebase/auth';




const PhoneAuth = () => {
  let navigate=useNavigate()

  let [phone,setPhone]=useState("")

  let[isLoading,SetIsLoading]=useState(false)


  let handleSubmit= async e=>{
    e.preventDefault()
    try {
        SetIsLoading(true)
let reCaptchVerifier=new RecaptchaVerifier("captcha-container",{size:"invisible", callback:response=>{console.log(response)}},auth)
let sendOtp=signInWithPhoneNumber(auth,phone,reCaptchVerifier)
       let confirmationMessage=window.prompt("enter OTP");
       (await sendOtp).confirm(confirmationMessage)
      navigate("/")
    
    } catch (error) {
      toast.error(error.code)
    }
    setPhone("");
    // setPassword("");
    SetIsLoading(false)
  }
  return (
      <section id={Styles.authLoginBlock}>
<article>


  <div className="container">
    <h1>Login With Phone Number</h1>
    <form action="" onSubmit={handleSubmit}>
      <div className="form-group"><label htmlFor="phone">phone Number</label>
      <input type="text" placeholder='Enter valid phone Number' value={phone} onChange={e=>setPhone(e.target.value)} required/>
      </div>
      <div id="captcha-container"></div>
      <div className='form-group'>
        <aside>
        <span>Alerady have an account</span>
        <span><Link to="/login">Login</Link></span>
        </aside>
        {/* <p><Link to="/reset-password">Reset Password</Link></p> */}
      </div>
      <div className='form-group'>
        <button>{isLoading===true?"Loading....":"Send OPT"}</button>
      </div>
    </form>
  </div>
</article>
    </section>
  )
}
export default PhoneAuth
