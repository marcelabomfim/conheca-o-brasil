import React from 'react';

import Icon from 'components/Icon';

import { IconContainer } from './styles';

export default () => (
  <IconContainer>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <Icon name="facebook" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <Icon name="twitter" />
    </a>
    <a
      href="https://github.com/marcelabomfim/conheca-o-brasil"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="github" />
    </a>
  </IconContainer>
);
