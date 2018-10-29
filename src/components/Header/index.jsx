import React from 'react';
import { NavLink } from 'react-router-dom';

import { Header, Menu, Title } from './styles';

export default () => (
  <Header>
    <Title>Conheça o Brasil</Title>
    <Menu>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/" exact>
            Início
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/sobre">
            Sobre
          </NavLink>
        </li>
        <li>
          <a href="https://github.com/marcelabomfim/conheca-o-brasil">
            Contribua
          </a>
        </li>
      </ul>
    </Menu>
  </Header>
);
