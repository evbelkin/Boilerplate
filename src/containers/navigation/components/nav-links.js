import React from 'react';
import { Link } from 'react-router-dom';

export const NavLinks = ({ links }) => (
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      { links.length ?
          links.map(item => {
            return (
              <li key={ item.id } className="nav-item">
                <Link to={ item.value } className="nav-link">{ item.title }</Link>
              </li>
            );
          })                    
        : '' }
    </ul>
  </div>
);