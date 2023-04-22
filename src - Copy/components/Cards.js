import React from "react";
import { astrologers } from "../data/astrolgersdata";
import "../css/Cards.css";
import ruppe from "../images/ruppe.png";
import telephone from "../images/telephone.png";
import chat from "../images/chat.png";
import play from "../images/play.png";
import star from "../images/star.png";
function Cards() {
  return (
    <div className="astologers-cards">
      {astrologers.map((astrologer) => (
        <div
          className="card"
          style={{
            backgroundImage: `url(${astrologer.image})`,
          }}
        >
          <div className="card-top">
            <div className="experience">{astrologer.experience}</div>
            <div className="status">
              <div className="online-circle"></div>
              {astrologer.status}
            </div>
          </div>

          <div className="card-middle">
            <h3>
              <img src={star} alt="star" height="20px" width="20px" />
              {astrologer.rating}
            </h3>

            <br />
            <h2>{astrologer.name}</h2>
            <p className="first-para">Specialties</p>
            <h3>{astrologer.specialities}</h3>
            <p>Skills</p>
            <h3>{astrologer.skills}</h3>
          </div>

          <div className="price">
            <p>Price</p>
            <h3>
              <img className="ruppe-icon" src={ruppe} alt="ruppe" />
              {astrologer.price}
              <span className="per-min">/min</span>
            </h3>
          </div>

          <div className="chat-call">
            <div className="chat">
              <img src={telephone} alt="phone" /> Chat
            </div>

            <div className="call">
              <img src={chat} alt="chat" />
              Call
            </div>
          </div>
          <img
            className="play"
            src={play}
            alt="play"
            style={{
              marginTop: "200px",
            }}
          />
          <p
            className="play"
            style={{
              marginTop: "230px",
              fontSize: "18px",
            }}
          >
            Live
          </p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
