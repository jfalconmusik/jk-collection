import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Footer() {
  const { isPortrait } = useContext(Context);

  return (
    <nav
      className="footer"
      style={{
        justifyContent: "space-evenly",
        display: "flex",
        flexDirection: "row",
        maxHeight: "60px",
        width: "100vw",
        marginTop: "1000px",
      }}
    >
      {isPortrait && (
        <div className="row headerItem" style={{ zIndex: "90" }}>
          <img
            className="socialIcon"
            width="20px"
            alt="pinterest"
            src="https://i.ibb.co/5Bb3gHX/pinterest-social-logo.png"
          />
          <img
            className="socialIcon"
            width="20px"
            src="https://i.ibb.co/MhrzBKH/twitter.png"
            alt="twitter"
            border="0"
          />
          <img
            className="socialIcon"
            width="20px"
            src="https://i.ibb.co/gP4RKF8/facebook.png"
            alt="facebook"
            border="0"
          />
          <img
            className="socialIcon"
            width="20px"
            src="https://i.ibb.co/nMcYrk9/instagram.png"
            alt="instagram"
            border="0"
          />
        </div>
      )}
      <div
        style={{
          margin: "0 auto",
          position: "relative",
          display: `flex`,
          flexDirection: `row`,
          right: `${isPortrait ? "90px" : ""}`,
          justifyContent: `${isPortrait ? "space-around" : "space-evenly"}`,
          bottom: "10px",
          maxWidth: "100vw",
        }}
      >
        <Link to="/privacy-policy">
          <button
            type="button"
            style={{
              textDecoration: "none",
              color: "black",
              paddingLeft: "20px",
              paddingRight: "20px",
              whiteSpace: "nowrap",
              color: "pink",
              display: `${isPortrait ? "none" : "flex"}`,
            }}
            className="custom-btn btn-6"
          >
            Privacy Policy
          </button>
        </Link>
        <Link to="/terms-of-service">
          <button
            className="custom-btn btn-6"
            style={{
              textDecoration: "none",
              color: "black",
              paddingLeft: `${isPortrait ? "0px" : "20px"}`,
              paddingRight: `${isPortrait ? "0px" : "20px"}`,
              whiteSpace: "nowrap",
              color: "pink",
              display: `${isPortrait ? "none" : "flex"}`,
            }}
          >
            Terms of Service
          </button>
        </Link>
        <Link to="/contact">
          <button
            className="custom-btn btn-6"
            style={{
              textDecoration: "none",
              color: "black",
              paddingLeft: "20px",
              paddingRight: "20px",
              whiteSpace: "nowrap",
              color: "pink",
              display: `${isPortrait ? "none" : "flex"}`,
            }}
          >
            Contact Us
          </button>
        </Link>

        <button
          className="custom-btn btn-1"
          style={{
            textDecoration: "none",
            color: "black",
            width: "fit-content",
            whiteSpace: "nowrap",
            paddingLeft: `${isPortrait ? "10px" : "20px"}`,
            paddingRight: `${isPortrait ? "10px" : "20px"}`,
          }}
        >
          <a href="" style={{ position: "relative", bottom: "7px" }}>
            <img
              alt="jiva facebook page"
              src="https://i.ibb.co/gP4RKF8/facebook.png"
              width="30em"
              // style={{ position: "relative", top: "20px" }}
              height="auto"
            ></img>
          </a>
        </button>

        <button
          className="custom-btn btn-1"
          style={{
            textDecoration: "none",
            color: "black",
            width: "fit-content",
            whiteSpace: "nowrap",
            paddingLeft: `${isPortrait ? "10px" : "20px"}`,
            paddingRight: `${isPortrait ? "10px" : "20px"}`,
          }}
        >
          <a style={{ position: "relative", bottom: "7px" }} href="">
            <img
              width="30em"
              height="auto"
              alt="instagram"
              src="https://i.ibb.co/nMcYrk9/instagram.png"
            ></img>
          </a>
        </button>

        <button
          className="custom-btn btn-1"
          style={{
            textDecoration: "none",
            color: "black",
            width: "fit-content",
            whiteSpace: "nowrap",
            paddingLeft: `${isPortrait ? "10px" : "20px"}`,
            paddingRight: `${isPortrait ? "10px" : "20px"}`,
          }}
        >
          <a style={{ position: "relative", bottom: "6px" }} href="">
            <img
              width="30em"
              height="auto"
              alt="pinterest"
              src="https://i.ibb.co/5Bb3gHX/pinterest-social-logo.png"
            ></img>
          </a>
        </button>

        <button
          className="custom-btn btn-1"
          style={{
            textDecoration: "none",
            color: "black",
            width: "fit-content",
            whiteSpace: "nowrap",
            paddingLeft: `${isPortrait ? "10px" : "20px"}`,
            paddingRight: `${isPortrait ? "10px" : "20px"}`,
          }}
        >
          <a style={{ position: "relative", bottom: "5px" }} href="">
            <img
              width="30em"
              height="auto"
              alt="twitter"
              src="https://i.ibb.co/MhrzBKH/twitter.png"
            ></img>
          </a>
        </button>
      </div>
    </nav>
  );
}

export default Footer;
