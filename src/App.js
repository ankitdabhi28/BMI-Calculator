import { Provider } from 'react-redux';
import './App.css';
import AllDataComponent from './Components/AllDataComponent';
import InputFilds from './Components/InputFilds';
import PrintData from './Components/PrintData';
import { store } from "./Components/Redux/store"


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <InputFilds/>
      <PrintData/>
      <AllDataComponent />
      </Provider >
    </div>
  );
}

export default App;
