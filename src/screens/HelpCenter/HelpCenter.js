import React from "react";

import { Grid, Divider, Typography } from "@mui/material";

import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Outlet } from "react-router-dom";

const HelpCenter = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  let activeStyle = {
    backgroundColor: "#f8f8ff",
    borderBottom: "2px solid #66B2FF",
    color: "#66B2FF",
  };

  return (
    <Grid
      container
      className={classes.mainDivMiddle}
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={9}
        lg={9}
        xl={9}
        container
        // style={{ gap: "24px" }}
        alignItems="flex-start"
      >
        <Grid container>
          <Typography variant="h4" className={classes.headingHelpCenter}>
            Help Center
          </Typography>
        </Grid>

        {matches && (
          <Grid item xs={3} className={classes.helpCenterBox}>
            <Grid container direction="column">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className={classes.nav}
                end
                to="/home/help-center"
              >
                <Grid item className={classes.leftboxNavStyle}>
                  <Typography>Privacy Policy</Typography>
                </Grid>
              </NavLink>
              <Divider />

              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className={classes.nav}
                to="terms-condition"
              >
                <Grid item className={classes.leftboxNavStyle}>
                  <Typography> Terms & Conditons</Typography>
                </Grid>
              </NavLink>

              <Divider />

              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className={classes.nav}
                to="others"
              >
                <Grid item className={classes.leftboxNavStyle}>
                  <Typography>Content Policy</Typography>
                </Grid>
              </NavLink>

              <Divider />

              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className={classes.nav}
                to="others"
              >
                <Grid item className={classes.leftboxNavStyle}>
                  <Typography>Others</Typography>
                </Grid>
              </NavLink>
            </Grid>
          </Grid>
        )}

        <Grid
          item
          xs={12}
          sm={12}
          md={9}
          lg={9}
          xl={9}
          container
          alignContent="flex-start"
          alignItems="flex-start"
          className={classes.rightDivHelpCenter}
        >
          <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  mainDivMiddle: {
    minHeight: "calc(100vh - 320px)",
    backgroundColor: "#FCFCFC",
    padding: 5,
    zIndex: -1,
    marginTop: "4px",
  },
  helpCenterBox: {
    padding: "24px",
    border: "1px solid #e6e6e6",
    borderRadius: "8px",
    backgroundColor: "#fff",
    width: "100%",
  },
  nav: {
    textDecoration: "none",
    color: "#000",
  },
  activated: {
    backgroundColor: "#f8f8ff",
    borderBottom: "2px solid #66B2FF",
    color: "#66B2FF",
  },

  leftboxNavStyle: {
    padding: "30px 0px 20px 20px",
  },
  rightDivHelpCenter: {
    paddingLeft: "24px",
  },
  headingHelpCenter: {
    padding: "16px 0px",
  },
  [theme.breakpoints.down("md")]: {
    rightDivHelpCenter: {
      paddingRight: "24px",
    },
    headingHelpCenter: {
      padding: "16px 24px",
    },
  },
}));

export default HelpCenter;
