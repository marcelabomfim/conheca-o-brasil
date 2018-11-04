import styled from 'styled-components';

import { theme } from 'theme';

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  min-height: 100vh;
  margin: 0 auto;
  padding: ${theme.spacing.large};
  display: flex;
  flex-direction: column;
  justify-content: ${props =>
    props.justifyBetween ? 'space-between' : 'flex-start'};
  align-items: flex-start;
`;
