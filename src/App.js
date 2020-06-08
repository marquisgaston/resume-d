import React from 'react';
import './App.scss';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import reducers from './reducers';
import Resume from './components/resume';

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

function App() {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <div className="App">
        <header className="App-header">
          <Resume/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
