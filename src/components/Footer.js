import React from 'react';
// import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer data-component="Footer" id="footer" className="footer section container-fluid">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/jwilferd10" className="text-bold nav-link">Github</a>
                    
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jonathan-wilferd-3a6b461b6/" className="text-bold nav-link">LinkedIn</a>
                    
            <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/14244734/jonathan-wilferd" className="text-bold nav-link">StackOverflow</a>
        </footer>   
    )
}

export function FooterPushDown() {
    return (
        <div className = 'footer-pushdown'></div>
    )
}