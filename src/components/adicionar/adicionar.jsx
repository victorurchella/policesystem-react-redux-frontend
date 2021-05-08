import React from 'react';
import Menu from '../templates/menu/menu';
import PageHeader from '../templates/pageHeader/pageHeader';
import AdicionarForm from './adicionarForm';

const Adicionar = () => (
  <div>
    <Menu />
    <PageHeader name="Adicionar" small="Código Penal" />
    <AdicionarForm />
  </div>
);

export default Adicionar;
