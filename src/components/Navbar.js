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
                <a href='Portfolio'>Portfolio</a>
                <a href='Resume'>Resume</a>
                <a href='Contact'>Contact</a>
            </nav>
        </header>
    )
}

export default Navbar;
