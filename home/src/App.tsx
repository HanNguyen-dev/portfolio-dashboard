import React from 'react';

import style from './App.module.css';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className={style.appWrapper}>
      <AppRouter />
    </div>
  );
}

export default App;
