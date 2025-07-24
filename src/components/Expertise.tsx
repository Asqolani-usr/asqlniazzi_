import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp ,faFigma } from '@fortawesome/free-brands-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Figma",
    "Canva",
    
    
];

const labelsSecond = [
    "PHP",
    "HTML",
    "CSS",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "Claude AI",
    "Gemini",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faFigma} size="3x"/>
                    <h3>UI/UX Design</h3>
                    <p> Specialize in designing intuitive and visually appealing user interfaces using tools like Figma. I create wireframes, interactive prototypes, and high-fidelity mockups that focus on usability and user experience. My design process is driven by user-centered thinking and collaboration with developers to ensure smooth implementation across platforms.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPhp} size="3x"/>
                    <h3>Front end development</h3>
                    <p>I have a strong foundation in front-end development using PHP, HTML, and CSS. I specialize in building responsive and user-friendly web applications with a focus on user experience and accessibility.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>AI</h3>
                    <p>Stay relevant in today’s tech landscape by applying the latest AI models to your learning journey. I’ve been diving into GenAI tools like OpenAI and Hugging Face, building small-scale projects to sharpen my understanding of LLMs and enhance my future readiness in the AI field..</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;