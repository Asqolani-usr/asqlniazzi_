import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>LokaMart</h2></a>
                <p>As part of the bootcamp program at Celerates, I worked on a capstone project to develop a marketplace website that supports and promotes local products. The platform was built to help small businesses expand their reach through a responsive and user-friendly digital experience.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Apps LinkAja</h2></a>
                <p>For my final project (UAS), I designed a user interface for an application using Figma. The project focused on creating a responsive, visually appealing, and user-friendly layout while also considering the overall user experience (UX).</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Outfit Kece</h2></a>
                <p>I developed an online fashion marketplace website as part of a learning project, using a Bootstrap-based template. The website was designed to showcase various fashion products in a responsive and visually appealing layout, ensuring a smooth user experience across different devices.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>News Website</h2></a>
                <p>"This project is a news website focused on tourism destinations in East Lombok. It was built using the WordPress platform with a modern and responsive template to ensure easy content management and an optimal user experience.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;