import React from "react";
import { Box, Grid, Button, Typography } from "@mui/material";

import {
  StyledGridMiddle,
  StyledGridShop,
} from "../../components/StyledComponents/StyledComponents ";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@mui/styles";
import * as CONST from "../../utils/Constants";

import burger from "../../assets/burger.jpg";
import product_img from "../../assets/product_img.jpg";
import {
  addToCart,
  decrement,
  increment,
} from "../../redux/actions/cartActions";
import { useEffect } from "react";
import DATA from "../../DATA.json";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import { useStyles } from "../../assets/css/ShopStyle";
import AddCart from "../../components/Card/AddCart";
import axios from "axios";
import { useState } from "react";
// const products = [
//   { id: 0, title: "noodles", price: 200, itemCount: 0 },
//   { id: 1, title: "maggi", price: 200, itemCount: 0 },
//   { id: 2, title: "juice", price: 80, itemCount: 0 },
//   { id: 3, title: "burger", price: 80, itemCount: 0 },
//   { id: 4, title: "pizza", price: 80, itemCount: 0 },
// ];

const Shops = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [category, setCategory] = useState([]);
  const categoryList = async () => {
    try {
      const category_data = await axios.get(
        "https://gentle-dusk-70757.herokuapp.com/api/v1/categories",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(data);
      setCategory(category_data.data.data);
      category && console.log("---------------------<", category);
      // setFoodData(data.data);
      // console.log("====================================");

      // console.log("====================================");
      // if (foodData.data) {
      //   dispatch({ type: "PRODUCTS", products: foodData.data });
      // }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    categoryList();
  }, []);
  const productsRedux = useSelector((state) => state.cartReducer.products);
  return (
    <Box sx={{ width: "100%" }}>
      <Box className={classes.overlay_box}>
        <img src={product_img} className={classes.overlay_img} />
        <Typography className={classes.overlay_txt}>Products</Typography>
      </Box>

      <Box
        sx={{
          padding: "40px 0",
        }}
      >
        <Box className={classes.product_box}>
          <Box className={classes.product_SubBox}>
            <Typography className={classes.product_txt}>
              Our Product List
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={4} md={3}>
              <Box className={classes.product_gridBox}>
                <Typography className={classes.product_gridTxt}>
                  Filter
                </Typography>
                <List className={classes.product_list}>
                  {category &&
                    category.map((value) => {
                      const labelId = `checkbox-list-label-${value}`;
                      return (
                        <ListItem key={value} disablePadding>
                          <ListItemButton role={undefined} dense>
                            <ListItemIcon>
                              <Checkbox
                                edge="start"
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ "aria-labelledby": labelId }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              id={value.category.id}
                              primary={value.category.name}
                            />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                </List>
              </Box>
            </Grid>
            <Grid item xs={8} md={9}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  {productsRedux.map((item) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        lg={4}
                        md={6}
                        sx={{ marginTop: "-20px" }}
                      >
                        {console.log(item)}
                        <AddCart
                          id={item.item.id}
                          name={item.item.name}
                          image={item.item_image}
                          price={item.item.price}
                          items={item}
                          width="230px"
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Shops;
