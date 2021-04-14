import React from 'react';
import NoFT from '../assets/NoFT.png';
import ZapDrive from '../assets/zapdrive.jpg';
import budgetTracker from '../assets/budget.png';
import shopshop from '../assets/shop.png'
import Figure from 'react-bootstrap/Figure'

const Portfolio = () => {
    return (

        <div>
            <section>
                <h1 class="section-title portfolio">Portfolio:</h1>
                <p></p>
            </section>

            <section style={{textAlign:"center"}}>
                <h3 class="section-title portfolio">NoFT</h3>
                <Figure>
                    <a href="http://reprint-media.herokuapp.com/">
                        <Figure.Image
                            width={1000}
                            height={500}
                            alt="NoFT"
                            src={NoFT}
                        />
                    </a>
                    <Figure.Caption>
                        <p>Github: <a href="https://github.com/Siphon880gh/reprint">NoFT</a></p>
                        <p>NoFT is an environment where users can share, favorite, download, and discuss all of their favorite NFT works without actually interacting with any real non-fungible tokens. No changes to the chain-of-title, no interaction with cryptocurrency wallets, no financial transactions of any kind.</p>
                    </Figure.Caption>
                </Figure>

                <h3 class="section-title zapdrive">Zap&Drive</h3>
                <Figure>
                    <a href="https://arlontuazon.github.io/ZapDrive/"> 
                        <Figure.Image
                            width={1000}
                            height={500}
                            alt="Zap and Drive"
                            src={ZapDrive}
                        />
                    </a>
                    <Figure.Caption>
                        <p>Github: <a href="https://github.com/ArlonTuazon/ZapDrive">Zap&Drive</a> </p>
                        <p>Zap&Drive </p>
                    </Figure.Caption>
                </Figure>

                <h3 class="section-title budget">Budget Tracker</h3>
                <Figure>
                    <a href="https://stormy-ridge-74437.herokuapp.com/">
                        <Figure.Image
                            width={1000}
                            height={500}
                            alt="budget tracker functionality"
                            src={budgetTracker}
                        />
                    </a>
                    <Figure.Caption>
                        <p>Github: <a href="https://github.com/jwilferd10/Budget-Tracker-Galore">Budget Tracker Galore</a> </p>
                        <p class="desc-team-member">Giving users a fast and easy way to track their money is important, but allowing them to access that information at any time is even more important. Having offline functionality is paramount to the success of an application that handles users’ financial information. Like most challenges I've worked on in the past, this introduction into PWA's was best described as grueling despite some understanding how the concepts work. However putting it into practice somehow proved to be harder then I expected, but thankfully after investing the time to overcome the issues that did pop up I do certainly feel like I've learned a whole lot in this particular experience.</p>
                    </Figure.Caption>
                </Figure>

                <h3 class="section-title shopshop">Shop Shop Redux</h3>
                <Figure>
                    <a href="https://hidden-temple-77331.herokuapp.com/">
                        <Figure.Image
                            width={1000}
                            height={500}
                            alt="shop shop's homepage"
                            src={shopshop}
                        />
                    </a>
                    <Figure.Caption>
                        <p>Github: <a href="https://github.com/jwilferd10/Shop-Shop-Redux">Shop-Shop-Redux</a> </p>
                        <p class="desc-team-member">Passionate about all things coding especially web development, Weng has made this a hobby and side job for countless years.</p>
                    </Figure.Caption>
                </Figure>
            </section>
        </div>
    )
}

export default Portfolio;