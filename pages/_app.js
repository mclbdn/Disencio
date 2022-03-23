import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Roboto+Slab:wght@400;500;600;700;800;900&display=swap");

  *,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html,
body,
#root {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Lato', sans-serif;
  color: var(--off-white-color);
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

ul {
  padding-inline-start: 0px;
}

::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: rgba(187, 200, 212, 1);
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color: rgba(187, 200, 212, 1);
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color: rgba(187, 200, 212, 1);
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color: rgba(187, 200, 212, 1);
}
::-ms-input-placeholder { /* Microsoft Edge */
   color: rgba(187, 200, 212, 1);
}

::placeholder { /* Most modern browsers support this now. */
   color: rgba(187, 200, 212, 1);
}

#root,
#__next {
  isolation: isolate;
  background-color: var(--dark-color);
}

:root {
  --dark-color: #1a2028;
  --pink-color: #fc0085;
  --purple-color: #9300bf;
  --blue-color: #0000fc;
  --light-blue-color: #009dff;
  --turquoise-color: #0dfffc;
  --off-white-color: #f2f4f7;
}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
