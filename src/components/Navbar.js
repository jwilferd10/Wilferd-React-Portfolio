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
        <header>
            <h2>
                <a href='/'>
                    <span>Jonathan Wilferd </span>
                </a>
            </h2>
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
    )
}

export default Navbar;
