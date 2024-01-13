import React from "react";
import "../Gallery/Gallery.css";
import Backg2 from "../../Images/gallary.jpeg";

function Gallery() {
  return (
    <div className="gmain" style={{ backgroundImage: `url(${Backg2})` }}>
      <div>
        <div className="gright">
          <h1 style={{ color: "white", fontFamily: "cursive" }}>Gallery</h1>
          <p style={{ fontSize: 20, color: "white", height: 150, margin: 39 }}>
            "Findout some of the events we managed and successfully completed."
          </p>
          <button
            className="gbut"
            style={{ width: 200, height: 40, borderRadius: 30 }}
          >
            Discover
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
