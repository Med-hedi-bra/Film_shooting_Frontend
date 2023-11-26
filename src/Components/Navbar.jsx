import * as React from "react";
import {
  AppBar,
  MenuItem,
  Tooltip,
  Button,
  Avatar,
  Container,
  Menu,
  Typography,
  Box,
  Toolbar,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import avatar from "../assets/profile.png";
import CNCI from "../assets/cnci.png";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Services from "./Services";

function Navbar() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isAdmin, setAdmin] = React.useState(null);

  useEffect(() => {
    if (auth.user?.idUser) {
      if (auth.user?.role === "100") {
        setAdmin(false);
      } else if (auth.user?.role === "101") {
        console.log("admin");
        setAdmin(true);
      }
    }
  }, [auth.user]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    console.log(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const goToDashbored = () => {
    navigate("/dashbored");
    handleCloseNavMenu();
    handleCloseUserMenu();
  };
  const goToProfile = () => {
    navigate("/profile");
    handleCloseNavMenu();
    handleCloseUserMenu();
  };
  const goLogout = () => {
    auth.logout();
    navigate("/login");
  };
  const goToSupport=() => {
    navigate("/support");
    handleCloseNavMenu();
    handleCloseUserMenu();
  }
  const goToMessage=() => {
    navigate("/admin");
    handleCloseNavMenu();
    handleCloseUserMenu();
  }

  return (
    <AppBar position="static" style={{ backgroundColor: "#1D5D9B" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={CNCI} alt="cnci" style={{ width: 120, height: 50 }} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
              }}
            >
              {auth?.user ? (
                <div>
                  <MenuItem onClick={goToDashbored}>
                    <Typography textAlign="center">Dashbored</Typography>
                  </MenuItem>
                  <MenuItem onClick={goToProfile}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>

                  {isAdmin ? (
                    <MenuItem onClick={goToMessage}>
                      <Typography textAlign="center">Message</Typography>
                    </MenuItem>
                  ) : (
                    <MenuItem onClick={goToSupport}>
                      <Typography textAlign="center">Support</Typography>
                    </MenuItem> 
                  )}
                  
                 

                  <MenuItem onClick={goLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </div>
              ) : (
                <Typography textAlign="center"></Typography>
              )}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src={CNCI}
              alt="CNCI"
              style={{ width: "120px", height: "50px" }}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {auth?.user ? (
              <>
                <Button
                  onClick={goToDashbored}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Dashbored
                </Button>
                <Button
                  onClick={goToProfile}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Profile
                </Button>
                { isAdmin ? (
                  <Button
                  onClick={goToMessage}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Messages
                </Button>
                ):(<Button
                  onClick={goToSupport}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Support
                </Button>)

                }
                <Button
                  onClick={goLogout}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Logout
                </Button>
              </>
            ) : null}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {auth?.user ? (
                <div>
                  <MenuItem onClick={goToDashbored}>
                    <Typography textAlign="center">Dashbored</Typography>
                  </MenuItem>
                  <MenuItem onClick={goToProfile}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  {isAdmin ? (
                    <MenuItem onClick={goToMessage}>
                    <Typography textAlign="center">Messages</Typography>
                  </MenuItem>
                  ):(
                    <MenuItem onClick={goToSupport}>
                    <Typography textAlign="center">Support</Typography>
                  </MenuItem>
                  )}
                  <MenuItem onClick={goLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </div>
              ) : (
                <Typography textAlign="center"></Typography>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
