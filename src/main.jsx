import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store from './reducer/store.js';
import { ThemeProvider } from 'styled-components';
import AppThemeProvider from './component/AppThemeProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AppThemeProvider></AppThemeProvider>
    </Provider>
  </StrictMode>
);