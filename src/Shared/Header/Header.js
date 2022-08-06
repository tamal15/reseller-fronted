import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
<<<<<<< HEAD
import CartDrawer from '../../Components/CartDrawer';
// import useAuth from '../../ManyPages/hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
=======
import useAuth from '../../hooks/useAuth';

>>>>>>> c7f06882d3a1e5f06bef0d038fcec7427fb4eeca


import './Header.css'


const Header = () => {
    const { userLogOut, user, toggle, setToggle, handleClick, admin ,ad} = useAuth()

    console.log(user.photoURL)

<<<<<<< HEAD

=======
    const [isSticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);
>>>>>>> c7f06882d3a1e5f06bef0d038fcec7427fb4eeca

    return (

        <div className='header-area'>
            <Navbar expand="lg"  bg="red"  className={(isSticky) ? "navbar  navbar-expand-lg  bg-dark texts fixed-top" : "navbar  navbar-expand-lg "}>
                <Container>
<<<<<<< HEAD
                    {/* onClick={handleClick} */}
                    <NavLink to="/" className='logo'><span>E-Commerce</span></NavLink>
=======
                {/* onClick={handleClick} */}
                    <NavLink  to="/" className='logo'><span>E-commerce</span></NavLink>
>>>>>>> c7f06882d3a1e5f06bef0d038fcec7427fb4eeca
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* onClick={handleClick} */}
                        <Nav className="ms-auto menu d-flex align-items-center">

<<<<<<< HEAD
                            <Nav.Link as={NavLink} to="/question" className='menu-item'>Product</Nav.Link>
                            <Nav.Link as={NavLink} to="/allSyllbus" className='menu-item'>Shirt</Nav.Link>
                            <Nav.Link as={NavLink} to="/allBlogs" className='menu-item'>Pant</Nav.Link>
                            <Nav.Link as={NavLink} to="/buyer" className='menu-item'>Three-Piece</Nav.Link>


                            <Nav.Link as={NavLink} to="/allbooks" className='menu-item'>T-shirt</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className='menu-item'>Contact</Nav.Link>
                            <CartDrawer />
                            <Nav.Link className='menu-item'><img src='https://i.ibb.co/Xsnkx3L/user.png' alt="user" className="user-image " /></Nav.Link>


=======
                            <Nav.Link as={NavLink} to="/question" className='menu-item'>Shirt</Nav.Link>
                            <Nav.Link as={NavLink} to="/allSyllbus" className='menu-item'>Pant</Nav.Link>
                            <Nav.Link as={NavLink} to="/allBlogs" className='menu-item'>Three-piece</Nav.Link>
                            <Nav.Link as={NavLink} to="/allNotes" className='menu-item'>T-shirt</Nav.Link>
                          
                           
                            <Nav.Link as={NavLink} to="/contact" className='menu-item'>Contact</Nav.Link>
                           
                            {ad? <Nav.Link as={NavLink} to="/admin-dashboard/welcome" className='menu-item'>Admin Dashboard</Nav.Link> : ""}
>>>>>>> c7f06882d3a1e5f06bef0d038fcec7427fb4eeca
                        </Nav>
                         {!user.email ? <Nav.Link as={NavLink} to="/login" className='menu-item'>
                            Login
                        </Nav.Link>
                            :

                            <>
                              
                                <img onClick={() => setToggle(!toggle)} src={user.photoURL ? user.photoURL : 'https://i.ibb.co/Xsnkx3L/user.png'} alt="user" className="user-image " />
                                
                            </>
                        } 


                        {user.email && <div className={toggle ? "toggle-menu shadow-lg active" : "toggle-menu"}>
                        <Nav.Link as={NavLink} to="/dashboard/welcome" className='menu-item'>Dashboard</Nav.Link>
                            <Link style={{textDecoration:"none"}} to={'/'}><li onClick={userLogOut}>Log Out</li></Link>
                        </div>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header; 