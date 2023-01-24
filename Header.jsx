import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, Link } from "react-router-dom";

import {
  Box,
  styled,
  Button,
  useMediaQuery,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import logo from "../../assets/logo.png";

const sideArray = [
  { name: "Content ", to: "/" },
  { name: "Sign Up", to: "/sign" },
  { name: "FAQ", to: "/faq" },
  { name: "About Us", to: "/about" },
  { name: "My account ", to: "/myaccount" },
];

const navStyle = ({ isActive }) => {
  return {
    textDecoration: "none",
    fontWeight: 400,
    fontSize: "17px",
    transition: "0.4s",
    color: isActive ? " #6FDA44" : "black",
  };
};
const Header = () => {
  const matches = useMediaQuery("(max-width:900px)");

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = React.useCallback((event) => {
    setAnchorElNav(event.currentTarget);
  }, []);

  const handleCloseNavMenu = React.useCallback(() => {
    setAnchorElNav(null);
  }, []);

  return (
    <>
      <Box py={"10px"}>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center">
            <Link to="/">
              <Box width={{ xs: "150px", md: "200px" }}>
                <img width="100%" src={logo} alt="logo" />
              </Box>
            </Link>

            {matches ? (
              <Box
                display={{ xs: "flex", md: "none" }}
                flexGrow={1}
                justifyContent={"flex-end"}
              >
                {anchorElNav === null ? (
                  <IconButton
                    size="large"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleOpenNavMenu}
                  >
                    <MenuIcon sx={{ color: "black", fontSize: "30px" }} />
                  </IconButton>
                ) : (
                  <IconButton
                    size="large"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleCloseNavMenu}
                  >
                    <CloseIcon sx={{ color: "black", fontSize: "30px" }} />
                  </IconButton>
                )}

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                    ml: "15px",
                    "& .MuiPaper-root": {
                      backgroundColor: "#2A3539",
                      color: "white",
                      width: "80%",
                    },
                  }}
                >
                  {sideArray.map(({ name, to, target }, i) => (
                    <MenuItem key={i} onClick={handleCloseNavMenu}>
                      {target ? (
                        <MuiLink
                          href={to}
                          target={target}
                          rel="noreferrer"
                          color="inherit"
                          sx={{
                            cursor: "pointer",
                            color: "white",
                          }}
                        >
                          {name}
                        </MuiLink>
                      ) : (
                        <NavLink
                          key={to + name}
                          to={to}
                          style={{
                            textDecoration: "none",
                            fontWeight: 400,
                            fontSize: "17px",
                            transition: "0.4s",
                            color: "white",
                          }}
                        >
                          {name}
                        </NavLink>
                      )}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <Box
                display="flex"
                flexDirection={"row"}
                justifyContent="center"
                flexGrow={1}
                columnGap={"10px"}
                alignItems="center"
              >
                {sideArray.map(({ name, to }, i) => {
                  return (
                    <Box mr={4} key={i}>
                      <NavLink to={to} style={navStyle}>
                        {name}
                      </NavLink>
                    </Box>
                  );
                })}
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Header;
