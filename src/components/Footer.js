import React from 'react';
// import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <footer data-component="Footer" id="footer" className="footer section container-fluid">
            <Navbar>
                <Container fluid>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Siphon880gh/reprint/" className="text-bold nav-link">
                        Github
                    </a>
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Siphon880gh/reprint/" className="text-bold nav-link">
                        LinkedIn
                    </a>
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Siphon880gh/reprint/" className="text-bold nav-link">
                        StackOverflow
                    </a>
                </Container>
            </Navbar>
        </footer>   
    )
}

export function FooterPushDown() {
    return (
        <div className = 'footer-pushdown'></div>
    )
}