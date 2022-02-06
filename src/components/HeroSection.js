import React from "react";
import '../App.css';
import { Button } from "./Button";
import './HeroSection.css';
const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4"  autoPlay  loop muted ></video>
      <h1>ADVERTURE AWAIT</h1>
      <p>What are is waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRALIER  <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
