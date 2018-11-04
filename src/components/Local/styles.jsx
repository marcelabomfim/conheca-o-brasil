import styled from 'styled-components';

import { theme } from 'theme';

export const Local = styled.div`
  padding: ${theme.spacing.large};
`;

export const Image = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  z-index: -1;
  background-image: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.35;
  filter: blur(1px);
`;
