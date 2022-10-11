import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Rooms from "./screens/rooms/Rooms";
import Facilities from "./screens/facilities/Facilities";
import Gallery from "./screens/gallery/Gallery";
import Reviews from "./screens/reviews/Reviews";
import Location from "./screens/location/Location";
import About from "./screens/about/About";
import Contact from "./screens/contact/Contact";
import Home from "./screens/home/Home";

const App = () => {
  return (
<<<<<<< HEAD


    
    <>
      <div className="root">
=======
  	<>
  	
      <div className="root">
    
    <CNavbar/>

>>>>>>> parent of 75b43f9 (Adding rating star in Reviews)
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/location" element={<Location />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
