import React from 'react';

import { Local, Image } from './styles';

export default ({ local }) => (
  <Local>
    <h2>{local.titulo}</h2>
    <h4>
      {local.cidade}/{local.uf}
    </h4>
    <p>{local.descricao}</p>
    <Image src={require('../../' + local.imagem)} />
  </Local>
);
