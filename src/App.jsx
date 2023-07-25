import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Opcoes from './pages/Opcoes';
import Mensal from './pages/Mensal';
import Anual from './pages/anual';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Opcoes/>}>
          <Route path='/' element={<Mensal/>}></Route>
          <Route path='/anual' element={<Anual/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
