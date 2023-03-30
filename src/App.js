import { Provider } from 'react-redux';
import './App.css';
import Com from './Components/Com';
import { store } from "./Components/Redux/store"


function App() {
  return (
    <div className="App">
      App Component
      <Provider store={store}>
      <Com/>
      </Provider >
    </div>
  );
}

export default App;
