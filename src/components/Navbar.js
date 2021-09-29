import React, { useState } from "react";
import {
  AppBar,
  MenuItem,
  Button,
  Typography,
  Menu,
  Container,
  Box,
  Toolbar,
  IconButton,
} from "@mui/material/";
import { Link } from "react-router-dom";
import useStyles from "./styles.js";
import MoreIcon from "@mui/icons-material/MoreVert";

const Navbar = () => {
  const classes = useStyles();
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleOpen = (e) => {
    setMenuAnchor(e.currentTarget);
  };

  const handleClose = () => {
    setMenuAnchor(null);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={menuAnchor}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id="mobile-menu"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menuAnchor)}
      onClose={handleClose}
    >
      <MenuItem>
        <Button>
          <Link to="/">Home</Link>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button>
          <Link to="/news">News</Link>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button>
          <Link to="/exchange">Exchange</Link>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box className={classes.box}>
        <AppBar>
          <Container>
            <Toolbar className={classes.navigationContainer}>
              <Link to="/">
                <Typography>Unlucky</Typography>
              </Link>
              <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <Button>
                  <Link to="/">Home</Link>
                </Button>
                <Button>
                  <Link to="/news">News</Link>
                </Button>
                <Button>
                  <Link to="/exchange">Exchange</Link>
                </Button>
                <Button>
                  <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Button>
              </Box>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="mobile-menu"
                aria-haspopup="true"
                onClick={handleOpen}
                sx={{ display: { xs: "flex", sm: "none" } }}
              >
                <MoreIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <div className={classes.offset} />
      {renderMobileMenu}
    </>
  );
};

export default Navbar;
