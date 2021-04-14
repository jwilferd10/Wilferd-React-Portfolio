import React, { useEffect } from 'react';

function Navbar(props) {
    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
    } = props;

    return (
        <section>
            <header>
                <h1><a href="/">Jonathan Wilferd</a></h1>
                <nav>
                    <ul>
                        <li>
                            <a href='Portfolio'>Portfolio</a>
                        </li>
                        <li>
                            <a href='Resume'>Resume</a>
                        </li>
                        <li>
                            <a href='Contact'>Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <section class="hero-style">
                <h2> Creating Code One Line At A Time </h2>
            </section>
        </section>
    )
}

export default Navbar;
