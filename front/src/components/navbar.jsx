import React from 'react'
import logoneki from '../assets/neki-logo-oficial-branco.png'
import NavbarItem from './navbaritem';

function Navbar(){
    return(
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse"
         data-target="#navbarResponsive"
         aria-controls="navbarResponsive" aria-expanded="false" 
         aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
          <img src={logoneki} style={{width:150}}/>
              <NavbarItem href="#/home" label="Home" />
              <NavbarItem href="#/cadastrousuario" label="Users" />
              <NavbarItem href="#/" label="skills" />
              <NavbarItem href="#/login" label="Login" />
          </ul>

        </div>
      </div>
    </div>

    )
}

export default Navbar;