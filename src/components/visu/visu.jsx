import React, { useState, useEffect } from 'react';
import Menu from '../templates/menu/menu';
import CurrencyInput from 'react-currency-input-field';
import { Link } from 'react-router-dom';

import api from '../../services/api.service'
import { useParams } from 'react-router-dom'

import { Backg, Botao} from '../editar/styles'
import Form from '../adicionar/styles'

const Visu = () => {

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
                    <h1> Visualização do Código Penal </h1> <br/>

                    <div>
                        <label>Código Penal:</label> <br/>
                        <input id="nomeCP" type="text" name="nome" value={cp} readOnly/> <br/>
                    </div>

                    <div>
                        <label>Valor da multa:</label> <br/>
                        <CurrencyInput id="multa" name="multa" prefix="R$" value={multa} readOnly/> <br/>
                    </div>

                    <div>
                        <label>Tempo de sentença:</label> <br/>
                        <input id="tempo" type="number" name="tempo" value={tempoPrisao} readOnly/> <br/>
                    </div>

                    <div>
                        <label>Status:</label> <br/>
                        <input id="status" type="number" name="status" value={status} readOnly/> <br/>
                    </div>

                    <div>
                        <label>Descrição:</label> <br/>
                        <textarea name="desc" id="desc" cols="30" rows="10" value={descricao} readOnly></textarea>
                    </div>

                </Form>

                <Link to='/home'>
                    <Botao>Retornar a listagem</Botao>
                </Link>

            </Backg>
        </div>
    )
}

export default Visu