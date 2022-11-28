import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Styles from "./_navbar.module.css";
import { AuthContext } from "../../apis/AuthContextApi";
import { useContext } from "react";
const Menu = () => {
  let {authUser,isLoading,Logout}=useContext(AuthContext);
  console.log(authUser)
  let AuthenticatedUser=()=>{
return (
  <Fragment>
    <li>
      <NavLink to="/profile" className={Styles.avatarURL}>
        <img src={authUser.photoURL}  alt={authUser.username} />
      </NavLink>
    </li>
    <li>
      <button onClick={()=>Logout()} className="logout">Logout</button>
    </li>
  </Fragment>
)
  }
  let AnynoumsUser=()=>{
return(<Fragment>
 <li>
          <NavLink to="/register" activeClassName="active">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
</Fragment>)
  }

  return (
    <div className={Styles.menuBlock}>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        {isLoading===true?("...Loading"):authUser===null?(<AnynoumsUser/>):(<AuthenticatedUser/>)}
      </ul>
    </div>
  );
};

export default Menu;
