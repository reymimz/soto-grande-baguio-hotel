import React from "react";
import Navbar from "../../components/navbar/CNavbar";
import "./gallery.scss";
import ImageList from "../../contexts/ImageList";
import CFooter from "../../components/cfooter/CFooter";
import SmallHeader from "../../components/smallheader/SmallHeader";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div className="gallery">
       <SmallHeader title="Soto Grande Baguio Hotel - Gallery"/>
        <div className="g-container">
          {ImageList.length &&
            ImageList.map((item, i) => {
              return <img src={item} className="g-box" alt="" key={i} />;
            })}
        </div>
      </div>
      <CFooter />
    </>
  );
};

export default Gallery;
