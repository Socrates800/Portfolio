import React from "react";
import "./Body.css";
import mypic from "./malemodel.jpg";

const Body = () => {
  return (
    <div className="body-main">
      <div className="image">
        <img src={mypic} alt="" />
      </div>
      <div className="content">
        <hr />
        <h1>About Me </h1>
        <div className="span-1">
          <div className="Names">
            <span>Name</span>
            <span>Email</span>
            <span>Location</span>
            <span>Github</span>
          </div>
          <div className="colons">
            <span>:</span>
            <span>:</span>
            <span>:</span>
            <span>:</span>
          </div>
          <div className="names">
            <span>Waleed Bin Haider</span>
            <span>haiderwaleed81@gmail.com</span>
            <span>Jhelum,Pakistan</span>
            <span>haiderwaleed81@gihub.com</span>
          </div>
        </div>
        <h3>I'm Waleed Bin Haider, Front End Developer</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          quibusdam maiores ducimus eligendi quisquam, nihil debitis a at
          nesciunt fuga voluptatem culpa quos. Impedit ipsum obcaecati molestias
          veniam exercitationem quos! A natus ipsa aperiam quod ab illo itaque
          voluptatibus, dolore aliquam, error iusto sint incidunt iste est
          aspernatur saepe? Molestiae odio a earum magnam voluptatem
          perspiciatis? Nemo facilis molestias sunt?
        </p>
        <h3>Find me on Social Media</h3>
        <div className="icons">
          <span class="material-symbols-outlined">groups</span>
          <span class="material-symbols-outlined">public</span>
          <span class="material-symbols-outlined">support_agent</span>
          
        </div>
      </div>
    </div>
  );
};

export default Body;
