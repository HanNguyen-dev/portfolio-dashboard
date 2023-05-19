import React from 'react';

import style from './App.module.css';
import AppRouter from './AppRouter';
import NavBar from './features/navbar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div className={style.appWrapper}>
        <AppRouter />
      </div>
    </>

  );
}

export default App;
