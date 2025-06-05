import React, { useState } from "react";

import WelcomeScreen from "./components/WelcomeScreen.jsx";
import LoginScreen from "./components/LoginScreen.jsx";
import SignUpScreen from "./components/SignUpScreen.jsx";
import AccountSettingsScreen from "./components/AccountSettingsScreen.jsx";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "Marry Doe",
    email: "Marry@Gmail.Com",
    phone: "123-456-7890", 
    companyName: "PopX Inc.", 
    profilePic:
      "https://res.cloudinary.com/dszd8jabc/image/upload/v1749147030/Ellipse_114_2x_xhfiu8.png",
  });
  const navigate = useNavigate(); 

  const handleLogin = (email, password) => {
    if (email && password) {
    
      setIsLoggedIn(true);
      setUserData((prev) => ({ ...prev, email: email })); 
      navigate("/account");
    } else {
      console.log("Login failed: email or password missing");
     
    }
  };

  const handleSignUp = (formData) => {
    setIsLoggedIn(true);
    setUserData({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      companyName: formData.companyName,
      profilePic: userData.profilePic, 
    });
    navigate("/account");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-sm h-[700px] bg-white shadow-xl rounded-lg overflow-hidden flex flex-col">
        <div className="flex-grow overflow-y-auto">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route
              path="/signup"
              element={<SignUpScreen handleSignUp={handleSignUp} />}
            />
            <Route
              path="/login"
              element={<LoginScreen handleLogin={handleLogin} />}
            />
            <Route
              path="/account"
              element={
                isLoggedIn ? (
                  <AccountSettingsScreen
                    userData={userData}
                    handleLogout={handleLogout}
                  />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            {/* Fallback route for any undefined paths */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
