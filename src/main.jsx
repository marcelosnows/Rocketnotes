import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components'; // prover um thema. 
import GlobalStyles from './styles/global'; // inserimos no themeProvider para termos acesso aos tokens de cor.

import theme from './styles/theme';


import { SignIn } from './pages/SignIn';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
    <GlobalStyles />
    <SignIn />
    </ThemeProvider>
  </React.StrictMode>,
 );

