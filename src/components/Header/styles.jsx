import styled from 'styled-components';

export const Header = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 1.5em;
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
      padding: 5px 20px;

      &:hover {
        text-decoration: underline;
      }

      .active {
        font-weight: bold;
      }
    }
  }
`;
