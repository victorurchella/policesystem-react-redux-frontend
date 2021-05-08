/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';

import PageHeader from './styles';

export default (props) => (
  <PageHeader className="page-header">
    <h2>
      {props.name}
      <small>{props.small}</small>
    </h2>
  </PageHeader>
);
