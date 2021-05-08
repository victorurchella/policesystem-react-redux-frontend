import React from 'react';
import { Menu, AsideMenu } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import altAuth, { selectors } from '../../../store/ducks/toAuth'
import { Link } from 'react-router-dom';

const sMenu = () => {

  const authState = useSelector(state => selectors.selectAuthState(state))

  return(
    <div>
      <Menu>

        <span className="header-apresentation">Consulta ao Código Penal</span>
        <span className="header-user">Oficial. {authState.activeLogin.nome}</span>

      </Menu>

      <AsideMenu>

        <div id="menuToggle">

          <input type="checkbox" />

          <span />
          <span />
          <span />

          <ul id="menu">
            <li><a href="/home">Listagem</a></li>
            <li><a href="/adicionar">Adicionar</a></li>
          </ul>
        </div>

      </AsideMenu>

    </div>
  )
};

export default sMenu;
