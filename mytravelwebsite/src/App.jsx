import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider, { AuthContext } from "./apis/AuthContextApi";
import ProtectedRoute from "./Router/ProtectedRoute";
import PublicRoute from "../src/Router/PublicRoute"
import Profile from "./components/profile/Profile";
import ProfileDefault from "./components/profile/ProfileDefault";
import UploadPhoto from "./components/UploadPhoto";
import ResetPassword from "./components//auth//ResetPassword"
import PhoneAuth from "./components//auth//PhoneAuth"
import AddProfileData from "./components/profile/AddProfileData";
import Hotel from "./pages/Booking Component/Hotel";
import Admin from "./pages/Booking Component/Admin";
import AddHotel from "./pages/Booking Component/AddHotel";
import AdminRoute from "./Router/AdminRoute";

const App = () => {
  return (
  <AuthProvider>   <Router>
  <Navbar />
  <ToastContainer theme="dark" />
  <Routes>
    
    <Route path="/" element={ <Home/>}/>
      <Route path="/hotels" element={<AdminRoute><Admin/></AdminRoute>}/>
      <Route path="/add-hotel" element={<AddHotel/>}/>
    <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}>
      <Route index element={<ProtectedRoute><ProfileDefault/></ProtectedRoute>}/>
      <Route path="upload-profile-photo" element={<ProtectedRoute><UploadPhoto/></ProtectedRoute>}/>
      <Route path="add-profile" element={<ProtectedRoute><AddProfileData/></ProtectedRoute>}/>
      </Route>
    <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
    <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
    <Route path="/reset-password" element={<PublicRoute><ResetPassword/></PublicRoute>} />
    <Route path="/phone-auth" element={<PublicRoute><PhoneAuth/></PublicRoute>} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</Router>
</AuthProvider>
    
   
  );
};

export default App;
