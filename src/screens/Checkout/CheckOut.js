import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Divider,
  TextField,
  Select,
  Dialog,
  DialogTitle,
  MenuItem,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";

import { State } from "country-state-city";

import { makeStyles } from "@mui/styles";

const CheckOut = () => {
  const classes = useStyles();
  const params = useParams();
  console.log("prama", params);
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cartReducer.cartProducts);
  const cartCount = useSelector((state) => state.cartReducer.cartCount);
  const totalAmount = useSelector((state) => state.cartReducer.totalAmount);
  console.log(cartProducts);
  let indianStates = State.getStatesOfCountry("IN");

  //state to openAddress dialog
  const [openAddress, setOpenAddress] = useState(false);

  //state to open select address dialog
  const [openSelectAddress, setOpenSelectAddress] = useState(false);

  //state to store Checkout screen address details
  const [addressDetails, setAddressDetails] = useState({
    fullName: "",
    flatNo: "",
    area: "",
    pincode: "",
    state: "Select State",
    city: "Select City",
    addressType: "",
    id: "",
    phoneNumber: "",
  });

  //static array for product summary listing
  const productSummary = [
    {
      id: 1,
      description: "product desctription",
      quantity: 3,
      amount: 200,
    },
    {
      id: 2,
      description: "product desctription",
      quantity: 2,
      amount: 200,
    },
    {
      id: 3,
      description: "product desctription",
      quantity: 5,
      amount: 1000,
    },
  ];
  return (
    <Grid
      container
      className={classes.mainDivMiddle}
      justifyContent="center"
      alignItems="flex-start"
    >
      {/* when proced to checkout rending ui now */}

      <Grid item xs={12} sm={12} md={12} lg={11} xl={11}>
        <Grid container>
          <Grid item xs={12} sm={12} md={7} lg={8} xl={7} sx={{ px: 1 }}>
            <Grid container className={classes.boxStyle}>
              {/* //select payment mehtod container */}

              <Grid item xs={12} container sx={{ p: 3 }}>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    Payment method
                  </Typography>
                </Grid>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="razorPay"
                    control={<Radio />}
                    label="Razor Pay"
                  />
                  <FormControlLabel
                    value="cod"
                    control={<Radio />}
                    label="Cash on Delivery"
                  />
                </RadioGroup>
              </Grid>

              {/* saved address container */}

              <Grid item xs={12}>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h6">Address</Typography>
                  <Typography
                    onClick={() => setOpenSelectAddress(true)}
                    color="primary"
                    className={classes.selectAddress}
                  >
                    Select Address
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                xs={12}
                container
                className={classes.addressesFieldDiv}
                sx={{ py: 3 }}
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                  container
                  className={classes.fieldDiv}
                >
                  <Typography color="GrayText">Name</Typography>
                  <TextField
                    fullWidth
                    variant="standard"
                    name="fullName"
                    //   value={name}
                    autoFocus
                    //   onChange={(e) => setName(e.target.value)}
                    InputProps={{ disableUnderline: true }}
                    className={classes.addressCheckOutFields}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  container
                  className={classes.fieldDiv}
                >
                  <Typography color="GrayText">
                    Flat / House / Apartment No.
                  </Typography>
                  <TextField
                    fullWidth
                    variant="standard"
                    name="flatNo"
                    //   value={name}
                    autoFocus
                    //   onChange={(e) => setName(e.target.value)}
                    InputProps={{ disableUnderline: true }}
                    className={classes.addressCheckOutFields}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  container
                  className={classes.fieldDiv}
                >
                  <Typography color="GrayText">Address Line 1</Typography>
                  <TextField
                    fullWidth
                    variant="standard"
                    name="area"
                    //   value={name}
                    autoFocus
                    //   onChange={(e) => setName(e.target.value)}
                    InputProps={{ disableUnderline: true }}
                    className={classes.addressCheckOutFields}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  container
                  className={classes.fieldDiv}
                >
                  <Typography color="GrayText">Address Line 2</Typography>
                  <TextField
                    fullWidth
                    variant="standard"
                    name="areatwo"
                    //   value={name}
                    autoFocus
                    //   onChange={(e) => setName(e.target.value)}
                    InputProps={{ disableUnderline: true }}
                    className={classes.addressCheckOutFields}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  container
                  className={classes.fieldDiv}
                >
                  <Typography color="GrayText">State</Typography>
                  <Select
                    className={classes.seletctMuiStyle}
                    value={addressDetails.state}
                    IconComponent={KeyboardArrowDownIcon}
                    //   onChange={handleOnChange}
                    name="state"
                  >
                    <MenuItem value="Select State" disabled>
                      Select State
                    </MenuItem>
                    {indianStates.map((state) => (
                      <MenuItem value={state.name}>{state.name}</MenuItem>
                    ))}
                  </Select>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  container
                  className={classes.fieldDiv}
                >
                  <Typography color="GrayText">City</Typography>
                  <TextField
                    fullWidth
                    variant="standard"
                    name="city"
                    //   value={name}
                    autoFocus
                    //   onChange={(e) => setName(e.target.value)}
                    InputProps={{ disableUnderline: true }}
                    className={classes.addressCheckOutFields}
                  />
                </Grid>

                {/* <Grid
                    item
                    xs={12}
                    md={6}
                    container
                    className={classes.fieldDiv}
                  >
                    <Typography color="GrayText">Country</Typography>
                    <TextField
                      fullWidth
                      variant="standard"
                      name="name"
                      //   value={name}
                      autoFocus
                      //   onChange={(e) => setName(e.target.value)}
                      InputProps={{ disableUnderline: true }}
                      className={classes.addressCheckOutFields}
                    />
                  </Grid> */}

                <Grid
                  item
                  xs={12}
                  md={6}
                  container
                  className={classes.fieldDiv}
                >
                  <Typography color="GrayText">Pincode</Typography>
                  <TextField
                    fullWidth
                    variant="standard"
                    name="pincode"
                    //   value={name}
                    autoFocus
                    //   onChange={(e) => setName(e.target.value)}
                    InputProps={{ disableUnderline: true }}
                    className={classes.addressCheckOutFields}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  container
                  className={classes.fieldDiv}
                >
                  <Typography color="GrayText">Phone Number</Typography>
                  <TextField
                    fullWidth
                    variant="standard"
                    name="phoneNumber"
                    //   value={name}
                    autoFocus
                    //   onChange={(e) => setName(e.target.value)}
                    InputProps={{ disableUnderline: true }}
                    className={classes.addressCheckOutFields}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={4} xl={5} sx={{ px: 1 }}>
            <Grid container className={classes.boxStyle}>
              <Grid item xs={12}>
                <Typography variant="h6">Order Summary</Typography>
              </Grid>
              <Grid item container sx={{ py: 2 }}>
                <Grid item xs={6} md={6}>
                  <Typography sx={{ fontSize: 18 }} color="GrayText">
                    Product
                  </Typography>
                </Grid>
                <Grid item xs={3} md={3}>
                  <Typography
                    sx={{ fontSize: 18 }}
                    align="center"
                    color="GrayText"
                  >
                    Quantity
                  </Typography>
                </Grid>
                <Grid item xs={3} md={3}>
                  <Typography
                    sx={{ fontSize: 18 }}
                    align="end"
                    color="GrayText"
                  >
                    Amount
                  </Typography>
                </Grid>
              </Grid>
              {productSummary.map((product) => {
                return (
                  <Grid item container key={product.id}>
                    <Grid item xs={6} sx={{ pb: 1 }}>
                      <Typography>{product.description}</Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ pb: 1 }}>
                      <Typography align="center">
                        x{product.quantity}
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ pb: 1 }}>
                      <Typography align="end">INR {product.amount}</Typography>
                    </Grid>
                  </Grid>
                );
              })}

              <Grid
                item
                xs={12}
                container
                sx={{
                  borderTop: "1px solid #e6e6e6",
                  borderBottom: "1px solid #e6e6e6 ",
                  py: 1,
                  my: 1,
                }}
              >
                <Grid item xs={9}>
                  <Typography>Sub Total(Inclusive Taxes)</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography align="end">INR 3.00</Typography>
                </Grid>
              </Grid>

              <Grid
                item
                xs={12}
                container
                sx={{
                  borderBottom: "1px solid #e6e6e6 ",
                  py: 3,
                }}
              >
                <Grid item xs={9}>
                  <Typography>Delivery Charges</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography align="end">+ INR 3.00</Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} container sx={{ py: 3 }}>
                <Grid item xs={9}>
                  <Typography variant="h6">Total Amount</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography align="end" variant="h6">
                    +INR 300.00
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container sx={{ my: 2 }}>
              <Button fullWidth className={classes.btncontainedPrimary}>
                Proceed
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Select Address dialog start  */}
      {openSelectAddress && (
        <Dialog
          open={openSelectAddress}
          onClose={() => {
            setOpenSelectAddress(false);
          }}
        >
          <CloseIcon
            onClick={() => setOpenSelectAddress(false)}
            className={classes.closeIconStyle}
          />
          <DialogTitle>Select Address</DialogTitle>
          <Divider />
          <Grid container style={{ padding: "24px", gap: "16px" }}>
            <Grid
              item
              xs={12}
              container
              alignContent="flex-start"
              style={{ minHeight: "300px" }}
            >
              {/* if No addresses are saved */}
              <Typography>
                No existing address is available right now.
              </Typography>
              {/* if addresses are available show this */}
              <Grid
                item
                xs={12}
                container
                className={classes.savedAddCard}
                justifyContent="space-around"
              >
                <LocationOnIcon sx={{ mr: 1, fontSize: 40 }} />
                <Typography>ab road indore, Mp</Typography>
                <Checkbox
                  onClick={() => {
                    console.log("checked");
                  }}
                  disableRipple
                  className={classes.checkbx}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} mt={2} container>
              <Button
                variant="contained"
                className={classes.btnOutlinedPrimary}
                sx={{ flexGrow: 1, mr: 1 }}
                // onClick={() => setOpenAddress(true)}
              >
                Add Address
              </Button>

              <Button
                variant="contained"
                className={classes.btncontainedPrimary}
                sx={{ flexGrow: 1 }}
              >
                Continue
              </Button>
            </Grid>
          </Grid>
        </Dialog>
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
    background: theme.palette.primary.main,
    textTransform: "none",
    borderRadius: "24px",
    boxShadow: "none",
    letterSpacing: "1px",
    "&:hover": {
      boxShadow: "none",
      background: theme.palette.primary.main,
    },
  },
  btnOutlinedPrimary: {
    fontSize: "16px",
    color: "#000",
    // background: "#fff",
    background: "	#f8f8ff",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "25px",
    boxShadow: "none",
    letterSpacing: "1px",
    textTransform: "none",

    "&:hover": {
      boxShadow: "none",
      background: "#f8f8ff",
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  selectAddress: {
    textDecoration: "underLine",
    cursor: "pointer",
    "&:hover": {
      fontWeight: 500,
    },
  },
  addressCheckOutFields: {
    width: "100%",
    padding: "4px 10px",
    margin: "10px 0px",
    border: "1px solid #e6e6e6",
    borderRadius: "4px",
  },
  fieldDiv: {
    padding: "8px 16px",
  },
  seletctMuiStyle: {
    width: "100%",
    padding: "0px 10px",
    margin: "10px 0px",
    border: "1px solid #e6e6e6",
    borderRadius: "4px",
    "& fieldset": {
      border: "none",
    },
    "&.Mui-focused": {
      border: "1px solid #e6e6e6",
      color: "#000",
    },
    "&:hover": {
      // border: "1px solid grey",
    },
    "& .MuiSelect-select": {
      padding: "12px",
      color: "#8e8e8e",
    },
  },
  closeIconStyle: {
    position: "absolute",
    top: "20px",
    right: "20px",
    cursor: "pointer",
  },
  savedAddCard: {
    padding: "24px",
    border: "1px solid #e6e6e6",
    borderRadius: "8px",
    backgroundColor: "#fff",
  },
  checkbx: {
    "&:hover": {
      color: theme.palette.primary.main,
    },
    "&.Mui-checked": {
      color: theme.palette.primary.main,
    },
  },

  [theme.breakpoints.down("md")]: {
    fontSize16: {
      fontSize: "12px",
      fontWeight: 500,
    },
  },

  [theme.breakpoints.between("sm", "md")]: {
    productBtnIncDec: {
      justifyContent: "flex-start",
      //   background: "khaki",
    },
  },
}));
export default CheckOut;
