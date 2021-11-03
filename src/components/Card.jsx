import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Card = (props) => {
  const { setAgentDoc } = useContext(Context);
  const [name, setName] = useState("");
  const [agent, setAgent] = useState({});
  const [address, setAddress] = useState({});
  const [data, setData] = useState({});

  const [photoId, setPhotoId] = useState(props.index);
  const [type, setType] = useState(props.typeCase);

  const storage = getStorage();

  useEffect(() => {
    console.log(props);
    switch (type) {
      case "agent":
        let i = props.index;
        let photoID = `agent-photo-${i}`;

        let agent = props.profile;
        let data = agent.data;
        setPhotoId(photoID);

        getDownloadURL(ref(storage, data.profilePhoto))
          .then((downloadURL) => {
            document.getElementById(photoID).setAttribute("src", downloadURL);
          })
          .catch((error) => {
            console.log(error);
          });

        setAddress(data.address);
        setAgent(agent);
        setData(agent.data);
        setName(`${data.address[0]} ${data.address[1]}`);

        break;
      case "client":
        break;
      default:
        break;
    }
  }, []);

  if (type == "agent") {
    return (
      <div id="slider" type="checkbox">
        <label for="slider"></label>

        <div class="wrapper">
          <div class="top-icons">
            <i class="fas fa-long-arrow-alt-left"></i>
            <i class="fas fa-ellipsis-v"></i>
            <i class="far fa-heart"></i>
          </div>

          <div class="profile">
            <img src="" id={photoId} class="thumbnail" />
            <div class="check">
              <i class="fas fa-check"></i>
            </div>
            <h3 class="name">{name}</h3>
            {data.currentRating ? (
              <p class="title">{`${data.currentRating} out of 5`}</p>
            ) : (
              <p class="title">No Reviews Yet</p>
            )}
            {data.bio && (
              <p class="description" maxLength="50">
                {data.bio}
              </p>
            )}
            <button type="button" class="btn">
              <Link
                style={{}}
                to={`/book-agent/${data.uid}`}
                onClick={() => {
                  setAgentDoc({});
                }}
              >
                Hire Me
              </Link>
            </button>
          </div>

          <div class="social-icons">
            <div class="icon">
              <a href="/">
                <i class="fab fa-dribbble"></i>
              </a>

              {data.payRate && <h4>{`$${data.payRate.fullDay}`}</h4>}
              <p>Full Day</p>
            </div>

            <div class="icon">
              <a href="#">
                <i class="fab fa-behance"></i>
              </a>
              {agent.duration && <h4>{agent.duration}</h4>}
              <p>Away</p>
            </div>

            <div class="icon">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>

              {agent.distance && <h4>{`${agent.distanceNum}`}</h4>}
              <p>Miles</p>
            </div>
          </div>
        </div>

        <div class="concept">
          <Link to={`/book-agent/${data.uid}`} target="_blank">
            <i class="fab fa-dribbble"></i>
          </Link>
        </div>
      </div>
    );
  } else if (type == "ticketAgent") {
    return (
      <div id="slider" type="checkbox">
        <label for="slider"></label>

        <div class="wrapper">
          <div class="top-icons">
            <i class="fas fa-long-arrow-alt-left"></i>
            <i class="fas fa-ellipsis-v"></i>
            <i class="far fa-heart"></i>
          </div>

          <div class="profile">
            <img src="" id={photoId} class="thumbnail" />
            <div class="check">
              <i class="fas fa-check"></i>
            </div>
            <h3 class="name">{name}</h3>
            {data.currentRating ? (
              <p class="title">{`${data.currentRating} out of 5`}</p>
            ) : (
              <p class="title">No Reviews Yet</p>
            )}
            {data.bio && (
              <p class="description" maxLength="50">
                {data.bio}
              </p>
            )}
            <button type="button" class="btn">
              <Link
                style={{}}
                to={`/book-agent/${data.uid}`}
                onClick={() => {
                  setAgentDoc({});
                }}
              >
                Hire Me
              </Link>
            </button>
          </div>

          <div class="social-icons">
            <div class="icon">
              <a href="/">
                <i class="fab fa-dribbble"></i>
              </a>

              {data.payRate && <h4>{`$${data.payRate.fullDay}`}</h4>}
              <p>Full Day</p>
            </div>

            <div class="icon">
              <a href="#">
                <i class="fab fa-behance"></i>
              </a>
              {agent.duration && <h4>{agent.duration}</h4>}
              <p>Away</p>
            </div>

            <div class="icon">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>

              {agent.distance && <h4>{`${agent.distanceNum}`}</h4>}
              <p>Miles</p>
            </div>
          </div>
        </div>

        <div class="concept">
          <Link to={`/book-agent/${data.uid}`} target="_blank">
            <i class="fab fa-dribbble"></i>
          </Link>
        </div>
      </div>
    );
  } else if (type == "ticketUser") {
    return (
      <div id="slider" type="checkbox">
        <label for="slider"></label>

        <div class="wrapper">
          <div class="top-icons">
            <i class="fas fa-long-arrow-alt-left"></i>
            <i class="fas fa-ellipsis-v"></i>
            <i class="far fa-heart"></i>
          </div>

          <div class="profile">
            <img src="" id={photoId} class="thumbnail" />
            <div class="check">
              <i class="fas fa-check"></i>
            </div>
            <h3 class="name">{name}</h3>
            {data.currentRating ? (
              <p class="title">{`${data.currentRating} out of 5`}</p>
            ) : (
              <p class="title">No Reviews Yet</p>
            )}
            {data.bio && (
              <p class="description" maxLength="50">
                {data.bio}
              </p>
            )}
            <button type="button" class="btn">
              <Link
                style={{}}
                to={`/book-agent/${data.uid}`}
                onClick={() => {
                  setAgentDoc({});
                }}
              >
                Hire Me
              </Link>
            </button>
          </div>

          <div class="social-icons">
            <div class="icon">
              <a href="/">
                <i class="fab fa-dribbble"></i>
              </a>

              {data.payRate && <h4>{`$${data.payRate.fullDay}`}</h4>}
              <p>Full Day</p>
            </div>

            <div class="icon">
              <a href="#">
                <i class="fab fa-behance"></i>
              </a>
              {agent.duration && <h4>{agent.duration}</h4>}
              <p>Away</p>
            </div>

            <div class="icon">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>

              {agent.distance && <h4>{`${agent.distanceNum}`}</h4>}
              <p>Miles</p>
            </div>
          </div>
        </div>

        <div class="concept">
          <Link to={`/book-agent/${data.uid}`} target="_blank">
            <i class="fab fa-dribbble"></i>
          </Link>
        </div>
      </div>
    );
  }
};

export default Card;
