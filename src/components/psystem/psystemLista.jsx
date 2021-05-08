import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Tabela } from './styles';
import { SearchInput } from '../templates/searchInput/searchInput';
import { useSelector, useDispatch } from 'react-redux';
import { allCP } from '../../store/fetchActions';

import EditIco from '../../res/images/pencil-2x.png';
import ViewIco from '../../res/images/eye-2x.png';
import DelIco from '../../res/images/trash-2x.png';

const Lista = () => {

  const [ show, setShow ] = useState(false);
  const [ search, setSearch ] = useState('');

  const handleClose = () => setShow(false);
  const handleSubmit = () => setShow(false);
  const handleShow = () => setShow(true);

  const cp = useSelector(state => state.cp)
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(allCP());
 
  },
  [search]);

  const filtro = cp.filter(function(obj){
    return ( obj.nome.toLowerCase().startsWith(search.toLowerCase()) )
  })

  return (
    <div>
      <SearchInput value={search} onChange={(e) => setSearch(e)}/>
      
      <Tabela className='rTable'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data</th>
            <th>Multa</th>
            <th>Status</th>
            <th>Configuração</th>
          </tr>
        </thead>
        <tbody>
          { filtro.map(function (cp){
            return(
              <tr key={cp.id}>
                <td>{cp.nome}</td>
                <td>{cp.dataCriacao.substring(8, 10)}/{cp.dataCriacao.substring(5, 7)}/{cp.dataCriacao.substring(0, 4)} - {cp.dataCriacao.substring(11, 16)}</td>
                <td>R$ {cp.multa}</td>
                <td>{cp.status==1?<>Ativo</>:<>Inativo</>}</td>
                <td>
                  <Link to={`/editar/${cp.id}`}>
                    <button type='button' className='btn btn-warning'><img src={EditIco} alt='img' /></button>
                  </Link>
                  <Link to={`/visualizar/${cp.id}`}>
                    <button type='button' className='btn btn-primary'><img src={ViewIco} alt='img' /></button>
                  </Link>
                  <button type='button' className='btn btn-danger' onClick={handleShow}><img src={DelIco} alt='img' /></button>
                </td>

                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Deseja mesmo remover?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Ao confirmar, você ira remover permanentemente o código penal.</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}> Voltar </Button>
                  <Link to='/home'>
                    <Button variant="danger" onClick={handleSubmit}> Confirmar </Button>
                  </Link>
                </Modal.Footer>
                </Modal>

              </tr>
            )
          })
          }
        </tbody>
      </Tabela>

    </div>
  );
};

export default Lista;
