import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="image/about.jpg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
               
             I am an experienced MERN and PHP/WordPress Full Stack Developer adept at crafting robust web solutions. Proficient in creating dynamic, scalable applications using React, Node.js, MongoDB, and PHP-based technologies. Skilled in developing custom functionalities, responsive designs, and efficient database management. Passionate about delivering seamless user experiences and solving complex challenges in web development.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
