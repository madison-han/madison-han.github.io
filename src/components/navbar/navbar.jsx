import React from 'react';
import { Nav, NavLink, NavMenu } from './navbarElements';


const Navbar = () => {
    // const scrollToSection = (id) => {
    //     const element = document.getElementById(id);
    //     if (element)
    //         ref.current.scrollIntoView({ behavior: 'smooth' });
    // };

    return (
        // <>
            <Nav>
                <NavMenu>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/projects">
                        Projects
                    </NavLink>
                    <NavLink to="/contact">
                        Contact Me
                    </NavLink>
                    <NavLink to="/experience">
                        Experience
                    </NavLink>
                </NavMenu>
            </Nav>
        // </>
    );
};

export default Navbar;
