import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./style.css";
import RecommendSlider from "../../components/Recommended/RecommendSlider";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { makeStyles } from "@mui/styles";
import Rating from "@mui/material/Rating";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { useLocation } from "react-router-dom";

function SingleProduct() {
  const { state } = useLocation();
  const data = state.data;
  const classes = useStyles();
  const [value, setValue] = useState(2);

  return (
    <Grid
      container
      className={classes.mainDivMiddle}
      justifyContent="center"
      alignContent="flex-start"
    >
      <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
        <Box>
          <Typography variant="h5" sx={{ ml: 2.5 }}>
            Product Details
          </Typography>
          <Grid container sx={{ mt: 2, mb: 3 }}>
            <Grid item md={5} sx={{ p: 2 }}>
              <Box style={{ width: "50%" }}>
                <img src={data.item_image} width={350} alt="broken_image" />
              </Box>
            </Grid>
            <Grid item md={7} sx={{ px: 5, py: 3 }}>
              <Box style={{ display: "flex" }}>
                <Typography variant="h5">{data.item.name} </Typography>
                <FavoriteBorderIcon sx={{ ml: 2, mt: 0.5, color: "red" }} />
              </Box>

              <Box sx={{ mt: 2 }}>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">{data.item.price}</Typography>
                <Box style={{ display: "flex" }}>
                  <Typography sx={{ color: "#f47779", fontSize: "18px" }}>
                    ₹ {data.item.price - (data.item.price % 10)}
                  </Typography>
                  <Typography sx={{ color: "#8897a2", fontSize: "18px" }}>
                    &nbsp; &nbsp;<del>₹ {data.item.price}</del>
                  </Typography>
                  {/* <Typography style={{ marginLeft: "10px", display: "flex" }}>
                    <CheckCircleOutlineIcon />
                    &nbsp;
                    <span>verify In Stock Online</span>
                  </Typography> */}
                </Box>
              </Box>

              <Box style={{ display: "flex", marginTop: "1rem" }}>
                <Button
                  className={classes.itemCardbtn}
                  variant="outlined"
                  onClick={() => {}}
                >
                  Add to cart
                </Button>
                {/* <Button
                  className={classes.buyNowBtn}
                  variant="contained"
                  onClick={() => {
                    console.log("items");
                  }}
                >
                  Buy Now
                </Button> */}
              </Box>
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6">Description:-</Typography>
                <Typography>
                  <ReactReadMoreReadLess
                    charLimit={300}
                    readMoreText={"Read more ▼"}
                    readLessText={"Read less ▲"}
                    readMoreClassName="read-more-less--more"
                    readLessClassName="read-more-less--less"
                  >
                    {data.item.description
                      .replace("<p>", "")
                      .replace("</p>", "")}
                  </ReactReadMoreReadLess>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Typography variant="h5" sx={{ px: 3, my: 2.5 }}>
          Similar Products
        </Typography>
        <RecommendSlider />
      </Grid>
    </Grid>
  );
}

export default SingleProduct;

const useStyles = makeStyles((theme) => ({
  mainDivMiddle: {
    minHeight: "calc(100vh - 320px)",
    backgroundColor: "#FCFCFC",
    padding: 5,
    zIndex: -1,
    marginTop: "20px",
  },
  itemCardbtn: {
    border: "1px solid #f47779",
    color: "#f47779",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#f47779",
      border: "1px solid #f47779",
      color: "#fff",
    },
  },
  buyNowBtn: {
    margin: "0 1rem",
    padding: "0 2rem",
    backgroundColor: "#f47779",
    border: "1px solid #f47779",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#f47779",
      border: "1px solid #f47779",
      color: "#fff",
    },
  },
}));
