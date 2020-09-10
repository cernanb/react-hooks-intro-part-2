import React from 'react';
// import withHover from './withHover';
import useHover from './useHover';
import './styles.css';

const NavLink = ({ link }) => {
  const [hovering, actions] = useHover();
  return (
    <a
      href="/"
      {...actions}
      style={{
        margin: '10px',
        textDecoration: 'none',
        color: hovering ? 'lightblue' : '',
      }}
    >
      {link}
    </a>
  );
};
export default NavLink;
