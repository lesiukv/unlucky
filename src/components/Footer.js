import React from "react";
import { Typography, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles  from "./styles";
import theme from "../theme";

const Footer = () => {
  const classes = useStyles();
  
  return (
    <Box bgcolor='secondary.main' className={classes.footerContainer}>
      <Typography color='background.default' >Unlucky</Typography>
      <Typography color='background.default' >All rights reserved</Typography>
      <Box >
        <Link to='/' className={classes.footerNavigation}>Home</Link>
        <Link to='/exchange' className={classes.footerNavigation}>Exchange</Link>
        <Link to='/news' className={classes.footerNavigation}>News</Link>
      </Box>
    </Box>
  );
};

export default Footer;
