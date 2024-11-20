import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, NavLink, Outlet } from 'react-router-dom';
// import useFirebase from '../../../hooks/useFirebase';
import './Dashboard.css';
import { FaThLarge, FaUser, FaBookmark, FaCommentDots, FaSignOutAlt, FaTasks, FaUserShield, FaSchool } from 'react-icons/fa'


import HomeIcon from '@mui/icons-material/Home';
import useAuth from '../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Dashboard = () => {
    const { admin, userLogOut ,buyers} = useAuth()
    return (
        <div  className='dashboard' style={{
            height: 'calc(100vh)'
          }}>
            <Header></Header>
          
            <Row>
                <Col md={3}>
                    <div  style={{ 
                    height: { xs: 'calc(20vh)', sm: 'calc(30vh)', md: 'calc(100vh)' },
            overflowY: 'auto'}}>
                        <div className="logo  " >
                            {/* <h4 style={{textAlign:"left"}}><span style={{color:"#CCCCCC"}}>SARONG</span> <span style={{color:"white"}}> HELP</span></h4> */}
                        </div>
                       <div className="dashboard-menu ms-3 mt-3 me-3 px-5 py-4 "style={{height: { xs: 'calc(30vh)', sm: 'calc(40vh)', md: 'calc(95vh)' },background:"white",boxShadow: "0px 10px 22px  rgb(42 135 158 / 50%)", overflowY: 'scroll',scrollbarWidth: 'none',}}>
                       <ul className='' style={{marginLeft:"-10px"}} >
                            <li className=''>
                                <NavLink className="des fw-bold "  to={'/'} style={({ isActive }) => ({
                                    color: isActive ? "black" : "black",
                                })}><HomeIcon className='me-1' />Home</NavLink>
                            </li>
                            <li className=''>
                                <NavLink className="des fw-bold" to={`welcome`} style={({ isActive }) => ({
                                    color: isActive ? "black" : "black",
                                })}><FaThLarge className='me-1' /> Dashboard</NavLink>
                            </li>
                           
                            <li>
                                  <NavLink className="des fw-bold" to={`userProfile`} style={({ isActive }) => ({
                                      color: isActive ? "black" : "black",
                                  })}><FaUser style={{textAlign:"left"}} className='me-1' /> My Profile</NavLink>
                              </li>


                            {
                                buyers &&
                               <div>
                                 
                                <li>
                                <NavLink className="des fw-bold" to={`uploadProduct`} style={({ isActive }) => ({
                                    color: isActive ? "black" : "black",
                                })}><FaBookmark className='me-1' /> Upload Sharee</NavLink>
                            </li>
                                <li>
                                <NavLink className="des fw-bold" to={`potterDataUpload`} style={({ isActive }) => ({
                                    color: isActive ? "black" : "black",
                                })}><FaBookmark className='me-1' /> Upload Potter</NavLink>
                            </li>
                                <li>
                                <NavLink className="des fw-bold" to={`sellerOverview`} style={({ isActive }) => ({
                                    color: isActive ? "black" : "black",
                                })}><FaBookmark className='me-1' /> Seller OverView</NavLink>
                            </li>
                            <li>
                                  <NavLink className="des fw-bold" to={`feedback`} style={({ isActive }) => ({
                                      color: isActive ? "black" : "black",
                                  })}><FaBookmark className='me-1' /> Feedback</NavLink>
                              </li>
                                
                                <li>
                                <NavLink className="des fw-bold" to={`customerorder`} style={({ isActive }) => ({
                                    color: isActive ? "black" : "black",
                                })}><FaBookmark className='me-1' /> User Order</NavLink>
                            </li>
                                <li>
                                <NavLink className="des fw-bold" to={`buyerOrder`} style={({ isActive }) => ({
                                    color: isActive ? "black" : "black",
                                })}><FaBookmark className='me-1' /> Order</NavLink>
                            </li>
                               
                               
                               </div>
                            }


                         {
                            admin && 
                           <div style={{textAlign:"left"}}>

    
                            
                              {/* <li>
                                  <NavLink className="des" to={`useraddQuestion`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaBookmark className='me-1' /> Add Questions</NavLink>
                              </li> */}

                              <li>
                                <NavLink className="des fw-bold" to={`makeadmin`} style={({ isActive }) => ({
                                    color: isActive ? "black" : "black",
                                })}><FaBookmark className='me-1' /> Make Admin</NavLink>
                            </li>
                              <li>
                                <NavLink className="des fw-bold" to={`overview`} style={({ isActive }) => ({
                                    color: isActive ? "black" : "black",
                                })}><FaBookmark className='me-1' /> OverView</NavLink>
                            </li>
                              <li>
                                <NavLink className="des fw-bold" to={`userfeedback`} style={({ isActive }) => ({
                                    color: isActive ? "black" : "black",
                                })}><FaBookmark className='me-1' /> User Feedback</NavLink>
                            </li>
                             
                              
                             
                              {/* <li>
                                  <NavLink className="des fw-bold " to={`adminAllProduct`} style={({ isActive }) => ({
                                      color: isActive ? "black" : "black",
                                  })}><FaBookmark className='me-1' /> Upload Product</NavLink>
                              </li> */}
                              <li>
                                  <NavLink className="des fw-bold" to={`typesadmin`} style={({ isActive }) => ({
                                      color: isActive ? "black" : "black",
                                  })}><FaBookmark className='me-1' /> Upload Product</NavLink>
                              </li>
                             
                              <li>
                                  <NavLink className="des fw-bold" to={`adminsproducts`} style={({ isActive }) => ({
                                      color: isActive ? "black" : "black",
                                  })}><FaBookmark className='me-1' /> All Products</NavLink>
                              </li>
                             
                              <li>
                                  <NavLink className="des fw-bold " to={`adminpage`} style={({ isActive }) => ({
                                      color: isActive ? "black" : "black",
                                  })}><FaBookmark className='me-1' /> User Check</NavLink>
                              </li>
                              <li>
                                  <NavLink className="des fw-bold" to={`useraddress`} style={({ isActive }) => ({
                                      color: isActive ? "black" : "black",
                                  })}><FaBookmark className='me-1' /> User Address</NavLink>
                              </li>
                              <li>
                                  <NavLink className="des fw-bold" to={`adminsupport`} style={({ isActive }) => ({
                                      color: isActive ? "black" : "black",
                                  })}><FaBookmark className='me-1' /> Support Ticket</NavLink>
                              </li>
                              <li>
                                  <NavLink className="des fw-bold" to={`adminapproval`} style={({ isActive }) => ({
                                      color: isActive ? "black" : "black",
                                  })}><FaBookmark className='me-1' /> Withdraw Req</NavLink>
                              </li>
                              <li>
                                  <NavLink className="des fw-bold" to={`userallwithdraw`} style={({ isActive }) => ({
                                      color: isActive ? "black" : "black",
                                  })}><FaBookmark className='me-1' /> Withdraw His</NavLink>
                              </li>
                              <li>
                                  <NavLink className="des fw-bold" to={`adminUpdateOrder`} style={({ isActive }) => ({
                                      color: isActive ? "black" : "black",
                                  })}><FaTasks className='me-1' /> Update Product</NavLink>
                              </li>

                           </div>
                           
                       
                            
                            
                        }

                        {
                            !admin && !buyers &&
                            <div>
                                  <li>
                                  <NavLink className="des fw-bold" to={`feedback`} style={({ isActive }) => ({
                                      color: isActive ? "black" : "black",
                                  })}><FaBookmark className='me-1' /> Feedback</NavLink>
                              </li>
                                  <li>
                                  <NavLink className="des fw-bold" to={`myorder`} style={({ isActive }) => ({
                                      color: isActive ? "black" : "black",
                                  })}><FaBookmark className='me-1' /> My Order</NavLink>
                              </li>
                                  <li>
                                  <NavLink className="des fw-bold" to={`newuserdashboard`} style={({ isActive }) => ({
                                      color: isActive ? "black" : "black",
                                  })}><FaBookmark className='me-1' /> My Wallet</NavLink>
                              </li>
                                  <li>
                                  <NavLink className="des fw-bold" to={`saveuseraddress`} style={({ isActive }) => ({
                                      color: isActive ? "black" : "black",
                                  })}><FaBookmark className='me-1' /> Client Address</NavLink>
                              </li>
                                  <li>
                                  <NavLink className="des fw-bold" to={`rafferinfo`} style={({ isActive }) => ({
                                      color: isActive ? "black" : "black",
                                  })}><FaBookmark className='me-1' /> Refer info</NavLink>
                              </li>
                            </div>
                        }

                                <li className=''>
                                  <NavLink className="des fw-bold" to={'/'} style={({ isActive }) => ({
                                      color: isActive ? "black" : "black",
                                  })}><li onClick={userLogOut} className='mt-5' style={{fontSize:"20px"}}>
                                  <FaSignOutAlt className='me-1' /> Log Out
                              </li></NavLink>
                              </li>

                           

                           
                          
                           {/* <NavLink className="des" to={'/'}><li onClick={userLogOut} className='dashboard-logOut'>
                                <FaSignOutAlt className='me-1' /> Log in
                            </li></NavLink> */}
                           
                            
                            

                           
                            {/* </div>} */}

                           
                        </ul>
                       </div>
                    </div>
                </Col>
                <Col md={9} className='py-3 ' style={{
          height: 'calc(85vh)', 
          overflowY: 'auto', marginBottom:"50px",background:"white",boxShadow: "0px 10px 22px rgb(42 135 158 / 50%)",marginTop:"17px"
        }}>
          <Outlet style={{marginBottom:"10px"}} />
        </Col>
            </Row>
            {/* <Footer></Footer> */}
        </div >
    );
};

export default Dashboard;