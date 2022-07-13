import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
   render() {
      return (
         <Provider store={store}>
            <div className="App">
               <header className="App-header">
                  <h1 className="App-title">React/Redux Express Starter</h1>
               </header>
            </div>
         </Provider>
      );
   }
}

export default App;
