import React from 'react';
import Menu from '../templates/menu/menu';
import PageHeader from '../templates/pageHeader/pageHeader';
import Lista from './psystemLista';

const PoliceSystem = () => (
  <div>
    <Menu />
    <PageHeader name="Listagem" small="Código Penal" />
    <Lista />
  </div>
);

export default PoliceSystem;
