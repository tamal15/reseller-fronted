// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './Shared/Header/Header';
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
import SuccessOrder from './Pages/Payment/SuccessOrder/SuccessOrder'
import MyOrder from './Pages/Dashboard/UserDashboard/MyOrder/MyOrder';
import FeaturesProductUpload from './Pages/Dashboard/AdminDashboard/FeaturesProductUpload/FeaturesProductUpload';
import Contact from './Pages/Contact/Contact';
import FashionProductUpload from './Pages/Dashboard/AdminDashboard/FashionProductUpload/FashionProductUpload';
import OrderShow from './Pages/Home/BuyerDashboard/OrderShow/OrderShow';
import Power from './Pages/Home/BestSellers/Shop/Power';
import Topup from './Pages/Home/BestSellers/Shop/Topup';
import Expert from './Pages/Home/BestSellers/Expert';
import RajKonna from './Pages/Home/BestSellers/Shop/Rajkonna';
import RedvioletShop from './Pages/Home/BestSellers/Shop/RedvioletShop';
import BrotherShop from './Pages/Home/BestSellers/Shop/BrotherShop';
import PotterDataUpload from './Pages/Dashboard/BuyerDashboard/PotterDataUpload/PotterDataUpload';
import EditPotterData from './Pages/Dashboard/BuyerDashboard/PotterDataUpload/EditPotterData/EditPotterData';
import BuyerAllProduct from './Pages/Home/BuyerProduct/BuyerAllProduct';
import About from './Pages/Home/About/About';
import AdminAllProductUpload from './Pages/Dashboard/AdminDashboard/AdminAllProductUpload/AdminAllProductUpload';
import AdminAllProductShow from './Pages/Dashboard/AdminDashboard/AdminAllProductUpload/AdminAllProductShow';
import AdminProductDetails from './Pages/Dashboard/AdminDashboard/AdminAllProductUpload/AdminProductDetails';
import AdminProducts from './Pages/Dashboard/AdminDashboard/AdminProducts/AdminProducts';
import UserOrders from './Pages/Dashboard/AdminDashboard/UserOrders/UserOrders';

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
              {/* <Route path="/success" element={<SuccessOrder />} /> */}
              
              <Route path="/tat" element={<TaterSharee />} />
              {/* <Route path="/jamdani" element={<Jamdani />} /> */}
              <Route path="/all-categories" element={<AllCategoriesSharee />} />
              <Route path="/pottery" element={<PotteryProduct />} />
              <Route path="/users/update/:id" element={<UpdateProducts />} />
              <Route path="/jamdani" element={<Jamdani />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/fashion" element={<FashionProductUpload />} />
              <Route path="/features" element={<FeaturesProductUpload />} />
              <Route path="/buyerAllproduct" element={<BuyerAllProduct />} />
              <Route path="/about" element={<About />} />
              <Route path="/powerShop" element={<Power />} />
              <Route path="/topShop" element={<Topup />} />
              <Route path="/expertShop" element={<Expert />} />
              <Route path="/rajShop" element={<RajKonna />} />
              <Route path="/redvioletShop" element={<RedvioletShop />} />
              <Route path="/brother" element={<BrotherShop />} />
             
              <Route path="/adminproductshow" element={<AdminAllProductShow />} />
              <Route path="/adminsproducts" element={<AdminProducts />} />
             
              <Route path="success/:id" element={<SuccessOrder />} />
             
              {/* <Route path="/potterupload" element={<PotterUpload />} /> */}
              <Route
              path="bookDetails/:id"
              element={<ProductDetails />}/>
              <Route
              path="adminbookDetails/:id"
              element={<AdminProductDetails />}/>

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
              <Route path="/dashboard/myorder" element={<MyOrder/>} />
              {/* <Route path="/dashboard/featuresProductUpload" element={<FeaturesProductUpload/>} /> */}
              <Route path="/dashboard/updateProduct" element={<BuyerProductUpdate />} />
              <Route path="/dashboard/customerorder" element={<OrderShow />} />
              <Route path="/dashboard/usercustomerorder" element={<UserOrders />} />
              <Route path="/dashboard/potterDataUpload" element={<PotterDataUpload />} />
              <Route path="/dashboard/users/update/:id" element={<UpdateProducts />} />
              <Route path="/dashboard/userspotter/updatepotter/:id" element={<EditPotterData />} />
              <Route path="/dashboard/adminsproducts" element={<AdminProducts />} />
              <Route path="/dashboard/adminAllProduct" element={<AdminAllProductUpload />} />

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
