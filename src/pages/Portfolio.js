import React from 'react';
import NoFT from '../assets/NoFT.png';
import ZapDrive from '../assets/zapdrive.jpg';
import budgetTracker from '../assets/budget.png';
import shopshop from '../assets/shop.png'
import Figure from 'react-bootstrap/Figure'

const Portfolio = () => {
    return (
        <div>
            <section style={{textAlign:"center"}}>

                {/* NOFT */}

                <h3 class="section-title portfolio">NoFT</h3>
                <Figure>
                    <a class="projectImage" href="http://reprint-media.herokuapp.com/">
                        <Figure.Image
                            class="project"
                            width={1000}
                            height={500}
                            alt="NoFT"
                            src={NoFT}
                        />
                    </a>
                    <Figure.Caption>
                        <h3>Github: <a href="https://github.com/Siphon880gh/reprint">NoFT</a></h3>
                        <p class="portfolioText">NoFT is an environment where users can share, favorite, download, and discuss all of their favorite NFT works without actually interacting with any real non-fungible tokens. No changes to the chain-of-title, no interaction with cryptocurrency wallets, no financial transactions of any kind.</p>
                    </Figure.Caption>
                </Figure>

                {/* ZAP&DRIVE */}

                <h3 class="section-title zapdrive">Zap&Drive</h3>
                <Figure>
                    <a class="projectImage" href="https://arlontuazon.github.io/ZapDrive/"> 
                        <Figure.Image
                            class="project"
                            width={1000}
                            height={500}
                            alt="Zap and Drive"
                            src={ZapDrive}
                        />
                    </a>
                    <Figure.Caption>
                        <h3>Github Repository: <a href="https://github.com/ArlonTuazon/ZapDrive">Zap&Drive</a> </h3>
                        <p class="portfolioText">Zap&Drive is a project that allows users to find EV charging stations within America by entering a city (or postal code) and state. A lightning bolt appears over every charging station located, clicking on the bolt opens up details such as the areas address.</p>
                    </Figure.Caption>
                </Figure>

                {/* BUDGET TRACKER */}

                <h3 class="section-title budget">Budget Tracker</h3>
                <Figure>
                    <a class="projectImage" href="https://stormy-ridge-74437.herokuapp.com/">
                        <Figure.Image
                            class="project"
                            width={1000}
                            height={500}
                            alt="budget tracker functionality"
                            src={budgetTracker}
                        />
                    </a>
                    <Figure.Caption>
                        <h3>Github Repository: <a href="https://github.com/jwilferd10/Budget-Tracker-Galore">Budget Tracker Galore</a> </h3>
                        <p class="portfolioText">Giving users a fast and easy way to track their money is important, but allowing them to access that information at any time is even more important. Having offline functionality is paramount to the success of an application that handles users’ financial information.</p>
                    </Figure.Caption>
                </Figure>

                {/* SHOP-SHOP */}

                <h3 class="section-title shopshop">Shop Shop Redux</h3>
                <Figure>
                    <a class="projectImage" href="https://hidden-temple-77331.herokuapp.com/">
                        <Figure.Image
                            class="project"
                            width={1000}
                            height={500}
                            alt="shop shop's homepage"
                            src={shopshop}
                        />
                    </a>
                    <Figure.Caption>
                        <h3>Github Repository: <a href="https://github.com/jwilferd10/Shop-Shop-Redux">Shop-Shop-Redux</a> </h3>
                        <p class="portfolioText">Shop-Shop-Redux was an ecommerce website that was created using React and GraphQL, further work was then added to this project by refactoring sections of the JSX to use React Redux for better performance.</p>
                    </Figure.Caption>
                </Figure>
            </section>
        </div>
    )
}

export default Portfolio;