import styled from 'styled-components';

import { theme, utils } from 'theme';

export const Button = styled.button`
  padding: 12px ${theme.spacing.base};
  background: ${theme.colors.primary};
  color: ${theme.colors.text};
  border-radius: 8px;
  box-shadow: 0px 10px 42px ${theme.colors.shadow}4d;
  border: 0;
  cursor: pointer;
  transition: ${utils.transition(['box-shadow'])};

  &:hover {
    box-shadow: 2px 4px 12px ${theme.colors.shadow}4d;

    svg {
      margin-left: ${theme.spacing.base};
      margin-right: 0;
    }
  }

  svg {
    width: ${theme.font.h4};
    margin-left: ${theme.spacing.small};
    margin-right: ${theme.spacing.small};
    vertical-align: middle;
    transition: ${utils.transition(['margin-left', 'margin-right'])};
  }
`;
