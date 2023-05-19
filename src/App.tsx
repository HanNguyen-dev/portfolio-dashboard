import React from 'react';

import style from './App.module.css';
import AppRouter from './AppRouter';
import TopBar from './features/portal/components/TopBar';

function App() {
  return (
    <>
      <TopBar />
      <div className={style.appWrapper}>
        <AppRouter />
      </div>
    </>

  );
}

export default App;
