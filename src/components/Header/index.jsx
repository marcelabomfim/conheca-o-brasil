import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from 'components/Icon';
import Brasil from 'components/Brasil';

import { Header, Menu, Title } from './styles';

export default () => (
  <Header>
    <Title>
      <Brasil /> Conheça o Brasil
    </Title>
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
            Contribua <Icon name="github" />
          </a>
        </li>
      </ul>
    </Menu>
  </Header>
);
