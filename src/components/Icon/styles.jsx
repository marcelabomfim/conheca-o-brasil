import styled from 'styled-components';

import { theme } from 'theme';

export default styled.svg.attrs({
  viewBox: '0 0 1024 1024'
})`
  width: ${theme.font.h3};
  height: auto;
  color: inherit;
  display: inline-block;
  vertical-align: middle;
  fill: ${theme.colors.text};
`;
