import React from "react";
import { Line } from "react-chartjs-2";
import { Typography, CardContent, Card } from "@mui/material";
import useStyles from "./styles"

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];
  const classes = useStyles();
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
        backgroundColor: '#C2D8B9',
        borderColor: '#738290',
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
      <Card>
        <CardContent>
          <Typography variant="h6">{coinName} Price Chart</Typography>
          <Line data={data} options={options} />
        </CardContent>
      </Card>
    </>
  );
};

export default LineChart;
