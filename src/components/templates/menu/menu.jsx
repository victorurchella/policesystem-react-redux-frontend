import React from 'react';
import { Menu, AsideMenu } from './styles';
import { Link } from 'react-router-dom';
import logoutIco from '../../../res/images/account-logout-3x.png'

const sMenu = () => {

  return(
    <div>
      <Menu>

        <a href='/home'><span className="header-apresentation">Consulta ao Código Penal</span></a>

        <span className="header-user">Oficial. {sessionStorage.getItem('@policesystem/nome')}</span>
        <Link to='/login'>
          <button
          type='button'
          id='logoutBtn'
          onClick={() => {sessionStorage.removeItem('@policesystem/authed')}}
          >

          <img src={logoutIco} alt="OPA NAO CARREGOU NÉ" />

          </button>
        </Link>

      </Menu>

      <AsideMenu>

        <div id="menuToggle">

          <input type="checkbox" />

          <span />
          <span />
          <span />

          <ul id="menu">
            <li><a href="/home">Códigos</a></li>
            <li><a href="/adicionar">Adicionar</a></li>
          </ul>
        </div>

      </AsideMenu>

    </div>
  )
};

export default sMenu;
