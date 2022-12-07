import React from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Badge,
  Avatar,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/logo.png";
import ShoppingCart from "../../assets/shoppingCart.png";
import { NavLink } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { useSelector } from "react-redux";
import AlertDialog from "../../components/Dialogue/AlertDialog";

import { makeStyles } from "@mui/styles";
// import useCustomDispatch from "../../hooks/useDispatch";

const Navbar = () => {
  const classes = useStyles();
  const cartCount = useSelector((state) => state.cartReducer.cartCount);
  const whishListCount = useSelector(
    (state) => state.cartReducer.whishListCount
  );
  // const userDetails = useSelector(
  //   (state) => state.userReducer.userProfileData.data
  // );

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  // const matches = useMediaQuery(theme.breakpoints.down("md"));

  // const [data, setData] = useState([]);
  // const successcallback = (res) => {
  //   console.log("successcallback....", res);
  //   setData(res);
  // };

  // useCustomDispatch("COUNTRIES_API_SAGA", successcallback);

  // const [isFavourite, setIsFavourite] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [open, setOpen] = useState(false);
  // const [drawerPosition, setDrawerPosition] = {({
  //   top :
  // })
  return (
    <>
      <Grid container alignItems="center" className={classes.navbar}>
        <Grid item xs={4}>
          <Grid container flexWrap="nowrap">
            <NavLink to="/home">
              <Box
                component="img"
                src={logo}
                alt="logo"
                style={{
                  width: "12.5rem",
                  height: "2.5rem",
                }}
              />
            </NavLink>
            {!matches && (
              <Grid
                item
                // xs={4}
                container
                // justifyContent="space-evenly"
                alignItems="center"
                // flexWrap="nowrap"
                style={{
                  minWidth: "300px",
                }}
              >
                <NavLink
                  className={classes.nav}
                  style={({ isActive }) =>
                    isActive ? { color: "blue" } : undefined
                  }
                  to="shops"
                >
                  <Typography sx={{ ml: 1.5 }}>Shops</Typography>
                </NavLink>
                <NavLink className={classes.nav} to="new-arrivals">
                  <Typography sx={{ ml: 1.5 }}>New Arivals</Typography>
                </NavLink>
                {/* <NavLink className={classes.nav} to="new-arrivals">
                  <Typography sx={{ ml: 1.5 }}>Another</Typography>
                </NavLink> */}
              </Grid>
            )}
          </Grid>
        </Grid>

        {/* {!matches && <Box style={{ flexGrow: 1 }} />} */}
        {matches && (
          <>
            <MenuIcon
              onClick={() => setOpenMenu(true)}
              className={classes.menu}
            />
          </>
        )}

        <Grid item xs={5} style={{ marginLeft: "auto" }}>
          <Grid container justifyContent="flex-end" flexWrap="nowrap">
            <Grid
              item
              xs={7}
              container
              justifyContent="space-between"
              alignItems="center"
              wrap="nowrap"
              style={{
                border: "1px solid #d7d9db",
                // ml: "auto",
                borderRadius: "8px",
                padding: "4px 0px",
              }}
            >
              <TextField
                placeholder="Search..."
                style={{
                  paddingLeft: "16px",
                }}
                value={searchItem}
                variant="standard"
                onChange={(e) => setSearchItem(e.target.value)}
                InputProps={{ disableUnderline: true }}
              />

              <SearchIcon
                style={{
                  marginRight: "8px",
                  fontSize: 20,
                  color: "gray",
                }}
              />
            </Grid>

            {!matches && (
              <Grid
                item
                xs={4}
                container
                alignItems="center"
                // justifyContent="space-evenly"
                style={{
                  minWidth: "200px",
                  paddingLeft: "30px",
                  // width: "180px",
                  gap: "30px",
                  // background: "khaki",
                }}
              >
                <NavLink to="/home/profile/wish-list">
                  <Badge
                    className={classes.badgeStyle}
                    badgeContent={whishListCount}
                  >
                    <FavoriteBorderIcon
                      style={{
                        color: "black",
                        fontSize: 30,
                      }}
                    />
                  </Badge>
                </NavLink>

                <NavLink to="cart">
                  <Badge
                    className={classes.badgeStyle}
                    badgeContent={cartCount}
                  >
                    <Box
                      component="img"
                      src={ShoppingCart}
                      alt="login"
                      style={{ width: "30px" }}
                    />
                  </Badge>
                </NavLink>

                <NavLink
                  className={classes.nav}
                  to="profile"
                  style={{ marginLeft: "8px" }}
                >
                  {/* <TypographyTextNormal>Login/Logout</TypographyTextNormal> */}
                  <Avatar className={classes.avatar}>
                    {/* {() => {
                // let name = userDetails.full_name.split(" ")
                let myName = "Owais Khan";
                let firstTwo = myName.split(" ");
                firstTwo = firstTwo[0].charAt(0) + firstTwo[1].charAt(0);
                return firstTwo;
              }} */}
                    MO
                    {/* {userDetails?.full_name} */}
                  </Avatar>
                </NavLink>
              </Grid>
            )}
          </Grid>
        </Grid>

        <Drawer
          className={classes.drawerLayout}
          anchor={"left"}
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          onClick={() => setOpenMenu(false)}
        >
          <Grid container direction="column" sx={{ p: 3 }}>
            <Box
              component="img"
              src={logo}
              alt="logo"
              className={classes.menuImg}
            />
            <NavLink to="/home" className={classes.nav}>
              <Typography className={classes.menuItemsStyle}>Home</Typography>
            </NavLink>
            <NavLink to="/home/shops" className={classes.nav}>
              <Typography className={classes.menuItemsStyle}>Shops</Typography>
            </NavLink>
            <NavLink to="/home/new-arrivals" className={classes.nav}>
              <Typography className={classes.menuItemsStyle}>
                New arrivals
              </Typography>
            </NavLink>
            <Divider sx={{ my: 0.5 }} />
            <NavLink to="/home/profile/wish-list" className={classes.nav}>
              <Typography className={classes.menuItemsStyle}>
                Favourites
              </Typography>
            </NavLink>
            <NavLink to="/home/cart" className={classes.nav}>
              <Badge className={classes.badgeStyle} badgeContent={cartCount}>
                <Typography className={classes.menuItemsStyle}>Cart</Typography>
              </Badge>
            </NavLink>
            <NavLink to="/home/profile" className={classes.nav}>
              <Typography className={classes.menuItemsStyle}>
                Profile
              </Typography>
            </NavLink>

            <Divider
              sx={{
                my: 0.5,
              }}
            />

            <NavLink to="/home/profile/my-order" className={classes.nav}>
              <Typography className={classes.menuItemsStyle}>
                My Orders
              </Typography>
            </NavLink>
            <NavLink to="/home/profile/addressess" className={classes.nav}>
              <Typography className={classes.menuItemsStyle}>
                {" "}
                Saved Addressess
              </Typography>
            </NavLink>
            <NavLink to="/home/profile/notification" className={classes.nav}>
              <Typography className={classes.menuItemsStyle}>
                Notifications
              </Typography>
            </NavLink>
            <NavLink to="/home/help-center" className={classes.nav}>
              <Typography className={classes.menuItemsStyle}>
                Help Center
              </Typography>
            </NavLink>

            <Divider sx={{ my: 0.5 }} />

            <Typography
              onClick={() => setOpen(!open)}
              className={classes.menuItemsStyle}
              sx={{ cursor: "pointer" }}
            >
              Log Out
            </Typography>
            <Divider sx={{ my: 0.5 }} />
          </Grid>
        </Drawer>

        {open && (
          <AlertDialog
            dialogState={open}
            // dialogFun={myFun}
            dialogFun={() => setOpen(false)}
            title="Log out"
            description=" Are you sure you want to logout from Pro Restaurant ?"
            actionCancel="Cancel"
            actionLogOut="LogOut"
          />
        )}
      </Grid>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  navbar: {
    height: "65px",
    // minHeight: "65px",
    boxShadow: "0px 0px 4px #000",
    zIndex: 10,
    padding: "0px 5%",
  },
  badgeStyle: {
    "& .MuiBadge-badge": {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
    },
  },
  nav: {
    textDecoration: "none",
    color: "#000",
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  menu: {
    color: theme.palette.primary.main,
    fontSize: "2.5rem",
    cursor: "pointer",
    order: -1,
  },
  drawerLayout: {
    "& .MuiPaper-root": {
      minHeight: "50vh",
      minWidth: "40vw",
    },
  },
  menuItemsStyle: {
    padding: "8px 0px",
  },
  menuImg: {
    width: "12.5rem",
    height: "2.5rem",
    margin: "0px 0px 8px -18px",
  },
}));

export default Navbar;
