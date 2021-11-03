import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

const Sidebar = () => {
  const {
    sidebarOpen,
    setSidebarOpen,
    isSafari,
    handleSidebar,
    styleColors,
    isOnAgentSite,
    onHomeScreen,
    uid,
    onBrowse,
    setOnHomeScreen,
    setOnBrowse,
    setOnAccount,
    onAccount,
    isAgent,
    isPendingVerification,
    requestRejected,
    setShowModalCenter,
    setShowRejected,
    setIsOnAgentSite,
    isPortrait,
  } = useContext(Context);

  return (
    <div
      id="sidebar"
      className="sidebar"
      style={{
        background: "white",
        opacity: "0.89",
        position: "fixed",
        zIndex: "99",
        top: "-20px",
        left: "0em",
        width: "63%",
        paddingTop: "40px",
        marginTop: "1em",
        height: "270vh",
        display: `${sidebarOpen ? "flex" : "none"}`,
        whiteSpace: "nowrap",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          float: "left",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "relative",
            margin: "0 auto",
            top: "20px",
            float: "left",
            position: "relative",
            // left: "20vw",
          }}
        >
          {uid && !isAgent && !requestRejected && (
            <div
              style={{
                position: "relative",
              }}
            >
              <button
                className="custom-btn btn-5"
                type="button"
                disabled={isPendingVerification}
                style={{
                  whitespace: "no-wrap",
                  width: "150px",
                  marginRight: "-30px",
                  pointerEvents: "all",
                  textDecoration: "none",
                }}
              >
                {isPendingVerification ? (
                  "In Review"
                ) : (
                  <Link to="/agent-sign-up">Create Agent Account</Link>
                )}
              </button>
            </div>
          )}
          {uid && !isAgent && requestRejected && (
            <div
              style={{
                position: "relative",
              }}
            >
              <button
                className="custom-btn btn-5"
                onClick={() => {
                  setShowModalCenter(true);
                  setShowRejected(true);
                }}
                type="button"
                style={{
                  whitespace: "no-wrap",
                  pointerEvents: "all",
                  textDecoration: "none",
                }}
              >
                <img
                  style={{ width: "15px", height: "15px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/j-collection.appspot.com/o/icons%2Fexclamation.jpg?alt=media&token=b0a827ba-7d62-4f20-8bc8-5ea2bc871aa4"
                  alt="!!!"
                />
              </button>
            </div>
          )}
          {uid && isAgent && !isOnAgentSite && (
            <div
              style={{
                position: "relative",
              }}
            >
              <button
                className="custom-btn btn-5"
                type="button"
                disabled={isPendingVerification}
                onClick={() => setIsOnAgentSite(true)}
                style={{
                  whitespace: "no-wrap",
                  pointerEvents: "all",
                  textDecoration: "none",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  // color: "white",
                }}
              >
                <Link to="/agent-console" style={{ color: "pink" }}>
                  Agent Console
                </Link>
              </button>
            </div>
          )}
          {uid && isAgent && isOnAgentSite && (
            <div
              style={{
                position: "relative",
              }}
            >
              <Link to="/">
                <button
                  className="custom-btn btn-5"
                  type="button"
                  disabled={isPendingVerification}
                  onClick={() => setIsOnAgentSite(false)}
                  style={{
                    whitespace: "no-wrap",
                    pointerEvents: "all",
                    textDecoration: "none",
                    color: "white",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                    top: "20vh",
                    width: "180px",
                  }}
                >
                  View User Site
                </button>
              </Link>
            </div>
          )}
        </div>
        {isOnAgentSite ? (
          <div
            style={{
              pointerEvents: "none",
              justifyContent: "space-between",
              flexDirection: "column",
              textDecoration: "none",
              margin: "0 auto",
              top: "21vh",
              position: "relative",
              float: "left",
              alignContent: "center",
              // left: "20vw",
            }}
            // onMouseOver={() => setShowMenuShop(true)}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link
                // onClick={() => setOnHomeScreen(true)}
                style={{
                  color: `${onHomeScreen ? styleColors.maroon : "white"}`,
                  "overflow-x": "hidden",
                  // visibility: `${listItemDisplay}`,
                  "font-size": "xx-large",
                  position: "relative",
                  padding: "30px",
                  paddingBottom: "15px",
                  textDecoration: "none",
                  zIndex: "98",
                  pointerEvents: "all",
                }}
                to={`/agent-appointments/${uid}`}
              >
                <button className="custom-btn btn-1" style={{ width: "180px" }}>
                  Jobs
                </button>
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link
                // onClick={() => setOnAccount(true)}
                style={{
                  "overflow-x": "hidden",
                  // visibility: `${listItemDisplay}`,
                  "font-size": "xx-large",
                  position: "relative",
                  padding: "30px",
                  paddingBottom: "15px",
                  bottom: "10px",
                  textDecoration: "none",
                  // color: `${onAccount ? styleColors.maroon : "black"}`,
                  zIndex: "99",
                  pointerEvents: "all",
                }}
                to="/agent-console"
              >
                <button className="custom-btn btn-1" style={{ width: "180px" }}>
                  Console
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div
            style={{
              pointerEvents: "none",
              justifyContent: "space-between",
              flexDirection: "column",
              textDecoration: "none",
              margin: "0 auto",
              top: "10vh",
              position: "relative",
              // left: "20vw",
            }}
            // onMouseOver={() => setShowMenuShop(true)}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link
                onClick={() => setOnHomeScreen(true)}
                style={{
                  "overflow-x": "hidden",
                  // visibility: `${listItemDisplay}`,
                  "font-size": "xx-large",
                  position: "relative",
                  padding: "30px",
                  paddingBottom: "15px",
                  textDecoration: "none",
                  // color: `${onAccount ? styleColors.maroon : "black"}`,
                  zIndex: "99",
                  pointerEvents: "all",
                }}
                to={`/user-appointments/${uid}`}
              >
                <button className="custom-btn btn-1">Appointments</button>
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link
                onClick={() => setOnBrowse(true)}
                style={{
                  "overflow-x": "hidden",
                  // visibility: `${listItemDisplay}`,
                  "font-size": "xx-large",
                  position: "relative",

                  paddingBottom: "15px",
                  textDecoration: "none",
                  // color: `${onAccount ? styleColors.maroon : "black"}`,
                  zIndex: "99",
                  pointerEvents: "all",
                }}
                to="/browse"
                // className="show-for-large"
                id="shopId"
              >
                <button className="custom-btn btn-1" style={{ width: "180px" }}>
                  Browse
                </button>
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link
                onClick={() => setOnAccount(true)}
                style={{
                  "overflow-x": "hidden",
                  // visibility: `${listItemDisplay}`,
                  "font-size": "xx-large",
                  position: "relative",
                  padding: "30px",
                  paddingBottom: "15px",
                  textDecoration: "none",
                  // color: `${onAccount ? styleColors.maroon : "black"}`,
                  zIndex: "99",
                  pointerEvents: "all",
                }}
                to="/account"
              >
                <button className="custom-btn btn-1" style={{ width: "180px" }}>
                  Account
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
