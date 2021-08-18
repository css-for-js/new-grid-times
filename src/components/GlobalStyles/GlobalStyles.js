import { createGlobalStyle } from 'styled-components/macro';

import { COLORS, WEIGHTS, FAMILIES } from '../../constants';

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* DESIGN TOKENS */
html {
  --color-white: ${COLORS.white};
  --color-offblack: ${COLORS.offblack};
  --color-gray-100: ${COLORS.gray[100]};
  --color-gray-300: ${COLORS.gray[300]};
  --color-gray-500: ${COLORS.gray[500]};
  --color-gray-700: ${COLORS.gray[700]};
  --color-gray-900: ${COLORS.gray[900]};
  --color-primary: ${COLORS.primary};
  --color-secondary: ${COLORS.secondary};
  --color-urgent: ${COLORS.urgent};

  --font-weight-normal: ${WEIGHTS.normal};
  --font-weight-medium: ${WEIGHTS.medium};
  --font-weight-bold: ${WEIGHTS.bold};

  --font-family-serif: ${FAMILIES.serif};
  --font-family-sans-serif: ${FAMILIES.sansSerif};
  --font-family-logo: ${FAMILIES.logo};
}


/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

html {
  /*
    Silence the warning about missing Reach Dialog styles
  */
  --reach-dialog: 1;
}

html, body, #root {
  height: 100%;
}

body {
  background-color: var(--color-gray-100);
  font-family: 'Crimson Pro', sans-serif;
}

/*
  Remove default button styles. We'll provide our own at the
  component level
*/
button {
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyles;
