import React from 'react';
import Navbar from '../components/Navbar';
import Course from '../components/Course';
import Footer from '../components/Footer';

function Courses() {
  // If you intend to log some information, use a defined variable or state
  // For example, if you want to log something from the Course component, ensure it is passed as a prop

  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
