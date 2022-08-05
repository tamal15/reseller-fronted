// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home';
import BuyerDashboard from './Pages/Home/BuyerDashboard/BuyerDashboard';
import CartContextProvider from './Context/CartContext';
import OrderReviewPage from './Pages/OrderReviewPage/OrderReviewPage';
import Payment from './Pages/Payment/Payment';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/OrderReview" element={<OrderReviewPage />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/buyer" element={<BuyerDashboard />} />

          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
