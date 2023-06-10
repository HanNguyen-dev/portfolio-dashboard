import React from 'react';

import style from './App.module.css';
import AppRouter from './AppRouter';
import NavBar from './features/navbar/NavBar';
import { ThemeProvider } from '@mui/material';
import { themeApp } from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={themeApp}>
      <NavBar />
      <div className={style.appWrapper}>
        <AppRouter />
      </div>
    </ThemeProvider>

  );
}

export default App;
