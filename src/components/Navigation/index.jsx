import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';
const setLinkTo = (link, linkTo) => (linkTo ? linkTo + link : link)

const makeMenu = (links, linkTo) => (
  <ul>
      {links.map(link => (
        <li key={link.to}>{
          link.to.indexOf('https://') !== -1
          ? <a href={link.to}>{link.label}</a>
          : <NavLink exact={link.exact} to={ setLinkTo(link.to, linkTo) }>{link.label}</NavLink>
        }
        { link.submenu  && <section>{makeMenu(link.submenu, link.to)}</section> }
        </li>
      ))}
    </ul>
);
const Navigation = ({ links }) => (
  <div className="Navigation">{ makeMenu(links) }</div>
);

export default Navigation;
