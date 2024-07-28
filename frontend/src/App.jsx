import React from "react";
import Home from "./home/Home/";
import { Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";
import Contact from "./Contact/Contact";  // Adjusted to match the folder structure

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/contact" element={<Contact/>} />

        <Route path="/signup" element={<Signup />} />


      </Routes>
      </div>
      </>


  );
}

export default App;
