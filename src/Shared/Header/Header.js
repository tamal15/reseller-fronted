import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
// import useAuth from '../../ManyPages/hooks/useAuth';
import { FaSearch } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import CartDrawer from "../../Components/CartDrawer";
import "./Header.css";
import { TiGroup } from "react-icons/ti";
import { CgMenuGridR } from "react-icons/cg";
import Dropdown from "react-bootstrap/Dropdown";
import styled, { ThemeProvider } from "styled-components";
import FavoriteIcon from '@mui/icons-material/Favorite';

import {
  darkTheme,
  GlobalStyle,
  GlobalTextStyle,
  LightTheme,
} from "../../Pages/Home/Mood/Theme";
import Home from "../../Pages/Home/Home";
import Login from "../../Login/Login/Login";
// import { darkTheme, LightTheme,GlobalStyle } from './Theme';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { FaHome } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
const StyledApp = styled.div`
  color: ${(props) => props.theme.color};
`;
const Header = () => {
  const { userLogOut, user, toggle, setToggle, handleClick, admin, ad } =
    useAuth();

  console.log(user.photoURL);

  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="header-area">
      <Navbar
        expand="lg"
        bg="red"
        className={
          isSticky
            ? "navbar  navbar-expand-lg  background-design texts fixed-top"
            : "navbar  navbar-expand-lg "
        }
      >
        <Container>
          {/* onClick={handleClick} */}
          <NavLink to="/" className="logo">
          <img style={{height:"50px", width:"80px"}} src="https://i.ibb.co.com/ScvD62W/r444-removebg-preview.png"/>
            {/* <span>RESELLER</span> */}
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* onClick={handleClick} */}
            <Nav className="ms-auto menu d-flex align-items-center">
              {/* </Nav> */}
              <Nav.Link
                as={NavLink}
                to="/search"
                className="menu-item"
              >
                <FaSearch style={{fontSize:"27px"}} />
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/"
                className="menu-item"
              >
                <FaHome style={{fontSize:"27px"}} />
              </Nav.Link>
              {/* <Nav.Link
                as={NavLink}
                to="/updateCollection"
                className="menu-item"
              >
                Collection
              </Nav.Link> */}
              <Nav.Link
                as={NavLink}
                to="/firstProfile"
                className="menu-item"
               
              >
              <TiGroup  style={{fontSize:"27px"}} />

              </Nav.Link>
              <Nav.Link
  as={NavLink}
  to="/loveproduct"
  className="menu-item"
  style={{ color: "white" }}
>
  <FavoriteIcon style={{ fontSize: "27px", color: "white" }} />
</Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/adminproductshow"
                className="menu-item"
               
              >
              <CgMenuGridR style={{fontSize:"27px"}}/>

              </Nav.Link>

              {/* <Dropdown>
                <Dropdown.Toggle className="drops" id="dropdown-basic">
                  Product
                </Dropdown.Toggle>

                <Dropdown.Menu className="drops-menu">
                  <Dropdown.Item
                    className="down-color"
                    href="/adminproductshow"
                  >
                    SHARE
                  </Dropdown.Item>
                  <Dropdown.Item className="down-color" href="/services">
                    INDUSTRY
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}

            
              {/* <Nav.Link as={NavLink} to="/about" className="menu-item">
                About
              </Nav.Link> */}

              {/* notification start  */}

              {/* notification end  */}

              {/* <Nav.Link as={NavLink} to="/contact" className="menu-item">
                Contact
              </Nav.Link> */}
              <CartDrawer />

              <ThemeProvider theme={theme === "light" ? LightTheme : darkTheme}>
                <GlobalStyle></GlobalStyle>
                {/* <GlobalTextStyle></GlobalTextStyle> */}
                <StyledApp style={{ color: "white" }}>
                  {/* <DarkModeIcon onClick={()=>themeToggler()}></DarkModeIcon>      */}
                  <button
                    style={{
                      background: "#113350",
                      color: "white",
                      border: "1px solid #113350",
                    }}
                    onClick={() => themeToggler()}
                  >
                    <DarkModeIcon style={{ fontSize: "30px" }}></DarkModeIcon>
                  </button>
                </StyledApp>
              </ThemeProvider>

              {ad ? (
                <Nav.Link
                  as={NavLink}
                  to="/admin-dashboard/welcome"
                  className="menu-item"
                >
                  Admin Dashboard
                </Nav.Link>
              ) : (
                ""
              )}
            </Nav>
            {!user.email ? (
              <Nav.Link as={NavLink} to="/login" className="menu-item">
                Login
              </Nav.Link>
            ) : (
              <>
                <img
                  onClick={() => setToggle(!toggle)}
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://i.ibb.co/Xsnkx3L/user.png"
                  }
                  alt="user"
                  className="user-image "
                />
              </>
            )}

            {user.email && (
              <div
                className={
                  toggle ? "toggle-menu shadow-lg active" : "toggle-menu"
                }
              >
                <Nav.Link
                  as={NavLink}
                  to="/dashboard/welcome"
                  className="menu-item"
                >
                  Dashboard
                </Nav.Link>
                <Link style={{ textDecoration: "none" }} to={"/"}>
                  <li onClick={userLogOut}>Log Out</li>
                </Link>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
