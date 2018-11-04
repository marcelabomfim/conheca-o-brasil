import theme from './variables';

export default `
  body {
    color: ${theme.colors.text};
    font-family: ${theme.font.text};

    background: ${theme.colors.bg1};
    background: -moz-linear-gradient(45deg, ${theme.colors.bg1} 30%, ${
  theme.colors.bg2
} 100%);
    background: -webkit-linear-gradient(45deg, ${theme.colors.bg1} 30%,${
  theme.colors.bg2
} 100%);
    background: linear-gradient(45deg, ${theme.colors.bg1} 30%,${
  theme.colors.bg2
} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${
      theme.colors.bg1
    }', endColorstr='${theme.colors.bg2}',GradientType=1 );
  }

  h1, h2, h3, h4 {
    font-family: ${theme.font.title};
  }
`;
