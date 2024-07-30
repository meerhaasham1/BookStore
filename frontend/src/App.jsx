import React from "react";
import Home from "./home/Home/";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";
import Contact from "./Contact/Contact";  // Adjusted to match the folder structure
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
    const [authUser, setAuthUser] = useAuth();  // useAuth should be a hook that returns the user and a function to set the user
console.log(authUser)
  
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate  to="/signup" />}
          />
        <Route path="/contact" element={<Contact/>} />

        <Route path="/signup" element={<Signup />} />


      </Routes>
      <Toaster/>
      </div>
      </>


  );
}

export default App;
