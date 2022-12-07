import React from "react";
import { Box, Grid, Typography, Button, Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import NoCartItemIcon from "../../assets/no-cart.png";

import { useDispatch, useSelector } from "react-redux";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  increment,
  decrement,
  removeCartProduct,
} from "../../redux/actions/cartActions";

import { makeStyles } from "@mui/styles";
import {
  Favorite,
  FavoriteOutlined,
  ResetTvRounded,
} from "@mui/icons-material";

const Cart = () => {
  const classes = useStyles();
  const params = useParams();
  console.log("prama", params);
  const dispatch = useDispatch();

  const theme = useTheme();
  const sizeXs = useMediaQuery(theme.breakpoints.down("xs"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));

  const cartProducts = useSelector((state) => state.cartReducer.cartProducts);
  const cartCount = useSelector((state) => state.cartReducer.cartCount);
  const totalAmount = useSelector((state) => state.cartReducer.totalAmount);
  console.log(cartProducts);
  return (
    <Grid
      container
      className={classes.mainDivMiddle}
      justifyContent="center"
      alignItems="flex-start"
    >
      {cartCount === 0 && (
        <Grid
          className={classes.boxStyle}
          style={{ margin: "auto" }}
          item
          xs={8}
          sm={8}
          md={6}
          lg={5}
          xl={4}
          container
        >
          <Grid
            container
            direction="column"
            alignItems="center"
            style={{ gap: "16px" }}
          >
            <Box
              component="img"
              style={{ width: "200px", height: "200px" }}
              src={NoCartItemIcon}
            />
            <Typography variant="h4" color="primary">
              Your cart is empty
            </Typography>
            <Typography>
              Looks like you haven’t added anything to your cart yet !
            </Typography>
            <Button variant="contained" className={classes.btncontainedPrimary}>
              Browse Products
            </Button>
          </Grid>
        </Grid>
      )}

      {cartCount !== 0 && (
        <Grid item xs={12} sm={12} md={12} lg={11} xl={11}>
          <Grid container>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={7} sx={{ px: 1 }}>
              <Grid container className={classes.boxStyle}>
                {cartProducts.map((item) => {
                  return (
                    <Grid
                      container
                      alignItems="flex-start"
                      className={classes.cartProductBox}
                    >
                      <Grid
                        item
                        xs={5}
                        sm={5}
                        md={3}
                        sx={{ borderRadius: 1, p: 2 }}
                        className={classes.imgProduct}
                      >
                        <Box
                          component="img"
                          src={item.img}
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </Grid>
                      <Grid item xs={5} sm={5} md={5} sx={{ pl: 3 }}>
                        <Typography variant="h4" className={classes.fontSize16}>
                          {item.name}
                        </Typography>
                        <Box sx={{ pt: 3 }}>
                          <Typography color="gray">Price</Typography>
                          <Typography>₹ {item.price}</Typography>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        md={4}
                        className={classes.moveToWishListBox}
                        container
                        flexWrap="nowrap"
                        alignItems="center"
                        justifyContent="flex-end"
                      >
                        <Typography sx={{ fontSize: 20 }} color="gray">
                          move to wishlist
                        </Typography>
                        <Divider
                          orientation="vertical"
                          variant="middle"
                          flexItem
                          sx={{ mx: 2 }}
                        />
                        <Button
                          startIcon={<DeleteOutlineIcon />}
                          className={classes.removeBtn}
                          onClick={() => {
                            dispatch(removeCartProduct(item));
                            console.log(item);
                          }}
                        ></Button>
                      </Grid>
                      <Grid
                        item
                        xs={7}
                        container
                        flexWrap="nowrap"
                        alignItems="center"
                        justifyContent="flex-end"
                        className={classes.productBtnIncDec}
                      >
                        <Button
                          disabled={item.itemCount <= 1}
                          // disabled={true}
                          variant="contained"
                          onClick={() => {
                            dispatch(decrement(item));
                          }}
                        >
                          -
                        </Button>
                        <Typography style={{ margin: "10px" }}>
                          {item.itemCount}
                        </Typography>
                        <Button
                          variant="contained"
                          onClick={() => {
                            console.log("items", item);
                            dispatch(increment(item));
                          }}
                        >
                          +
                        </Button>
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={5} sx={{ px: 1 }}>
              <Grid container className={classes.boxStyle}></Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  mainDivMiddle: {
    // minHeight: "100vh",
    minHeight: "calc(100vh - 320px)",
    backgroundColor: "#FCFCFC",
    // padding: 5,
    zIndex: -1,
    marginTop: "4px",
  },
  boxStyle: {
    marginTop: "20px",
    padding: "24px",
    border: "1px solid #e6e6e6",
    borderRadius: "8px",
    backgroundColor: "#fff",
  },
  btncontainedPrimary: {
    fontSize: "16px",
    color: "#fff",
    background: "#66B2FF",
    borderRadius: "25px",
    boxShadow: "none",
    letterSpacing: "1px",
    "&:hover": {
      boxShadow: "none",
      background: "#66B2FF",
    },
  },
  cartProductBox: {
    position: "relative",
    borderBottom: "2px solid #e6e6e6",
    padding: "0px 0px 16px 0px",
    marginBottom: "24px",
  },
  removeBtn: {
    textTransform: "none",
  },
  productBtnIncDec: {
    position: "absolute",
    margin: "16px",
    right: 0,
    bottom: "1px",
    padding: "10px",
  },
  imgProduct: {
    border: "1px solid #e6e6e6 ",
  },
  [theme.breakpoints.down("md")]: {
    moveToWishListBox: {
      order: "-1",
      justifyContent: "flex-start",
      margin: "12px 0px",
    },
    fontSize16: {
      fontSize: "12px",
      fontWeight: 500,
    },
  },
  [theme.breakpoints.down("sm")]: {
    imgProduct: {
      width: "120px",
      height: "140px",
    },
  },
  [theme.breakpoints.between("sm", "md")]: {
    productBtnIncDec: {
      justifyContent: "flex-start",
      background: "khaki",
    },
  },
}));
export default Cart;
