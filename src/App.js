// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home';
import BuyerDashboard from './Pages/Home/BuyerDashboard/BuyerDashboard';
import CartContextProvider from './Context/CartContext';
import OrderReviewPage from './Pages/OrderReviewPage/OrderReviewPage';
import Payment from './Pages/Payment/Payment';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import AuthProvider from './Context/AuthProvider';
import ProductBuyer from './Pages/Dashboard/BuyerDashboard/ProductBuyer';
import ProductDetails from './Pages/Home/BuyerProduct/ProductDetails';
import Dashboard from './Pages/Dashboard/Dashboard';
import BuyerWelcome from './Pages/Dashboard/BuyerDashboard/BuyerWelcome/BuyerWelcome';
import UserProfile from './Pages/Dashboard/UserProfile/UserProfile';
import UserUpdateProfile from './Pages/Dashboard/UserProfile/UserUpdateProfile';
import MakeAdmin from './Pages/Dashboard/AdminDashboard/MakeAdmin/MakeAdmin';
import TaterSharee from './Pages/ShareeCategories/TaterSharee/TaterSharee';
// import Jamdani from './Pages/ShareeCategories/Jamdani/Jamdani';
import PotteryProduct from './Pages/PotteryProduct/PotteryProduct';
import PotterUpload from './Pages/Home/BuyerDashboard/PotterUpload/PotterUpload';
import BuyerProductUpdate from './Pages/Home/BuyerDashboard/BuyerProductUpdate/BuyerProductUpdate';
import UpdateProducts from './Pages/Home/BuyerDashboard/BuyerProductUpdate/UpdateProducts';
import AllCategoriesSharee from './Pages/ShareeCategories/AllCategoriesSharee/AllCategoriesSharee';
import Jamdani from './Pages/ShareeCategories/Jamdani/Jamdani';
// import ProductsCategories from './Pages/ProductsCategories/ProductsCategories';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartContextProvider>
          <BrowserRouter>
            {/* <Header></Header> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/OrderReview" element={<OrderReviewPage />} />
              <Route path="/payment" element={<Payment />} />
              {/* <Route path="/buyer" element={<BuyerDashboard />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              <Route path="/tat" element={<TaterSharee />} />
              {/* <Route path="/jamdani" element={<Jamdani />} /> */}
              <Route path="/all-categories" element={<AllCategoriesSharee />} />
              <Route path="/pottery" element={<PotteryProduct />} />
              <Route path="/users/update/:id" element={<UpdateProducts />} />
              <Route path="/jamdani" element={<Jamdani />} />
             
              {/* <Route path="/potterupload" element={<PotterUpload />} /> */}
              <Route
              path="bookDetails/:id"
              element={<ProductDetails />}/>

              {/* buyer dashboard  */}

              <Route path="/dashboard" element={<Dashboard/>}>
              <Route path="/dashboard" element={<BuyerWelcome/>} />
              <Route path="/dashboard/welcome" element={<BuyerWelcome/>} />
              <Route path="/dashboard/userProfile" element={<UserProfile/>} />
              <Route path="/dashboard/userUpdate" element={<UserUpdateProfile/>} />
              <Route path="/dashboard/makeadmin" element={<MakeAdmin/>} />
              <Route path="/dashboard/uploadProduct" element={<ProductBuyer />} />
              <Route path="/dashboard/potterupload" element={<PotterUpload />} />
              <Route path="/dashboard/buyer" element={<BuyerDashboard />} />
              <Route path="/dashboard/updateProduct" element={<BuyerProductUpdate />} />
              <Route path="/dashboard/users/update/:id" element={<UpdateProducts />} />

              </Route>
             {/* product categories  */}
              {/* <Route path="/categories" element={<ProductsCategories/>}>
              <Route path="/categories" element={<BuyerWelcome/>} />

              </Route> */}
    
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
