import styled from 'styled-components';

import { theme } from 'theme';

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 90px);
  justify-content: center;
  max-width: 700px;
  text-align: center;
  margin: 0 auto;
  line-height: ${theme.font.h3};

  a {
    font-weight: bold;
    text-decoration: underline;
  }
`;
