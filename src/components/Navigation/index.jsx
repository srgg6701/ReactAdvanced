import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = ({ links }) => (
  <div className="Navigation">
    <ul>
      {links.map(link => (
        <li key={link.to}>{
          link.to.indexOf('https://') !== -1
            ? <a href={link.to}>{link.label}</a>
            : <NavLink exact={link.exact} to={link.to}>{link.label}</NavLink>
        }
        </li>
      ))}
    </ul>
  </div>
);

export default Navigation;
