import React from 'react';

import { Container } from './styles';

export default ({ children, justifyBetween }) => (
  <Container justifyBetween={justifyBetween}>{children}</Container>
);
