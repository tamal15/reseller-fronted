// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
