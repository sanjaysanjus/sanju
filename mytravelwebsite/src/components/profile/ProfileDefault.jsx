import React, { Fragment, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../apis/AuthContextApi";
import Spinner from "../../pages/Spinner";
import Styles from "./_profile.module.css";
import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { collection, doc, onSnapshot,getDocs } from "@firebase/firestore";
import { db } from "../../apis/firebase";

const ProfileDefault = () => {
  let { authUser } = useContext(AuthContext);
  let {uid}=authUser===null?"":authUser
  let [profile, setProfile] = useState("");

 
  let userCollectionRef = collection(db, "users");
  let fetchData = async () => {
    let userRef=doc(db,"users",uid)
    let profileData= await getDocs(userRef)
console.log(profileData)
setProfile(profileData?.Data())
  };

let fetchData1=async ()=>{
  onSnapshot(doc(db,"users",uid),doc=>{
    setProfile(doc.data())
  })
}
  useEffect(() => {
   

    fetchData();
  }, []);
  return (
    <div className={Styles.mainProfileBlock}>
      {authUser === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1>Profile</h1>
          <article>
            <aside className={Styles.asideIcon}>
              <Link to="/profile/upload-profile-photo">
                <figure>
                  <img src={authUser.photoURL} alt={authUser.displayName} />
                </figure>
                <main>
                  <span className={Styles.cameraIcon}>
                    <FaCamera />
                  </span>
                </main>
              </Link>
            </aside>
            <footer>
              <h1>{authUser.displayName}</h1>
              <h4>{authUser.email}</h4>
            </footer>
            <aside className={Styles.profileUser}>
              <Fragment>
                <p>{profile.gender}</p>
                <p>{profile.city}</p>
                <p>{profile.address}</p>
              </Fragment>
            </aside>
          </article>
        </Fragment>
      )}
    </div>
  );
};

export default ProfileDefault;