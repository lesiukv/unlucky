import React from "react";
import { Line } from "react-chartjs-2";
import { Grid, Typography } from "@mui/material";

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  console.log(coinHistory)

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory.data.history[i].timestamp).toLocaleString()
    );
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#ffffff",
        borderColor: "#dddddd",
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  console.log(data);
  return (
    <>
      <Grid>
        <Typography>{coinName} Price Chart</Typography>
      </Grid>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
