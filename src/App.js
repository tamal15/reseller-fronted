// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home';
import BuyerDashboard from './Pages/Home/BuyerDashboard/BuyerDashboard';
import AuthProvider from './context/AuthProvider';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buyer" element={<BuyerDashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      </Routes>
      </BrowserRouter>
     
    </AuthProvider>
    </div>
  );
}

export default App;
