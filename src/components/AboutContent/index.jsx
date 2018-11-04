import React from 'react';

import { AboutContent } from './styles';

export default () => (
  <AboutContent>
    <p>
      Um projeto Open Source, criado para que as pessoas pudessem fazer a sua
      colaboração com a cruação de uma lista de locais para se conhecer no
      Brasil, e, ao mesmo tempo, participar do Hacktoberfest '18.
    </p>
    <p>
      Você também pode contribuir com o projeto, seja enviando outros locais ou
      fazendo alguma melhoria no código, basta seguir os esses passos{' '}
      <a href="https://github.com/marcelabomfim/conheca-o-brasil/blob/master/CONTRIBUTING.md">
        aqui
      </a>
      .
    </p>
    <p>
      Site desenvolvido utilizando React, todo o código está disponível{' '}
      <a href="https://github.com/marcelabomfim/conheca-o-brasil">aqui</a>.
    </p>
  </AboutContent>
);
