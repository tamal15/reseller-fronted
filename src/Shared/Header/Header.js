import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
// import useAuth from '../../ManyPages/hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';


import './Header.css'


const Header = () => {
    // const { userLogOut, user, toggle, setToggle, handleClick, admin ,ad} = useAuth()

    // console.log(user.photoURL)

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

    return (

        <div className='header-area'>
            <Navbar expand="lg"  bg="red"  className={(isSticky) ? "navbar  navbar-expand-lg  bg-dark texts fixed-top" : "navbar  navbar-expand-lg "}>
                <Container>
                {/* onClick={handleClick} */}
                    <NavLink  to="/" className='logo'><span>Edu Desk</span></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    {/* onClick={handleClick} */}
                        <Nav  className="ms-auto menu d-flex align-items-center">

                            <Nav.Link as={NavLink} to="/question" className='menu-item'>Product</Nav.Link>
                            <Nav.Link as={NavLink} to="/allSyllbus" className='menu-item'>Shirt</Nav.Link>
                            <Nav.Link as={NavLink} to="/allBlogs" className='menu-item'>Pant</Nav.Link>
                            <Nav.Link as={NavLink} to="/allNotes" className='menu-item'>Three-Piece</Nav.Link>
                         
                            
                            <Nav.Link as={NavLink} to="/allbooks" className='menu-item'>T-shirt</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className='menu-item'>Contact</Nav.Link>
                            <Nav.Link className='menu-item'><img src= 'https://i.ibb.co/Xsnkx3L/user.png' alt="user" className="user-image " /></Nav.Link>
                           
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header; 