import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink
          to="/"
          exact
          style={{
            padding: "5px"
          }}
        >Home</NavLink>
        <NavLink
          to="/movies"
          exact
          style={{
            padding: "5px"
          }}
        >Movies</NavLink>
        <NavLink
          to="/directors"
          exact
          style={{
            padding: "5px"
          }}
        >Directors</NavLink>
        <NavLink
          to="/actors"
          exact
          style={{
            padding: "5px"
          }}
        >Actors</NavLink>
    </div>
  );
};

export default NavBar;
