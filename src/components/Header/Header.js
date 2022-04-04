import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/" className='fw-bolder'>Review Zone</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link><Link to="/" className='nav-link'>Home</Link></Nav.Link>
                        <Nav.Link><Link to="/review" className='nav-link'>Reviews</Link></Nav.Link>
                        <Nav.Link><Link to="/dashboard" className='nav-link'>Dashboard</Link></Nav.Link>
                        <Nav.Link><Link to="/blogs" className='nav-link'>Blogs</Link></Nav.Link>
                        <Nav.Link><Link to="/about" className='nav-link'>About</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;