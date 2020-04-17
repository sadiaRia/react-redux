import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
function App() {
  return (
    <Provider store={store}> {/*we need to pass the store as props in provider*/}
      <div className="App">
        <ItemContainer />
        <ItemContainer cake />
        <HooksCakeContainer />
        <CakeContainer />
        <IcecreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
