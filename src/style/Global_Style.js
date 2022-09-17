import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   
   * {
      box-sizing: border-box;
   }  
   
   body {
    margin: 0;
    padding-top: 50px;
    font-family: 'Raleway', sans-serif;
   }

   .container {
      width: 94%;
      padding: 0 15px;
      margin: auto;
   }

   a {
      text-decoration: none;
      color: #000;
   }
`;

export default GlobalStyle;
