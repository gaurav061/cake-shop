import './App.css';
import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/cakes/store'
import HooksCakeContainer from './Components/hooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer/>
        <CakeContainer/>
      </div>
    </Provider>
    
  );
}

export default App;
