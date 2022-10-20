import './App.css';
import Login from './Login';
import Profile from './Profile';
import {store} from './store'
import {Provider} from 'react-redux'
import Test from './parent/fils/Test';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Profile />
      <Login />
      <Test />
    </Provider>
    </div>
  );
}

export default App;
