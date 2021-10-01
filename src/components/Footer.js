import React from "react";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles  from "./styles";

const Footer = () => {
  const classes = useStyles();
  
  return (
    <Box bgcolor='secondary.main' className={classes.footerContainer}>
      <Typography color='background.default' >Unlucky</Typography>
      <Typography color='background.default' >All rights reserved</Typography>
      <Box >
        <Link to='/' className={classes.footerNavigation}>Home</Link>
        <Link to='/exchanges' className={classes.footerNavigation}>Exchange</Link>
        <Link to='/news' className={classes.footerNavigation}>News</Link>
      </Box>
    </Box>
  );
};

export default Footer;
