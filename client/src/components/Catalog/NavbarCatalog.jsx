import React from "react";
import {NavLink} from "react-router-dom";
import './NavbarCatalog.scss'

const NavbarCatalog = () => {
  return (
         
        <div className='navigation'>
                <ul>
                    <NavLink to="/"   className={({isActive}) => isActive ? 'active' : "navlink"}><li > Метки </li></NavLink>
                    <NavLink to="/cards"  className={({isActive}) => isActive ? 'active' : "navlink"}><li > Карты</li> </NavLink>
                    <NavLink to="/keys"  className={({isActive}) => isActive ? 'active' : "navlink"}> <li >Брелоки</li> </NavLink>
                    <NavLink to="/business"  className={({isActive}) => isActive ? 'active' : "navlink"}> <li >Бизнес</li> </NavLink>

                </ul>
        </div>
  );
}

export default NavbarCatalog;