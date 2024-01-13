import React from "react";
import "../Home/Home.css";
import Hello from "../../Images/Homebg1.jpg";

function Home() {
  return (
    <div className="main">
      <div
        className="Home"
        style={{
          backgroundImage: `url(${Hello})`,
          width: 1490,
          height: 600, 
        }}
      >
      <div className="card">
      <div className="Hello" style={{ display : 'flex'}}> "Make moments memoriable with us..."</div>
      </div>
      </div>
    </div>
  );
}

export default Home;
