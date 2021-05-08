import React, { useState, useEffect } from 'react';
import Menu from '../templates/menu/menu';
import { Button, Modal } from 'react-bootstrap';
import CurrencyInput from 'react-currency-input-field';
import { Link } from 'react-router-dom';

import api from '../../services/api.service'
import { useParams } from 'react-router-dom'

import { Backg, Botao } from './styles';
import Form from '../adicionar/styles';

const Editar = () => {

  const [ show, setShow ] = useState(false);
  const handleClose = () => setShow(false);
  const handleSubmit = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ cp, setCP ] = useState('');
  const [ multa, setMulta ] = useState('');
  const [ tempoPrisao, setTempoPrisao ] = useState('');
  const [ status, setStatus ] = useState('');
  const [ descricao, setDescricao ] = useState('');

  const id = useParams();

  useEffect( () => {
    async function getUsuario(){
      var response = await api.get('/codigopenal/'+id.id)

      setCP(response.data.nome)
      setMulta(response.data.multa)
      setTempoPrisao(response.data.tempoPrisao)
      setStatus(response.data.status)
      setDescricao(response.data.descricao)

    }

    getUsuario()
  },[]);

   return (
    <div>
      <Menu />
      <Backg>
        <Form>
          <h1> Editar Código Penal </h1>
          <br />

          <div>
            <label>Código Penal:</label>
            <br />
            <input id="nomeCP" type="text" name="nome" value={cp} onChange={e => setCP(e.target.value)} />
            <br />
          </div>

          <div>
            <label>Valor da multa:</label>
            <br />
            <CurrencyInput id="multa" name="multa" prefix="R$" value={multa} onChange={e => setMulta(e.target.value)} />
            <br />
          </div>

          <div>
            <label>Tempo de sentença:</label>
            <br />
            <input id="tempo" type="number" name="tempo" value={tempoPrisao} onChange={e => setTempoPrisao(e.target.value)} />
            <br />
          </div>

          <div>
            <label>Status:</label>
            <br />
            <input id="status" type="number" name="status" value={status} onChange={e => setStatus(e.target.value)} />
            <br />
          </div>

          <div>
            <label>Descrição:</label>
            <br />
            <textarea name="desc" id="desc" cols="30" rows="10" value={descricao} onChange={e => setDescricao(e.target.value)} />
          </div> 

        </Form>

        <Botao onClick={handleShow}>Editar</Botao>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Deseja mesmo editar o Código Penal?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Ao confirmar, você ira alterar os dados deste código penal.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}> Voltar </Button>
            <Link to='/home'>
              <Button variant="primary" onClick={handleSubmit}> Confirmar </Button>
            </Link>
          </Modal.Footer>
        </Modal>

      </Backg> 
    </div>
  );
};

export default Editar;
