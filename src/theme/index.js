import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

import resetCss from './reset';
import globalCss from './global';

injectGlobal`
  ${styledNormalize}

  ${resetCss}
  ${globalCss}
`;

export { default as theme } from './variables';
export { default as utils } from './utils';
