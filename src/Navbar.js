import React from 'react';
import NavLink from './NavLink';

const navLinks = ['Home', 'About', 'Contact Us'];

const Navbar = () => {
  return navLinks.map((link) => <NavLink link={link} />);
};

export default Navbar;
