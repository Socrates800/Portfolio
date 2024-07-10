import React from "react";
import "./Home.css";
import malepic from "../Home/waleed-2.jpg";
import GraphemeSplitter from "grapheme-splitter";

import { TypeAnimation } from "react-type-animation";
const Home = () => {
  const splitter = new GraphemeSplitter();

  return (
    <div className="home-main">
      <div className="home-left">
        <div>

        <hr className="hr-1" />
        </div>
        <div className="animation" style={{display:'inline-block'}}>
          <TypeAnimation
            splitter={(str) => splitter.splitGraphemes(str)}
            sequence={[
              "Hello 🇬🇧",
              4000,
              "Ciao 🇮🇹",
              4000,
              "你好 🇨🇳",
              4000,
              "Здравейте 🇧🇬 ",
              4000,
              "Hola 🇪🇸",
              4000,
              "Bonjour 🇫🇷",
              4000,
              "नमस्ते 🇮🇳",
              4000,
            ]}
           
            repeat={Infinity}
            wrapper="h3"
          />
          
        </div>
        
      

        <h1>I'm Waleed Bin Haider</h1>
      
        <h3>Front End Developer</h3>
        <p>
          Enthusiastic and motivated Front End Developer with a strong
          foundation in HTML, CSS, and JavaScript. Skilled in creating
          responsive and visually appealing websites, with experience in modern
          frameworks like React through personal projects and coursework. Eager
          to collaborate with design teams to deliver seamless UX/UI and
          committed to continuous learning to stay updated with the latest
          industry trends and technologies.
        </p>
        <a href="/Waleed_bin_haider_Resume.pdf" download>
        <button>Download CV</button>
      </a>
      </div>
      <div className="home-right">

        <img src={malepic} alt="" />
      </div>
      
    </div>
  );
};

export default Home;
