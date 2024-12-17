import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

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
import PotteryProduct from './Pages/PotteryProduct/PotteryProduct';
import BuyerProductUpdate from './Pages/Home/BuyerDashboard/BuyerProductUpdate/BuyerProductUpdate';
import UpdateProducts from './Pages/Home/BuyerDashboard/BuyerProductUpdate/UpdateProducts';
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
import StoreProduct from './Pages/OrderReviewPage/StoreProduct';
import DarkAndWhiteTheme from './Pages/Home/Mood/DarkAndWhiteTheme';

import { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, GlobalTextStyle, LightTheme } from './Pages/Home/Mood/Theme';
import BuyerOrder from './Pages/Home/BuyerDashboard/BuyerOrder/BuyerOrder';
import ManageOrder from './Pages/Dashboard/AdminDashboard/ManageOrder/ManageOrder';
import UpdateOrder from './Pages/Dashboard/AdminDashboard/UpdateOrder/UpdateOrder';
import Abouts from './Pages/Home/About/Abouts';
import UpdateCollection from './Pages/Home/UpdateCollection/UpdateCollection';
import AllpotterShow from './Pages/Home/ShowBuyerPotter/AllpotterShow';
import AdminPotterUpload from './Pages/Dashboard/AdminDashboard/AdminPotterUpload/AdminPotterUpload';
import Feedback from './Pages/Home/Feedback/Feedback';
import AdminSeeFeedback from './Pages/Home/Feedback/AdminSeeFeedback';
import PotterDetails from './Pages/Home/PotterDetails/PotterDetails';
import Scheduleupdate from './Pages/Dashboard/UserProfile/Scheduleupdate';
import UpdatePurchase from './Pages/Dashboard/UserProfile/UpdatePurchase';
import UserDesignOrder from './Pages/Dashboard/BuyerDashboard/userDesignOrder/UserDesignOrder';
import AdminSeeDesign from './Pages/Dashboard/BuyerDashboard/userDesignOrder/AdminseeDesign';
import RequireAuth from './Pages/Home/RequireAuth/RequireAuth';
import AdminOverView from './Pages/Dashboard/AdminDashboard/AdminOverView/AdminOverView';
import GraphShow from './Pages/Dashboard/AdminDashboard/AdminOverView/GraphShow';
import PotterService from './Pages/Dashboard/AdminDashboard/PotterService/PotterService';
import PotterserviceForm from './Pages/Dashboard/AdminDashboard/PotterService/PotterserviceForm';
import PotterServiceShow from './Pages/Dashboard/AdminDashboard/PotterService/PotterServiceShow';
import Services from './Pages/Dashboard/AdminDashboard/PotterService/Services/Services';
import DesignPotter from './Pages/Dashboard/AdminDashboard/PotterService/Services/DesignPotter';
import ServiceDetailsPart from './Pages/Dashboard/AdminDashboard/PotterService/Services/ServiceDetailsPart';
import OverView from './Pages/Home/BuyerDashboard/OverView/OverView';
import Error from './Shared/Error/Error';
import AdminPage from './Components/PaymentData/AdminPage';
import SuccessPage from './Pages/Payment/SuccessPage';
import UsersDashboard from './Components/PaymentData/UserDashboard';
import AdminApprovalPage from './Components/PaymentData/AdminApprovalPage';
import FirstProfile from './Components/PaymentData/FirstProfile';
import TypesAdmin from './Pages/Dashboard/AdminDashboard/AdminAllProductUpload/TypesAdmin';
import CategoryDetails from './Pages/Dashboard/AdminDashboard/AdminAllProductUpload/CategoriesDetails';
import TypeCategoryDetail from './Pages/Home/HomeDataShow/TypeCategoryDetail';
import EditAdminProduct from './Pages/Dashboard/AdminDashboard/AdminProducts/EditAdminProduct';
import NewUserDashboard from './Components/PaymentData/UserDashboard';
import RefferPage from './Components/PaymentData/RefferPage';
import NewRegister from './Login/Register/NewRegister';
import CategorySearch from './Pages/Dashboard/AdminDashboard/AdminAllProductUpload/CategorySearch';
import UserAddress from './Pages/Home/Feedback/UserAddress';
import LoveProduct from './Pages/Home/HomeDataShow/LoveProduct';
import AdminSeeSuport from './Pages/Dashboard/AdminSeeSupport';
import SaveUserAddress from './Pages/Home/Feedback/SaveUserAddress';
import UserAllWithdraw from './Components/PaymentData/UserAllWithdraw';
import Bannerpart from 'Pages/Dashboard/DashboardBanner/Bannerpart';
import Editbannerpart from 'Pages/Dashboard/DashboardBanner/Editbannerpart';
import Upcommingproduct from 'Pages/Dashboard/DashboardBanner/Upcommingproduct';
import Editupcomming from 'Pages/Dashboard/DashboardBanner/Editupcomming';
import AdminPending from 'Pages/AdminPending/AdminPending';



const StyledApp=styled.div`
color: ${(props)=>props.theme.textColor};
`;
function App() {

  const  [theme,setTheme]=useState("light");

    

  const themeToggler=()=>{
        theme==="light" ? setTheme("dark") : setTheme("light");
  }
  return (
    <div className="App">
      <AuthProvider>
        <CartContextProvider>
          <BrowserRouter>
           
           <ThemeProvider
            theme={theme==="light" ? LightTheme : darkTheme}
           >
             <GlobalStyle></GlobalStyle>
             <GlobalTextStyle></GlobalTextStyle>
          {/* <StyledApp> */}
          {/* <button onClick={()=>themeToggler()}>Change Theme</button> */}
          <Routes>
             
              <Route path="/" element={<Home />} />
              <Route path="/OrderReview" element={<RequireAuth><OrderReviewPage /></RequireAuth>} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/erro" element={<Error/>}/>
              {/* <Route path="/buyer" element={<BuyerDashboard />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/theme" element={<DarkAndWhiteTheme />} />
              <Route path="/register" element={<Register />} />
              <Route path="/store" element={<StoreProduct />} />
              <Route path="/mainbalance" element={<UsersDashboard />} />
              <Route path="/firstProfile" element={<FirstProfile />} />
              <Route path="/category/:category" element={<CategoryDetails />} />
              <Route path="/editprofiles" element={<UserProfile />} />
              <Route path="/editupdateprofiles" element={<UserUpdateProfile />} />
              <Route path="/partcategories/:type" element={<TypeCategoryDetail />} />  
              <Route path="/newregister" element={<NewRegister />} />              
            
              {/* <Route path="/success" element={<SuccessOrder />} /> */}
              
              <Route path="/pottery" element={<PotteryProduct />} />
              <Route path="/updateCollection" element={<UpdateCollection />} />
              <Route path="/users/update/:id" element={<UpdateProducts />} />
              <Route path="/contact" element={<Contact></Contact>
             } />
              <Route path="/fashion" element={<FashionProductUpload />} />
              <Route path="/features" element={<FeaturesProductUpload />} />
              <Route path="/abouts" element={<Abouts />} />
              <Route path="/buyerAllproduct" element={<BuyerAllProduct />} />
              <Route path="/about" element={<About></About>} />
              <Route path="/powerShop" element={<Power />} />
              <Route path="/topShop" element={<Topup />} />
              <Route path="/expertShop" element={<Expert />} />
              <Route path="/rajShop" element={<RajKonna />} />
              <Route path="/redvioletShop" element={<RedvioletShop />} />
              <Route path="/brother" element={<BrotherShop />} />
              <Route path="/allPotter" element={<AllpotterShow />} />
              <Route path="/graph" element={<GraphShow />} />
              {/* <Route path="/potterservice" element={<PotterService />} /> */}
              <Route path="/services" element={<Services />} />
              <Route path="/design" element={<DesignPotter />} />
              <Route path="/success" element={<SuccessPage />} />
              <Route path="/loveproduct" element={<LoveProduct />} />
             
              <Route path="/adminproductshow" element={<AdminAllProductShow />} />
              <Route path="/search" element={<CategorySearch />} />
              <Route path="/adminsproducts" element={<AdminProducts />} />
              {/* <Route path="/serviceshow" element={<PotterServiceShow />} /> */}
              {/* <Route path="/sellerOverview" element={<OverView />} /> */}
             
              <Route path="success/:id" element={<SuccessOrder />} />
             
              {/* <Route path="/potterupload" element={<PotterUpload />} /> */}
              <Route
              path="bookDetails/:id"
              element={<ProductDetails />}/>
              <Route
              path="servicesDetails/:id"
              element={<ServiceDetailsPart />}/>
              <Route
              path="service/:id"
              element={<PotterserviceForm />}/>
              <Route
              path="potterDetails/:id"
              element={<PotterDetails />}/>
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
              <Route path="/dashboard/adminCheck" element={<ManageOrder/>} />
              <Route path="/dashboard/sellerOverview" element={<OverView/>} />
              <Route path="/dashboard/userfeedback" element={<AdminSeeFeedback/>} />
              <Route path="/dashboard/useraddress" element={<UserAddress/>} />
              <Route path="/dashboard/getbannerpart" element={<Bannerpart/>} />
              <Route path="/dashboard/saveuseraddress" element={<SaveUserAddress/>} />
              <Route path="/dashboard/userdesignsee" element={<AdminSeeDesign/>} />
              <Route path="/dashboard/feedback" element={<Feedback/>} />
              <Route path="/dashboard/adminpendings" element={<AdminPending/>} />
              <Route path="/dashboard/buyerOrder" element={<BuyerOrder/>} />
              <Route path="/dashboard/uploadProduct" element={<ProductBuyer />} />
              <Route path="/dashboard/potterupload" element={<PotterService />} />
              <Route path="/dashboard/adminPotters" element={<AdminPotterUpload />} />
              <Route path="/dashboard/buyer" element={<BuyerDashboard />} />
              <Route path="/dashboard/adminpotterupload" element={<PotterServiceShow />} />
              <Route path="/dashboard/myorder" element={<MyOrder/>} />
              <Route path="/dashboard/userdesign" element={<UserDesignOrder/>} />
              <Route path="/dashboard/adminUpdateOrder" element={<UpdateOrder/>} />
              {/* <Route path="/dashboard/showadminsproduct" element={<ShowAdminProduct />} /> */}
              {/* <Route path="/dashboard/showadminsproduct" element={<ShowAdminProduct />} /> */}
              <Route path="/dashboard/typesadmin" element={<TypesAdmin />} />
              <Route path="/dashboard/adminpage" element={<AdminPage />} />
              <Route path="/dashboard/adminapproval" element={<AdminApprovalPage />} />
              <Route path="/dashboard/newuserdashboard" element={<NewUserDashboard />} />
              <Route path="/dashboard/rafferinfo" element={<RefferPage />} />
              <Route path="/dashboard/adminsupport" element={<AdminSeeSuport />} />
              <Route path="/dashboard/upcommingproducts" element={<Upcommingproduct />} />
              <Route path="/dashboard/userallwithdraw" element={<UserAllWithdraw />} />
              {/* <Route path="/dashboard/sellerwelcome" element={<SellerWelcome />} /> */}



              {/* <Route path="/dashboard/featuresProductUpload" element={<FeaturesProductUpload/>} /> */}
              <Route path="/dashboard/updateProduct" element={<BuyerProductUpdate />} />
              <Route path="/dashboard/customerorder" element={<OrderShow />} />
              <Route path="/dashboard/usercustomerorder" element={<UserOrders />} />
              <Route path="/dashboard/potterDataUpload" element={<PotterDataUpload />} />
              <Route path="/dashboard/users/update/:id" element={<UpdateProducts />} />
              <Route path="/dashboard/editbannerpart/:id" element={<Editbannerpart />} />
              <Route path="/dashboard/editupcommingparts/:id" element={<Editupcomming />} />
              <Route path="/dashboard/userspotter/updatepotter/:id" element={<EditPotterData />} />
              <Route path="/dashboard/updateadminproducts/:parentId/:index" element={<EditAdminProduct />} />

              <Route path="/dashboard/userSchedule/updatepotter/:id" element={<Scheduleupdate />} />
              <Route path="/dashboard/userPurchase/updatepotter/:id" element={<UpdatePurchase />} />
              <Route path="/dashboard/adminsproducts" element={<AdminProducts />} />
              <Route path="/dashboard/adminAllProduct" element={<AdminAllProductUpload />} />
              <Route path="/dashboard/overview" element={<AdminOverView />} />

              </Route>
             {/* product categories  */}
              {/* <Route path="/categories" element={<ProductsCategories/>}>
              <Route path="/categories" element={<BuyerWelcome/>} />

              </Route> */}
    
            </Routes>
          {/* </StyledApp> */}
           </ThemeProvider>
          </BrowserRouter>
        </CartContextProvider>
      </AuthProvider>
    </div>
    
  );
  
}

export  default  App;
