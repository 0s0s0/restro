import React from "react";

import { Grid, Box, Button, Typography } from "@mui/material";
import loginBackground from "../../assets/loginBackground.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { makeStyles } from "@mui/styles";
import RecommendSlider from "../../components/Recommended/RecommendSlider";
import Slider from "../../components/Slider";
import DATA from "../../DATA.json";
import { useDispatch, useSelector } from "react-redux";
import FoodCard from "../../components/Card/FoodCard";
import { useNavigate } from "react-router-dom";
import AddCart from "../../components/Card/AddCart";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Landing = () => {
  const dispatch = useDispatch();
  const base_url = "https://gentle-dusk-70757.herokuapp.com/";
  const product_list = "api/v1/items";
  const classes = useStyles();
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.cartReducer.products);
  const [foodData, setFoodData] = useState([]);
  // const [data, setData] = useState([]);
  const productsRedux = useSelector((state) => state.cartReducer.products);

  const foodList = async () => {
    try {
      const data = await axios.get(
        "https://gentle-dusk-70757.herokuapp.com/api/v1/items?direction=asc&search=&user_id=1",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(data);
      setFoodData(data.data);
      // console.log("====================================");
      // foodData.data && console.log(foodData.data);

      // console.log("====================================");
      // if (foodData.data) {
      //   dispatch({ type: "PRODUCTS", products: foodData.data });
      // }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    foodList();
  }, []);

  return (
    <Grid
      container
      className={classes.mainDivMiddle}
      justifyContent="center"
      alignContent="flex-start"
    >
      <Grid>
        <Slider />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={8}
        xl={8}
        // sx={{ backgroundColor: "red" }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 2, pt: 3, mt: 3, mb: 2 }}
        >
          <Typography variant="h4" className={classes.fontSize16}>
            Food that makes you say wow...
          </Typography>
          <Button sx={{ textTransform: "none" }}>View all</Button>
        </Grid>

        <Grid container display="flex" justifyContent="space-between"></Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={8}
        xl={8}
        sx={{ backgroundColor: "#faf0e6" }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 2, pt: 3 }}
        >
          <Typography variant="h4" className={classes.fontSize16}>
            New Dishes
            {/* {console.log(cartProducts)} */}
          </Typography>

          <Button
            sx={{ textTransform: "none" }}
            onClick={() => {
              navigate("/home/shops");
            }}
          >
            View all
          </Button>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          className={classes.newDishesDiv}
        >
          {productsRedux.slice(0, 8).map((item) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                lg={5}
                xl={3}
                sx={{ display: "flex", justifyContent: "center" }}
                key={item.id}
              >
                <AddCart
                  id={item.item.id}
                  name={item.item.name}
                  image={item.item_image}
                  price={item.price}
                  items={item}
                  width="180px"
                  fav={item.added_in_wishlist}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
        <Grid container>
          <Slider />
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 2, pt: 3, margin: "3rem 0" }}
        >
          <Typography variant="h4" className={classes.fontSize16}>
            Recommed for you
          </Typography>
          <Button
            sx={{ textTransform: "none" }}
            onClick={() => {
              navigate("/home/shops");
            }}
          >
            View all
          </Button>
        </Grid>

        <RecommendSlider />
      </Grid>
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
  landingImg: {
    height: "350px",
    background: `url(${loginBackground}) center/cover no-repeat`,
  },
  cardImgStyle: {
    borderRadius: "50%",
    margin: "auto",
    display: "block",
    width: "10rem",
    height: "10rem",
  },
  card2ImgStyle: {
    margin: "auto",
    display: "block",
    width: "100%",
    height: "auto",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
  },
  newDishesCard: {
    position: "relative",
    background: "#fff",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    // border: "1px solid black",
    margin: "16px",
  },
  favoriteIcon: {
    position: "absolute",
    top: "5px",
    right: "5px",
    cursor: "pointer",
    background: "#fff",
    // fill: "red",
  },
  // mediaQuery
  [theme.breakpoints.down("md")]: {
    newDishesDiv: {
      // justifyContent: "flex-start",
      justifyContent: "space-evenly",
    },
    fontSize12: {
      fontSize: "12px",
    },
    fontSize16: {
      fontSize: "20px",
    },
  },
}));
export default Landing;
