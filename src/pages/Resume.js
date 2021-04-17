import React from 'react';
import resume from '../assets/Resume.pdf';

const Resume = () => {
    return (
        
        <React.Fragment>
            <div class="about-text">
                <h1 class="section-title resume">Resume</h1>
                <h2><a href={resume} download="jwilferdResume.pdf"> Download Resume </a></h2>
                <h2>Education:</h2>
                <h3>California Virtual Academy @ Los Angeles</h3>  
                <p>Class of 2016</p>
                <h3>UCLA Extension Coding Bootcamp </h3>
                <p>As of April, 2021</p>
            </div>

            <h1 class="section-title skills">Skillset</h1>

            <h3 class="about-text">
                Within my twenty-four weeks in a Coding Bootcamp, I've picked up these following skills throughout the class:
            </h3>
            <div class="about-text">
                <li>
                    HTML5
                </li>
                
                <li>
                    CSS
                </li>
                
                <li>
                    Git
                </li>
                
                <li>
                    JavaScript
                </li>
                
                <li>
                    Node.JS
                </li>
               
                <li>
                    Express.JS
                </li>
                
                <li>
                    Object-Orientated Programming
                </li>
                
                <li>
                    Object Relational Mapping
                </li>
                
                <li>
                    SQL
                </li>
               
                <li>
                    NoSQL
                </li>
                
                <li>
                    Handlebars
                </li>
                
                <li>
                    GraphQL
                </li>
                
                <li>
                    React
                </li>
            </div>
        </React.Fragment>

    )
}

export default Resume;