import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import {
  Card,
  Grid,
  Input,
  CardContent,
  Typography,
  Avatar,
  Box,
  CircularProgress,
} from "@mui/material";
import { useGetCryptosQuery } from "../services/cryptoApi";
import useStyles from "./styles";

const CryptoCurrencies = ({ simplified }) => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery(
    simplified ? 9 : 100
  );
  const [cryptos, setCryptos] = useState([]);
  const [searchCrypto, setSearchCrypto] = useState("");
  const classes = useStyles();

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchCrypto.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchCrypto]);

  if (isFetching) return "Loading...";

  return (
    <>
      <Box
        className={classes.searchBarContainer}
        display={simplified ? "none" : "flex"}
      >
        <Input
          placeholder="Search Cryptocurrency"
          className={classes.searchBarInput}
          onChange={(e) => setSearchCrypto(e.target.value)}
        />
      </Box>
      <Grid className={classes.cryptoCurrencyContainer} container spacing={2}>
        {cryptos?.map((crypto) => (
          <Grid item md={4} xs={12} key={crypto.id}>
            <Link to={`/cryptodetails/${crypto.id}`}>
              <Card>
                <CardContent>
                  <div className={classes.cardTitle}>
                    <Typography>{`${crypto.rank}. ${crypto.name}`}</Typography>
                    <Avatar src={crypto.iconUrl} />
                  </div>
                  <p>Price: {millify(crypto.price)}</p>
                  <p>Market Cap: {millify(crypto.marketCap)}</p>
                  <p>Daily Change {millify(crypto.change)} %</p>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CryptoCurrencies;
