import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { AddOutlined, RemoveOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import {
  addToCart,
  decrement,
  increment,
} from "../../redux/actions/cartActions";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  browserImg: {
    height: "auto",
    // width: width,
    padding: "10px 16px",
    backgroundColor: "hsla(0,0%,100%,.66)",
    border: "1px solid #dfe3e6",
    boxShadow: "rgb(33 33 33 / 6%)",
    borderRadius: "8px",
    cursor: "pointer",
    "&:hover": {
      boxShadow:
        "rgb(33 33 33 / 6%) 0px 3px 4px, rgb(33 33 33 / 4%) 0px 3px 3px, rgb(33 33 33 / 8%) 0px 1px 8px",
    },
  },
  browser_name: {
    textAlign: "left",
    fontSize: "1rem",
    fontWeight: "600",
    display: "flex",
    justifyContent: "center",
  },
  brower_price: {
    fontSize: "14px",
    color: "#f47779",
    fontWeight: "600",
    display: "flex",
    justifyContent: "center",
  },
  addCartBtn: {
    "&.css-y7gai-MuiButtonBase-root-MuiButton-root": {
      width: "130px",
      border: "1px solid #f47779",
      borderRadius: "8px",
    },
  },
}));

function AddCart({ fav, id, name, price, image, items, width }) {
  const base_url = "https://gentle-dusk-70757.herokuapp.com/";
  const product_list = "api/v1/items";
  const cartProducts = useSelector((state) => state.cartReducer.cartProducts);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [favProducts, setFavProducts] = useState([]);
  const [favIconColor, setFavIconColor] = useState(false);

  const handleFav = async (id) => {
    try {
      if (fav === false) {
        let add_fav = await axios.post(
          "https://gentle-dusk-70757.herokuapp.com/api/v1/favourites/add?direction=asc&search=",
          // "https://gentle-dusk-70757.herokuapp.com/api/v1/favourites/list?direction=asc&search=&user_id=1",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json; charset=utf-8",
            },
            user_id: "1",
            item_id: id,
          }
        );
      } else {
        const remove_fav = await axios.post(
          "https://gentle-dusk-70757.herokuapp.com/api/v1/favourites/remove?item_id=1&favourite_id=3",
          // "https://gentle-dusk-70757.herokuapp.com/api/v1/favourites/list?direction=asc&search=&user_id=1",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json; charset=utf-8",
            },
            user_id: "1",
            item_id: id,
          }
        );
      }
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  return (
    <Box style={{ margin: "20px 0" }}>
      <Box key={id} className={classes.browserImg} style={{ width: width }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={() => handleFav(id)}
            aria-label="add to favorites"
          >
            {console.log(fav)}
            {fav === true ? (
              <FavoriteIcon
                sx={{
                  color: "red",
                }}
              />
            ) : (
              <FavoriteBorderIcon sx={{ color: "red" }} />
            )}
          </IconButton>
        </Box>

        {image ? (
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px 5px",
            }}
          >
            <img
              src={image}
              alt="image_slider"
              height={150}
              width={150}
              style={{ borderRadius: "50%" }}
            />
          </Box>
        ) : (
          ""
        )}
        {name ? (
          <Typography className={classes.browser_name}>
            {name.substring(0, 20)}
          </Typography>
        ) : (
          ""
        )}
        <Typography className={classes.brower_price}>Rs.{price}</Typography>
        <Box
          disableSpacing
          sx={{
            border: "1px solid #f47779",
            borderRadius: "8px",
            display: "flex",
            padding: "0 5px",
            justifyContent: "center",
            margin: "10px 0",
            "&:hover": {
              backgroundColor: " #f47779 !important",
              color: "white",
            },
          }}
        >
          <IconButton
            aria-label="share"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "unset !important",
              },
            }}
          >
            <RemoveOutlined
              disabled
              onClick={(e) => {
                items.itemCount === 0
                  ? alert("already 0")
                  : dispatch(decrement(items));
                // console.log(items, "....................after add to items");
              }}
              sx={{ mr: 3 }}
            />

            <Button
              // onClick={() => {

              // }}
              sx={{
                padding: 0,
                color: "teal",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "unset !important",
                  color: "#fff",
                },
              }}
            >
              {`${items.itemCount ? items.itemCount : "Add item"} `}
              {console.log(items)}
            </Button>
            <AddOutlined
              onClick={() => {
                items.itemCount === 0
                  ? dispatch(addToCart(items))
                  : dispatch(increment(items));
                console.log(items, "....................after add to items");
              }}
              sx={{
                ml: 3,
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default AddCart;
