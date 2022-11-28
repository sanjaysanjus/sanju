import React from 'react';
import Styles from "./_auth.module.css";
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
import { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import {auth} from "../../apis/firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
  let navigate=useNavigate()
  let [toggle,settoggle]=useState(false);
  let [showPassword,setshowPassword]=useState(false)
  let [Email,setEmail]=useState("")
  let [Password,setPassword]=useState("")
  let [Phone,setphone]=useState("")

  let[isLoading,SetIsLoading]=useState(false)


  let togglePassword=()=>{
    settoggle(!toggle);
    setshowPassword(!showPassword)
  }

  let handleSubmit= async e=>{
    e.preventDefault()
    try {
      SetIsLoading(true)
    let userData=await signInWithEmailAndPassword(auth,Email,Password);
  
    if(userData.user.emailVerified===true){
      navigate("/")
    toast.success(`succesfully ${Email} logged in`)
    toast.success(`succesfully ${Phone} logged in with Phoneno`)


    }else{
      toast.error("Email not yet verified")
    }
    } catch (error) {
      toast.error(error.code)
    }
    setEmail("");
    setPassword("");
    setphone("")
    SetIsLoading(false)
  }
  return (
      <section id={Styles.authLoginBlock}>
<article>


  <div className="container">
    <h1>Login</h1>
    <Link to="/phone-auth" className={Styles.phoneAuth}>Login with phone number</Link>
    <form action="" onSubmit={handleSubmit}>
     
      <div className="form-group"><label htmlFor="email">Email</label>
      <input type="text" placeholder='Enter an email' value={Email} onChange={e=>setEmail(e.target.value)} required/>
      </div>
      <div className="form-group" ><label htmlFor="password">Password</label>
      <input type={showPassword===true?"text":"password"} placeholder='Enter a password'  value={Password} onChange={e=>setPassword(e.target.value)} required/>
      
      <span className={Styles.eyeIcon} onClick={togglePassword}>{ showPassword===true?<AiFillEye/>:<AiFillEyeInvisible/>}</span>
      </div>
     
      <div className='form-group'>
        <aside>
        <span>Don't have an account</span>
        <span><Link to="/register">Register</Link></span>
        </aside>
        <p><Link to="/reset-password">Reset Password</Link></p>
      </div>
      <div className='form-group'>
        <button>{isLoading===true?"...Loading":"Login"}</button>
      </div>
    </form>
  </div>
</article>
    </section>
  )
}
export default Login
