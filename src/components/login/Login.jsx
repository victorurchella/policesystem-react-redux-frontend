import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Tittle, Form, Botao } from './styles';

import { useSelector, useDispatch } from 'react-redux';
import altAuth, { selectors } from '../../store/ducks/toAuth'

import { allUsers } from '../../store/fetchActions';

const UserLogin = () => {

  const [ login, setLogin ] = useState({});
  const [ authed , setAuthed ] = useState(false);

  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const authState = useSelector(state => selectors.selectAuthState(state))

  useEffect( () => {
    dispatch(allUsers());

    users.forEach(function(obj) {
      if ( obj.nome == login.nome && obj.senha == login.senha) {
        setAuthed(true)
    }})

  },
  [users, authState, dispatch]);

  function changeLogin(e) {
    const {name, value} = e.target

    setLogin({...login, [name]: value})

  }

  return(
    <div>
      <Container >
        <Tittle>
          Acesso ao Sistema
          <br />
          D.P.C.A.
        </Tittle>

        <Form>
          <div>
            <label htmlFor="user">Usuário:</label>
            <br />
            <input id="nome" type="text" name="nome" onChange={changeLogin} value={Form.nome}/>
          </div>

          <div>
            <label htmlFor="password">Senha:</label>
            <br />
            <input id="senha" type="password" name="senha" onChange={changeLogin} value={Form.senha} />
          </div>

        </Form>

        <Link to='/home'> <Botao onClick={() => dispatch(altAuth(login, authed))}>Entrar</Botao> </Link>


      </Container>
    </div>
  )
};

export default UserLogin;
