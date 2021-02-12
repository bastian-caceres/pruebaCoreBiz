import React from "react";
import logo from '../statics/logo.png';
import IconCarro from '../statics/shopping-cart.png';
import IconUser from '../statics/account.png'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg container">

      <a className="navbar-brand" href="/">
        <img src={logo} alt="logo empresa" />
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0 text-center">
          <input className="form-control" type="search" placeholder="....Que esta buscando?" aria-label="buscar" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"> Buscar </button>
        </form>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">            
            <a className="nav-link" href="/"> <img src={IconUser} alt="icono carro" /> bastian caceres </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
                <img src={IconCarro} alt="icono carro" />
            </a>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default NavBar;
