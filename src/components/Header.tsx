import styles from './header.module.css';
import logo from '../assets/logo.png';
import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Project from '../Project';

// import { NavLink } from 'react-bootstrap';
const Header = () => {
    return (
        <>
            <Navbar className={styles.header}>
                <Container>
                    <Navbar.Brand>
                        <img className={styles.logo} src={logo} alt="" />
                    </Navbar.Brand>
                    <Nav>
                        <NavLink to="/" className={styles.navbarLink}>Home</NavLink>
                        <NavLink to="/projects" className={styles.navbarLink}>Projects</NavLink>
                        <NavLink to="/" className={styles.navbarLink}>Experience</NavLink>
                        <NavLink to="/social" className={styles.navbarLink}>Social</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;