import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../apis/AuthContextApi";
import {db} from "../apis/firebase"
import {getDoc,doc} from "@firebase/firestore"
import {toast} from "react-toastify"

let AdminRoute=({children})=>{
    let [role,setRole]=useState(null)
    let {isLoading,authUser}=useContext(AuthContext);
    console.log(authUser)
    let {uid}=authUser===null?"":authUser;
    if((isLoading===true&&authUser.accessToken)|| window.sessionStorage.getItem("token")){
        let fetchData=async ()=>{
            let adminRef=doc(db,"users",uid);
            let adminUser=await getDoc(adminRef);
            let {role}=adminRef.data();
            console.log(role);
            setRole(role)
        }
        fetchData()
        if(role !==undefined||(role!==null&&role==="admin")){
            return <>{children}</>
        }else{
            toast.warn("You are not Authorized")
            return <Navigate to="/profile"/>
        }
        
    }
    else{
        return <Navigate to="/login"/>
    }
}
export default AdminRoute;