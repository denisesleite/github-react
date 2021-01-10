import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes';
import GlobalStyles from './styles/global';

export const App: React.FC = () => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);
