import React from 'react';

import { Button } from './styles';

export default ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
);
