import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from './styles';

const AdicionarForm = () => {

  const [ show, setShow ] = useState(false);
  const handleClose = () => setShow(false);
  const handleSubmit = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <Form>
      <h1> Adicionar um novo Código Penal </h1>
      <br />

      <div>
        <label>Código Penal:</label>
        <br />
        <input id="nomeCP" type="text" name="nome" />
        <br />
      </div>

      <div>
        <label>Data de inclusão:</label>
        <br />
        <input id="data" type="date" name="data" />
        <br />
      </div>

      <div>
        <label>Valor da multa:</label>
        <br />
        <CurrencyInput id="multa" name="multa" prefix="R$" />
        <br />
      </div>

      <div>
        <label>Tempo de sentença:</label>
        <br />
        <input id="tempo" type="number" name="tempo" />
        <br />
      </div>

      <div>
        <label>Status:</label>
        <br />
        <input id="status" type="number" name="status" />
        <br />
      </div>

      <div>
        <label>Descrição:</label>
        <br />
        <textarea name="desc" id="desc" cols="30" rows="10" />
        <br />
      </div>

      <Button id="btn" onClick={handleShow}>Adicionar</Button>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Deseja mesmo adicionar esse código?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Ao confirmar, você ira alterar adicionar um novo código penal.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}> Voltar </Button>
            <Link to='/home'>
              <Button variant="success" onClick={handleSubmit}> Confirmar </Button>
            </Link>
          </Modal.Footer>
        </Modal>

    </Form>
  )
};

export default AdicionarForm;
