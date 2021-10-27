import React, { useState, useEffect, useRef } from "react";
import useStyles from "./styles";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import millify from "millify";

const Exchanges = () => {
	const classes = useStyles();
  const { data: cryptosList, isFetching } = useGetCryptosQuery(100);
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setWidth(ref.current ? ref.current.offsetWidth / 5 : 200);
  }, []);

  if (isFetching) return "Loading";

  const rows = cryptosList?.data?.coins?.map((coin) => ({
    id: coin.rank,
    col2: coin.name,
    col3: millify(coin.numberOfMarkets),
    col4: millify(coin.volume),
    col5: millify(coin.change),
  }));

  const columns = (columnWidth) => [
    { field: "id", headerName: "id", width: columnWidth },
    { field: "col2", headerName: "Cryptocurrency name", width: columnWidth },
    { field: "col3", headerName: "Number of Markets", width: columnWidth },
    { field: "col4", headerName: "24h Trade Volume", width: columnWidth },
    { field: "col5", headerName: "24h Value Change", width: columnWidth },
  ];

  return (
    <>
      <div
        ref={ref}
        style={{ height: 1000, width: "100%", marginBottom: "60px" }}
      >
        {}
        <Typography className={classes.blockTitle} variant="h5">
          Exchanges
        </Typography>
        <DataGrid rows={rows} columns={columns(width)} />
      </div>
    </>
  );
};

export default Exchanges;
