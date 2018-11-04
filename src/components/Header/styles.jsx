import styled from 'styled-components';

import { theme } from 'theme';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h3`
  font-size: ${theme.font.h3};
  margin: 0;
  text-shadow: 0 0 12px ${theme.colors.shadow}4d;
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
      text-shadow: 0 0 12px ${theme.colors.shadow}4d;

      .active {
        font-weight: bold;
      }

      svg {
        margin-left: ${theme.spacing.small};
      }
    }
  }
`;
