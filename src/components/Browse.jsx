import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import Amplify, {
//   Analytics,
//   Storage,
//   API,
//   graphqlOperation,
//   S3Album,
// } from "aws-amplify";
import { Loader } from "@googlemaps/js-api-loader";
import { Context } from "../Context";
import Card from "./Card";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Lottie from "react-lottie-player";
import loadingData from "../8682-loading.json";

const Browse = () => {
  const {
    homeAddress,
    handleSearchDomestics,
    searchList,
    setShowModalCenter,
    agentDoc,
    setAgentDoc,
    styleColors,
    setShowLottieLoading,
    setIsSearchModal,
    infoLoaded,
    isPortrait,
    isSmallScreen,
    isLargeScreen,
  } = useContext(Context);

  const storage = getStorage();

  const [housekeepingChecked, setHousekeepingChecked] = useState(true);
  //
  const [gardeningChecked, setGardeningChecked] = useState(false);
  //
  const [laundryChecked, setLaundryChecked] = useState(false);
  //
  const [cookingChecked, setCookingChecked] = useState(false);

  const [skillString, setSkillString] = useState("");

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0); // set to strings initially in hopes of showing placeholder

  const [selected, setSelected] = useState("");

  const [distLimit, setDistLimit] = useState(0);

  const [agentList, setAgentList] = useState([]);

  useEffect(() => {
    if (searchList && searchList.length > 0) {
      let newList = searchList;
      setAgentList(newList);
    } else {
      setAgentList([]);
    }
  }, [searchList]);

  useEffect(() => {
    console.log("agent list: ", agentList);
  }, [agentList]);

  const apiKey = "AIzaSyC7kQoX5Lo4Qxe0KS4ZK_ZqYMJKtz0IrVg";
  const loader = new Loader({
    apiKey,
    version: "weekly",
    // ...additionalOptions,
  });

  const handleSearch = () => {
    setIsSearchModal(true);

    let a = homeAddress;
    let origin = [a[2], a[4], a[5], a[6], a[7]]; // the relevant values of the home address object
    let skills = {
      cooking: cookingChecked,
      gardening: gardeningChecked,
      laundry: laundryChecked,
      housekeeping: housekeepingChecked,
      other: skillString,
    };

    let defaultMax = 9999;
    let defaultDist = 500;
    // notice that
    let payRange = {
      min: minPrice,
      max: Number(`${maxPrice === 0 ? defaultMax : maxPrice}`),
    };

    handleSearchDomestics(
      origin,
      skills,
      payRange,
      Math.max(defaultDist, distLimit)
    );
    setShowResults(true);
  };

  const [sortPrice, setSortPrice] = useState(false);
  const [sortDistance, setSortDistance] = useState(false);
  const [sortLowToHigh, setSortLowToHigh] = useState(true);

  const filterAgents = () => {
    if (sortPrice) {
      if (sortLowToHigh) {
        let newArr = [...agentList];
        newArr = newArr.sort((a, b) => {
          let aPrice = a.payRate.fullDay;
          let bPrice = b.payRate.fullDay;
          return aPrice - bPrice;
        });
        setAgentList(newArr);
      } else {
        let newArr = [...agentList];
        newArr = newArr.sort((a, b) => {
          let aPrice = a.payRate.fullDay;
          let bPrice = b.payRate.fullDay;
          return bPrice - aPrice;
        });
        setAgentList(newArr);
      }
    } else if (sortDistance) {
      if (sortLowToHigh) {
        let newArr = [...agentList];
        newArr = newArr.sort((a, b) => {
          let aDist = a.distanceNum;
          let bDist = b.distanceNum;
          return aDist - bDist;
        });
        setAgentList(newArr);
      } else {
        let newArr = [...agentList];
        newArr = newArr.sort((a, b) => {
          let aDist = a.distanceNum;
          let bDist = b.distanceNum;
          return bDist - aDist;
        });
        setAgentList(newArr);
      }
    } else {
      setAgentList(searchList);
    }
    console.log("agent list sorted!");
  };

  const handleShowAgents = () => {
    // setAgentList([]);
    setShowResults(!showResults);
  };

  const sortType = (type) => {
    switch (type) {
      case "price":
        setSortPrice(true);
        setSortDistance(false);
        break;
      case "distance":
        setSortPrice(false);
        setSortDistance(true);
        break;
      default:
        break;
    }

    filterAgents();
  };

  const sortOrder = (order) => {
    switch (order) {
      case "lowToHigh":
        setSortLowToHigh(true);
        break;
      case "highToLow":
        setSortLowToHigh(false);
        break;
      default:
        break;
    }

    filterAgents();
  };

  const [showResults, setShowResults] = useState(true);

  if (!infoLoaded) {
    return (
      <div
        style={{
          position: "relative",
          margin: "0 auto",
          marginTop: "20px",
          display: "flex",
          justifyContent: "column",
        }}
      >
        <Lottie
          className="lottie"
          loop
          animationData={loadingData}
          play
          style={{ width: 150, height: 150 }}
        />
      </div>
    );
  } else if (agentList && agentList.length >= 0) {
    return (
      <div className="Browse box-invert" style={{ paddingBottom: "100px" }}>
        <div
          style={{
            flexDirection: "column",
            top: "100px",
            position: "relative",
          }}
        >
          <p>I am looking for: </p>
          <div
            style={{
              flexDirection: `${
                isPortrait || isSmallScreen ? "column" : "row"
              }`,
              justifyContent: "space-evenly",
              display: "flex",
            }}
          >
            <div
              id="skill-list"
              style={{
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <div
                className="skill"
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <input
                  id="housekeeping-input"
                  type="checkbox"
                  checked={housekeepingChecked}
                  onChange={() => {
                    setHousekeepingChecked(!housekeepingChecked);
                  }}
                />
                <label for="housekeeping-input">Housekeeping</label>
              </div>
              <div
                className="skill"
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <input
                  id="laundry-input"
                  type="checkbox"
                  checked={laundryChecked}
                  onChange={() => {
                    setLaundryChecked(!laundryChecked);
                  }}
                />
                <label for="laundry-input">Laundry</label>
              </div>
              <div className="skill" style={{ flexDirection: "row" }}>
                <input
                  type="checkbox"
                  checked={gardeningChecked}
                  onChange={() => {
                    setGardeningChecked(!gardeningChecked);
                  }}
                  id="gardening-input"
                />
                <label for="gardening-input">Gardening</label>
              </div>
              <div className="skill" style={{ flexDirection: "row" }}>
                <input
                  type="checkbox"
                  checked={cookingChecked}
                  onChange={() => {
                    setCookingChecked(!cookingChecked);
                  }}
                  id="cooking-input"
                />
                <label for="cooking-input">Cooking</label>
              </div>
              <input
                type="text"
                placeholder="Something else"
                value={skillString}
                onChange={(e) => {
                  setSkillString(e.target.value);
                }}
              />
            </div>
            <div>
              <div className="skill" style={{ flexDirection: "row" }}>
                <p>Price Range:</p>
              </div>
              <div
                className="skill"
                style={{
                  flexDirection: "row",
                  display: "flex",
                  position: "relative",
                  margin: "0 auto",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <div style={{ flexDirection: "column" }}>
                  <p>Min:</p>
                  <input
                    min="0"
                    max="1000"
                    type="number"
                    placeholder="min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                </div>

                <div style={{ flexDirection: "column" }}>
                  <p>Max:</p>
                  <input
                    min="0"
                    max="1000"
                    type="number"
                    placeholder="max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="skill" style={{ flexDirection: "column" }}>
                <p>Distance from you:</p>
                <input
                  min="0"
                  max="1000"
                  type="number"
                  placeholder="miles"
                  value={distLimit}
                  onChange={(e) => setDistLimit(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div
            style={{
              top: `${isPortrait ? "170px" : "70px"}`,
              position: "relative",
              zIndex: "95",
            }}
          >
            <button
              className="custom-btn btn-5"
              style={{
                color: "pink",
                padding: "20px",
                fontSize: "x-large",
                height: "100px",
              }}
              type="button"
              onClick={() => {
                handleSearch();
              }}
            >
              Search Domestics
            </button>
          </div>
        </div>
        <div>
          {agentList && agentList.length > 0 && (
            <div
              className="Browse"
              style={{
                flexDirection: "row",
                display: "flex",
                pointerEvents: "all",
              }}
            >
              <div style={{ zIndex: "96" }}>
                <p>Sort:</p>
                <select
                  onClick={(e) => {
                    sortType(e.target.value);
                  }}
                >
                  <option
                    value="price"
                    selected={sortPrice}
                    style={{ zIndex: "96" }}
                  >
                    Price
                  </option>
                  <option
                    value="distance"
                    selected={sortDistance}
                    style={{ zIndex: "96" }}
                  >
                    Distance
                  </option>
                </select>
                <select
                  onClick={(e) => {
                    sortOrder(e.target.value);
                  }}
                >
                  <option value="lowToHigh" selected={sortLowToHigh}>
                    Low to High
                  </option>
                  <option value="highToLow" selected={!sortLowToHigh}>
                    High to Low
                  </option>
                </select>
                <button
                  type="button"
                  onClick={() => handleShowAgents()}
                  style={{ pointerEvents: "all", zIndex: "96" }}
                >
                  {showResults ? "Clear Results" : "Show Results"}
                </button>
              </div>
            </div>
          )}
        </div>
        <div
          style={{
            flexDirection: "column",
            overflowY: "scroll",
            maxHeight: "80vh",
            width: "80vw",
            margin: "0 auto",
            position: "relative",
            display: "flex",
          }}
        >
          {agentList && agentList.length >= 0 && showResults ? (
            agentList.map((agent, i) => (
              <Card profile={agent} index={i} typeCase={"agent"} />
            ))
          ) : (
            <div
              style={{
                flexDirection: "column",
                overflowY: "scroll",
                maxHeight: "80vh",
                width: "80vw",
                margin: "0 auto",
              }}
            >
              <p>No Agents to Display!</p>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return <div>{/* <p>loading...</p> */}</div>;
  }
};

export default Browse;
