import styled from 'styled-components';

import { theme } from 'theme';

export const Local = styled.div`
  padding: ${theme.spacing.large};

  .container {
    max-width: 760px;
  }
`;

export const Title = styled.h1`
  font-size: ${theme.font.h1};
  text-shadow: 0 0 12px ${theme.colors.shadow}4d;
  margin: 0;
`;

export const SubTitle = styled.h2`
  font-size: ${theme.font.h2};
  text-shadow: 0 0 12px ${theme.colors.shadow}4d;
  margin: ${theme.spacing.large} 0;

  svg {
    width: ${theme.font.h4};
  }
`;

export const Description = styled.p`
  font-size: ${theme.font.h4};
  line-height: ${theme.font.h3};
  margin: 0;
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
