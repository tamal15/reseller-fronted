// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home';
import BuyerDashboard from './Pages/Home/BuyerDashboard/BuyerDashboard';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
    {/* <AuthProvider> */}
    <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buyer" element={<BuyerDashboard />} />
      
      </Routes>
      </BrowserRouter>
     
    {/* </AuthProvider> */}
    </div>
  );
}

export default App;
