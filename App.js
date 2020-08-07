import * as React from 'react';
// import createStore from './createReduxStore'
import { Provider } from 'react-redux';
import HomeNavigation from './navigation';
import store from './redux/configStore';



function App() {
  return (
    <Provider store={store}>
    <HomeNavigation />
    </Provider>
  );
}

export default App;
