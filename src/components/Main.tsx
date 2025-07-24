import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://raw.githubusercontent.com/Asqolani-usr/asset/refs/heads/main/images/profile.jpeg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Asqolani-usr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/m-asqolaniazizi" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Muhammad Asqolani Azizi</h1>
          <p>UI/UX Designer | Frontend Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Asqolani-usr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/m-asqolaniazizi" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;