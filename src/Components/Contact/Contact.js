import React from "react";
import "../Contact/Contact.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Contact() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="address" >
      <div className="para2" style={{ marginRight: 20}}><p>353 Sip Ave,</p>
        <p>Jerseycity,</p>
        <p>New Jersey</p>
        </div>
      </div>
      <div className="mobile" >
      <div className="para1"style={{ marginTop: 20, marginRight: 10}}>
      <p>Mobile: +1(201)8936174</p>
        <p>Phone: +1(551)xxxxxxx</p>
        <p>somasekharalapati04@gmail.com</p>
      </div>
        </div>
        <div className="social">
        <div className="sbutton">
            <InstagramIcon fontSize="large"/>
            <FacebookIcon fontSize="large"/>
            <TwitterIcon fontSize="large"/>
            <PinterestIcon fontSize="large"/>
            </div>
            <div className="sbutton-2">
            <button className="Button" style={{ marginTop: 20 }}>Book Appointment</button></div>
        </div>
        
        <div className="copy">
        <div className="para3" style={{ marginRight: 20}}><p>Copy@{currentYear}</p>
          <p> Site build by Somasekhar.A</p></div>
          
        </div>
      
    </div>
  );
}

export default Contact;
