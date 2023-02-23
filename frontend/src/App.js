
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import NavBar from './Components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route 
          path="/"
          element={<Home />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
