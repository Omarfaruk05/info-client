import { ToastContainer } from 'react-toastify';
import './App.css';
import Body from './components/Body/Body';
import NavComponent from './components/NavComponent/NavComponent';

function App() {
  return (
    <div className="App">
      <NavComponent></NavComponent>
      <Body></Body>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
