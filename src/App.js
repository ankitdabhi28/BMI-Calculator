import { Provider } from 'react-redux';
import './App.css';
import InputFilds from './Components/InputFilds';
import PrintData from './Components/PrintData';
import { store } from "./Components/Redux/store"


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <InputFilds/>
      <PrintData/>
      </Provider >
    </div>
  );
}

export default App;
