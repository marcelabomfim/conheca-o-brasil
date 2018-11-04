import React from 'react';

import Icon from 'components/Icon';

import { Local, Title, SubTitle, Description, Image } from './styles';

export default ({ local }) => (
  <Local>
    <div className="container">
      <Title>{local.titulo}</Title>
      <SubTitle>
        <Icon name="location" /> {local.cidade}/{local.uf}
      </SubTitle>
      <Description>{local.descricao}</Description>
    </div>
    <Image src={local.imagem} />
  </Local>
);
