import * as React from 'react';
import './App.css';
import Main from './Main';

export default class App extends React.Component<{}, any> {
  render() {
      return(
        <div className="App">
          <Main />
        </div>
      );
  }
}