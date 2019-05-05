import React from 'react';
import classes from './App.css';
import Content from './components/Content/Content'

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.Wrapper}>
        <header className={classes.Header}>
          <div className={classes.LeftMenu}>HEADER</div>
          <a href="#">ランキング</a>
          <a href="#">ダミー</a>
          <a href="#">ログイン</a>
        </header>
        <div className={classes.Content}>
          <Content />
        </div>
        <header className={classes.Footer}>FOOTER</header>
      </div>
    </div>
  );
}

export default App;
