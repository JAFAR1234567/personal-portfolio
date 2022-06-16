import React from "react";
import "./Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I Am Abu Jafar</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL,
              MySQL, MongoDB, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, php, C

            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
