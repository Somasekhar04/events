import React from "react";
import "../Services/Services.css";
import Serv from "../../Images/Serv.jpg";

function Services() {
  return (
    <div
      className="Services"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="card-1" style={{ height: 350, color: "white" }}>
        <h1>Services</h1>
        <p style={{fontSize: 22}}>
          "We manage different kind of events like Weddings, Birthday Prties,
          16years birthday party. For every event we intract with our
          clinets.So, that we can desing everything according to their taste."
        </p>
        <button className="buts"style={{width:200, height: 40, borderRadius: 30, }}>Discover</button>
      </div>
      <div className="card-2" style={{ height: 350 }}>
        <img src={Serv} />
      </div>
    </div>
  );
}

export default Services;
