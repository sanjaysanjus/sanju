import React, { useState,useContext } from 'react'
import { toast } from 'react-toastify'
import Styles from "./_profile.module.css"
import {db,auth} from "../../apis/firebase"
import { addDoc,collection,doc,setDoc} from '@firebase/firestore'
import {updateProfile} from "@firebase/auth"
import { AuthContext } from '../../apis/AuthContextApi'

//doc means only one document
const AddProfileData = () => {


  let {authUser}=useContext(AuthContext)
  let {uid}=authUser===null?"":authUser;
  console.log(uid);
  let [state,setState]=useState({
    firstname:"",
    lastname:"",
    gender:"",
    city:"",
    address:"",
    isLoading:false,
  })
  let {firstname,lastname,gender,city,address,isLoading}=state
  let handleChange=e=>{
    let {name,value}=e.target;
    setState({...state,[name]:value})
  }






  let handleSubmit= async e=>{
    e.preventDefault()
    console.log(state);
    try {
      let payload={firstname,lastname,gender,city,address}
      //create location and store data into location
      //collection path is (database location)
      let userCollectionRef=doc(db,"users",uid)
     let {displayName,photoURL,uid,email,phonenumber}=authUser
     await setDoc(userCollectionRef,{
      uid,
      displayName,
      photoURL,
      email,
      ...payload,
    
     })
     window.location.assign("/profile")
    
     // insert document into the location
     //adddoc is used to create collection
     toast.success("user information is updated")
    } catch (error) {
      toast.error(error.code)
    }
  
  }

 

  return (
    <div className={Styles.ProfileMainBlock}>
     <h1>Add profile</h1>
     <form className={Styles.profileForm} onSubmit={handleSubmit}>
        <div className='form-group'>
            <label htmlFor='firstname'>first Name </label>
            <input type="text" name="firstname" id="firstname" value={firstname} required onChange={handleChange}/>
        </div>
        <div className='form-group' >
            <label htmlFor='lastname'> last Name </label>
            <input type="text" name="lastname" id="lastname" value={lastname} required onChange={handleChange}/>
        </div>
        <div className='form-group' onChange={handleChange} value={gender}>
            <label htmlFor='gender'>Gender</label> 
            <span> <input type="radio" name="gender" id="firstname" value="male" />Male</span>
            <span>  <input type="radio" name="gender" id="firstname" value="female"/>Female</span>
        </div>
        <div className='form-group' >
            <label htmlFor='city'>city </label>
            <input type="text" name="city" id="city" value={city} required onChange={handleChange}/>
        </div>
        <div className='form-group' id={Styles.textArea} onChange={handleChange}>
            <label htmlFor='address'> </label>
          <textarea name="address" id="address" cols="30" rows="10" value={address}></textarea>
        </div>
        <div className='form-group'>
           <button>{isLoading===true?"Loading...":"Submit"}</button>
        </div>
     </form>
    </div>
  )
}

export default AddProfileData
