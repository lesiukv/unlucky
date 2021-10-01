import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Avatar,
  Card,
  CardContent,
  FormControl,
  NativeSelect,
} from "@mui/material";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import useStyles from "./styles";
import { useGetCryptosQuery } from "../services/cryptoApi";

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 10 : 100,
  });
  const { data: cryptosList } = useGetCryptosQuery(100);
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("");
  const classes = useStyles();

  useEffect(() => {
    const filteredData = cryptoNews?.value.filter((filterNews) =>
      filterNews.name.toLowerCase().includes(category.toLowerCase())
    );
    setNews(filteredData);
  }, [cryptoNews, category]);

  if (!news) return "Loading...";

  return (
    <>
      <FormControl
        sx={{ m: 1, minWidth: 120, display: simplified ? "none" : "flex" }}
      >
        <NativeSelect
          onChange={(e) => setCategory(e.currentTarget.value)}
          defaultValue="Cryptocurrency"
          id="select-category"
          label="Cryptocurrency"
        >
          <option value="Cryptocurrency">Cryptocurrency</option>
          {cryptosList?.data?.coins?.map((coin, index) => (
            <option key={index} value={coin.name}>
              {coin.name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>

      <Grid className={classes.cryptoCurrencyContainer} container spacing={2}>
        {news?.map((mappedNews, index) => (
          <Grid item md={6} xs={12} key={index}>
            <Card>
              <CardContent>
                <div className={classes.cardTitle}>
                  <Avatar
                    variant="rounded"
                    sx={{ width: "20%", height: "20%" }}
                    src={mappedNews?.image?.thumbnail?.contentUrl}
                    className={classes.newsTitle}
                  />
                  <Typography variant="h6">
                    <a href={mappedNews.url}>{mappedNews.name}</a>
                  </Typography>
                </div>
                <Typography variant="body">{mappedNews.description}</Typography>
                <div className={classes.cardFooter}>
                  <Typography variant="subtitle2">
                    {moment(mappedNews.datePublished).fromNow()}
                  </Typography>
                  {mappedNews?.provider?.map((provider, pIndex) => (
                    <div key={pIndex} className={classes.provider}>
                      <Typography>{provider.name}</Typography>
                      &nbsp;
                      <Avatar src={provider?.image?.thumbnail?.contentUrl} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default News;
