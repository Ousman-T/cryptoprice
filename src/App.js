import {Routes, Route} from 'react-router-dom'
import './App.css';
import Main from './Pages/Main';
import Price from './Pages/Price';
import Currencies from './Pages/Currencies';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* defining our routes */}
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/price/:symbol' element={<Price />} />
        <Route path='/currencies' element={<Currencies />} />
      </Routes>
    </div>
  );
}

export default App;
