import React from "react";
import Style from "./Footer.module.css";
import Visa from "../../assest/Images/Visa.PNG";
import mada from "../../assest/Images/mada.PNG";

import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
function Footer() {
  return (
    <div className={Style.Footer}>
      <div>
        <h3>About the academy</h3>
        <p>
          lorem is dolor sit amet ,constructorlorem is dolor sit amet
          ,constructorlorem is dolor sit amet ,constructorlorem is dolor sit
          amet ,constructor
        </p>
        <h5>Join us on Social</h5>
        <div
        className={Style.Social}
          style={{
            display: "flex",
            flexDirection: "row",
            width: "57%",
            justifyContent: "space-between",
          }}
        >
          <div>
            <FaFacebookSquare size={30} color="white" />
          </div>
          <div>
            {" "}
            <FaYoutube size={30} color="white" />{" "}
          </div>

          <div>
            <FaTwitter size={30} color="white" />{" "}
          </div>

          <div>
            <FaInstagram size={30} color="white" />{" "}
          </div>
        </div>
      </div>
      <div style={{ color: "gray", marginTop: "20px" }}>
        <h3>Terms adn Condition</h3>
        <h5>Join as instructor</h5>
        <h5>Client Talks</h5>
        <h5>Call us</h5>
        <h5>Language:EN</h5>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h3>Pay With</h3>
        <img style={{ marginBottom: "30px", width: "70%" }} src={Visa} alt="" />
        <img style={{ marginBottom: "30px", width: "80" }} src={mada} alt="" />
      </div>
    </div>
  );
}

export default Footer;
