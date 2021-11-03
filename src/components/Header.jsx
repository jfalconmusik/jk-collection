import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import firebase from "firebase";
import { Context } from "../Context.js";
// import Flexbox from "flexbox-react";

function Header() {
  const {
    accountTitleString,
    userInfo,
    itemList,
    isLargeScreen,
    isSmallScreen,
    isPortrait,
    sidebarOpen,
    setSidebarOpen,
    setShowMenuHome,
    isSafari,
    handleSidebar,
    setOnAccount,
    setOnBrowse,
    onHomeScreen,
    onAccount,
    onBrowse,
    setOnHomeScreen,
    styleColors,
    setShowMenuShop,
    uid,
    isPendingVerification,
    isAgent,
    isOnAgentSite,
    setIsOnAgentSite,
    requestRejected,
    setRequestRejected,
    setShowModalCenter,
    setShowRejected,
    agentDoc,
    isBigScreen,
  } = useContext(Context);

  return (
    <header
      id="header"
      className="column"
      style={{
        justifyContent: "space-around",
        margin: "0 auto",
        width: "100vw",

        backgroundColor: `${isOnAgentSite ? styleColors.altPink : "white"}`,
      }}
    >
      {/* first header row - includes search bar, logo, and social icons */}
      <div
        className="row"
        style={{
          // right: "6vw",
          position: "relative",
          margin: "0 auto",
          justifyContent: "space-evenly",
          maxWidth: "100vw",
          marginTop: "0",
          top: "5vh",
          pointerEvents: "none",
        }}
      >
        <div className="column" style={{ pointerEvents: "none" }}>
          {/* search bar for large screen */}
        </div>
        {/* logo */}
        <div
          className="column"
          style={{
            justifyContent: "space-around",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              zIndex: "99",
              position: "relative",
              margin: "0 auto",
              display: "flex",
              flexDirection: "row",
              bottom: "60px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Link
                style={{ pointerEvents: "none" }}
                className="headerItem"
                to="/"
                onMouseOver={() => setShowMenuHome(true)}
              >
                <img
                  style={{
                    // transform: "scale(3)",
                    pointerEvents: "all",
                    position: "relative",
                    overflow: "hidden",
                    height: "150px",
                    width: "400px",
                    objectFit: "cover",
                    top: `${isPortrait ? "160px" : "80px"}`,
                    margin: "0 auto",
                    zIndex: "98",
                  }}
                  className="logo"
                  src="https://i.ibb.co/xzRRZyf/untitled-1.png"
                  alt="j collection logo"
                ></img>
              </Link>
              <div
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  margin: "0 auto",
                  marginBottom: "150px",
                  display: "flex",
                  bottom: "10vw",
                  position: "relative",

                  // overflowY: "hidden",
                }}
              >
                {isOnAgentSite ? (
                  <span
                    style={{
                      // bottom: "250px",
                      pointerEvents: "none",
                      position: "absolute",
                      display: `${isPortrait ? "none" : "flex"}`,
                      justifyContent: "space-between",
                      flexDirection: "row",
                      textDecoration: "none",
                      margin: "0 auto",
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
                          color: `${
                            onHomeScreen ? styleColors.maroon : "black"
                          }`,
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
                        <button
                          className="custom-btn btn-1"
                          style={{ zIndex: "99", backgroundColor: "white" }}
                        >
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
                          textDecoration: "none",
                          // color: `${onAccount ? styleColors.maroon : "black"}`,
                          zIndex: "99",
                          pointerEvents: "all",
                        }}
                        to="/agent-console"
                      >
                        <button
                          className="custom-btn btn-1"
                          style={{ backgroundColor: "white" }}
                        >
                          Console
                        </button>
                      </Link>
                    </div>
                  </span>
                ) : (
                  <span
                    style={{
                      // bottom: "250px",
                      pointerEvents: "none",
                      position: "absolute",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      // maxWidth: `${isPortrait ? "100vw" : "50vw"}`,
                      textDecoration: "none",
                      display: `${isPortrait ? "none" : "flex"}`,
                      margin: "0 auto",
                    }}
                    // onMouseOver={() => setShowMenuShop(true)}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Link
                        onClick={() => setOnHomeScreen(true)}
                        style={{
                          color: `${
                            onHomeScreen ? styleColors.maroon : "black"
                          }`,
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
                        to={`/user-appointments/${uid}`}
                      >
                        <button className="custom-btn btn-1">
                          Appointments
                        </button>
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
                          padding: "30px",
                          paddingBottom: "15px",
                          textDecoration: "none",
                          color: `${onBrowse ? styleColors.maroon : "black"}`,
                          zIndex: "99",
                          pointerEvents: "all",
                        }}
                        to="/browse"
                        // className="show-for-large"
                        id="shopId"
                      >
                        <button className="custom-btn btn-1">Browse</button>
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
                          color: `${onAccount ? styleColors.maroon : "black"}`,
                          zIndex: "99",
                          pointerEvents: "all",
                        }}
                        to="/account"
                      >
                        <button className="custom-btn btn-1">Account</button>
                      </Link>
                    </div>
                  </span>
                )}
              </div>
              <div
                style={{
                  position: "absolute",
                  right: "0vw",
                  // left: "1vw",
                  // bottom: "5px"
                  // top: "75px",
                }}
              >
                <button
                  onClick={() => handleSidebar()}
                  style={{
                    border: "none",
                    zIndex: "99",
                    // right: "10vw",
                    margin: "0px",
                    top: "55px",
                    right: "10px",
                    height: "fit-content",
                    // left: "10px",
                    width: "fit-content",
                    fontSize: "xx-large",
                    // height: "10vw",
                    position: "relative",
                    color: `${isOnAgentSite ? "white" : "pink"}`,
                    backgroundColor: `${
                      isOnAgentSite ? styleColors.altPink : "white"
                    }`,
                    pointerEvents: "all",
                    // paddingRight: "-50px",
                    display: `${isPortrait ? "initial" : "none"}`,
                  }}
                  data-toggle="example-menu"
                  className="custom-btn btn-1"
                  type="button"
                >
                  ☰
                </button>
                {uid && !isAgent && !requestRejected && (
                  <div
                    style={{
                      position: "relative",
                      top: "72px",
                      display: `${isPortrait ? "none" : "initial"}`,
                    }}
                  >
                    <button
                      className="custom-btn btn-5"
                      type="button"
                      disabled={isPendingVerification}
                      style={{
                        whitespace: "no-wrap",
                        width: "fit-content",
                        marginRight: "-175px",
                        pointerEvents: "all",
                        textDecoration: "none",
                      }}
                    >
                      {isPendingVerification ? (
                        "In Review"
                      ) : (
                        <Link to="/agent-sign-up" style={{ color: "pink" }}>
                          Create Agent Account
                        </Link>
                      )}
                    </button>
                  </div>
                )}
                {uid && !isAgent && requestRejected && (
                  <div
                    style={{
                      position: "relative",
                      top: "72px",
                      display: `${isPortrait ? "none" : "initial"}`,
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
                        marginRight: "-30px",
                        pointerEvents: "all",
                        textDecoration: "none",
                        marginTop: `${
                          !isPortrait || isLargeScreen ? "" : "30px"
                        }`,
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
                      top: "72px",
                      display: `${isPortrait ? "none" : "initial"}`,
                    }}
                  >
                    <button
                      className="custom-btn btn-5"
                      type="button"
                      disabled={isPendingVerification}
                      onClick={() => setIsOnAgentSite(true)}
                      style={{
                        width: "fit-content",
                        // whitespace: "no-wrap",
                        marginRight: "-150px",
                        pointerEvents: "all",
                        textDecoration: "none",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        height: "fit-content",
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
                      top: "72px",
                      display: `${isPortrait ? "none" : "initial"}`,
                    }}
                  >
                    <button
                      className="custom-btn btn-5"
                      type="button"
                      disabled={isPendingVerification}
                      onClick={() => setIsOnAgentSite(false)}
                      style={{
                        width: "fit-content",
                        whitespace: "no-wrap",
                        marginRight: "-30px",
                        pointerEvents: "all",
                        textDecoration: "none",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        height: "fit-content",
                      }}
                    >
                      <Link to="/" style={{ color: "pink" }}>
                        View User Site
                      </Link>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* inner row for links */}
        </div>
        {/* social media icons */}

        <div
          className="column"
          style={{
            position: "relative",
            pointerEvents: "none",
            // "max-height": "3.5em",
            margin: "0 auto",
          }}
        ></div>
        {/* sidebar button if mobile */}
      </div>
    </header>
  );
}

export default Header;
