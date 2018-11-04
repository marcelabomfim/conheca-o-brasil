import styled from 'styled-components';

import { theme } from 'theme';

export const Header = styled.header`
  padding: ${theme.spacing.large};
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: ${theme.font.h3};
  margin: 0;
`;

export const Menu = styled.nav`
  text-align: right;
  margin: 0;

  ul {
    margin: 0;

    li {
      display: inline-block;
      list-style: none;
      padding: ${theme.spacing.xsmall} ${theme.spacing.base};

      &:hover {
        text-decoration: underline;
      }

      .active {
        font-weight: bold;
      }

      svg {
        margin-left: ${theme.spacing.small};
      }
    }
  }
`;
