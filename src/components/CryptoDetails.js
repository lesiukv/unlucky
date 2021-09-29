import React, { useState, useEffect } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import {
  Grid,
  Typography,
  NativeSelect,
  MenuItem,
  Box,
  CardContent,
  Card,
  FormControl,
} from "@mui/material";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import useStyles from "./styles";
import { LineChart } from ".";

const CryptoDetails = () => {
  const { cryptoId } = useParams();
  const  [timePeriod, setTimePeriod]  = useState("7d");
  const { data: cryptoData, isFetching } = useGetCryptoDetailsQuery(cryptoId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId: cryptoId,
    timePeriod: timePeriod
  });
  const classes = useStyles();

  useEffect(() => {

  }, [coinHistory, timePeriod]);

  const cryptoDetails = cryptoData?.data?.coin;

  const time = ["24h", "7d", "30d", "1y", "5y"];

  if (isFetching) return "loading....";

  const economicStats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`,
    },
    { title: "Rank", value: cryptoDetails.rank },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`,
    },
    {
      title: "Market Cap",
      value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`,
    },
  ];

  const genericStats = [
    { title: "Number Of Markets", value: cryptoDetails.numberOfMarkets },
    { title: "Number Of Exchanges", value: cryptoDetails.numberOfExchanges },
    {
      title: "Aprroved Supply",
      value: cryptoDetails.approvedSupply ? "Yes" : "No",
    },
    { title: "Total Supply", value: `$ ${millify(cryptoDetails.totalSupply)}` },
    {
      title: "Circulating Supply",
      value: `$ ${millify(cryptoDetails.circulatingSupply)}`,
    },
  ];

  return (
    <Box>
      <Typography className={classes.blockTitle} variant="h4">
        {cryptoDetails.name} ({cryptoDetails.slug}) details
      </Typography>
      <FormControl>
        <NativeSelect
          className={classes.searchBarContainer}
          onChange={(e) => setTimePeriod(e.currentTarget.value)}
          defaultValue="7d"
          id="select-timespan"
          label="Time"
        >
          {time.map((timeEl, index) => (
            <option key={index}>{timeEl}</option>
          ))}
        </NativeSelect>
      </FormControl>
      <Grid container spacing={2} className={classes.cryptoCurrencyContainer}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Value of {cryptoDetails.name}
              </Typography>
              {economicStats.map(({ title, value }, index) => (
                <div className={classes.cryptoDetails} key={index}>
                  <Typography>{title}:</Typography>
                  <Typography>{value}</Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Other stats about {cryptoDetails.name}
              </Typography>
              {genericStats.map(({ title, value }, index) => (
                <div className={classes.cryptoDetails} key={index}>
                  <Typography>{title}:</Typography>
                  <Typography>{value}</Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <LineChart
          coinHistory={coinHistory}
          currentPrice={millify(cryptoDetails.price)}
          coinName={cryptoDetails.name}
        />
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">What is {cryptoDetails.name}</Typography>
              {HTMLReactParser(cryptoDetails.description)}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">{cryptoDetails.name} Links</Typography>
              {cryptoDetails?.links.map(({ name, type, url }, index) => (
                <div className={classes.cryptoDetails} key={index}>
                  <Typography>{type}:</Typography>
                  <Typography>
                    <a href={url}>{name}</a>
                  </Typography>
                </div>
              ))}
              {cryptoDetails?.socials.map(({ name, type, url }, index) => (
                <div className={classes.cryptoDetails} key={index}>
                  <Typography>{type}:</Typography>
                  <Typography>
                    <a href={url}>{name}</a>
                  </Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CryptoDetails;
