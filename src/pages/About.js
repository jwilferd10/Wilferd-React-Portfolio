import React from 'react';
import fishing from '../assets/hobbies-1.jpg';
import Nevada from '../assets/hobbies-2.jpg';
import Casual from '../assets/hobbies-3.jpg';

import { Container } from 'react-bootstrap';
const About = () => {
    return (
        <React.Fragment>
            <Container>
                <section class="about-section">
                    <h1 class="section-title about">About Me:</h1>
                    <p class="about-text">
                        Welcome to my portfolio, I'm a former student at UCLA Extensions Coding Bootcamp - I recently graduated from it as of 4/08/21!
                        When I entered the Bootcamp I did so with minimal understanding for coding, but I've come out of it with a much better comprehension to software development as a whole.
                        I took the journey one step and one line of code at a time, while the cohort has come to an end I'm planning on revisiting many subjects to reinforce concepts learned.
                        Within this portfolio I'll be including many of the challenges and a couple projects I've worked on. Please enjoy! 
                    </p>
                    <p class="about-text">
                        Coding is quickly becoming something of a passion for me, by no means is it easy but 
                        with enough time and especially enough effort I can make progress. That's been proven to me time and time again while in my bootcamp. I want to help develop projects in
                        this ever evolving community. Besides that I'm also an avid gamer with a love for travel and an interest to try and learn new things!
                    </p>
                </section>
                <section>
                    <h2 class="section-title">Check Me Out:</h2>
                    
                    <div class="images">
                        <img className="photo" src={fishing} alt="Polaroid pictures of me fishing with family" />
                    
                        <img className="photo" src={Nevada} id="second-image" alt="Me sitting in a desert, picture of Whiskey Petes Casino in the background" />
                
                        <img className="photo" src={Casual} id="third-image" alt="Image of me attempting to be cool" />
                    </div>
                </section>
            </Container>
        </React.Fragment>
    )
}

export default About;