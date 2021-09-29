import React from "react";
import {
  Typography,
  Grid,
  CircularProgress,
  Card,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import { CryptoCurrencies, News } from "../components";

const HomePage = () => {
  const classes = useStyles();
  const { data, isFetching } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;

  if (isFetching) return <CircularProgress />;

  return (
    <>
      <Typography variant="h4" className={classes.blockTitle}>
        Global Crypto Stats
      </Typography>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item md={3} xs={6}>
          <Card>
            <CardContent>
              <Typography>Total Cryptocrurencies</Typography>
              <Typography>{millify(globalStats.total)}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={2} xs={6}>
          <Card>
            <CardContent>
              <Typography>Total Market Cap</Typography>
              <Typography>{millify(globalStats.totalMarketCap)}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={2} xs={6}>
          <Card>
            <CardContent>
              <Typography>Total Markets</Typography>
              <Typography>{millify(globalStats.totalMarkets)}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={2} xs={6}>
          <Card>
            <CardContent>
              <Typography>Total Exchanges</Typography>
              <Typography>{millify(globalStats.totalExchanges)}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3} xs={6}>
          <Card>
            <CardContent>
              <Typography>Total 24h Volume</Typography>
              <Typography>{millify(globalStats.total24hVolume)}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div className={`${classes.showMore} ${classes.blockTitle}`}>
        <Typography variant="h5">
          Top 10 Cryptocurrencies in the World
        </Typography>
        <Typography variant="h5">
          {" "}
          <Link to="/cryptocurrencies">Show more</Link>
        </Typography>
      </div>
      <CryptoCurrencies simplified />
      <div className={`${classes.showMore} ${classes.blockTitle}`}>
        <Typography variant="h5">Latest crypto news</Typography>
        <Typography variant="h5">
          {" "}
          <Link to="/news">Show more</Link>
        </Typography>
      </div>
      <News simplified />
    </>
  );
};

export default HomePage;
