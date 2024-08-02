import { Avatar, Box, Button, Card, Input, Typography } from "@mui/material";
import React from "react";
import TopCards from "./topCards";
import { Line } from "react-chartjs-2";
import DataSaverOnSharpIcon from "@mui/icons-material/DataSaverOnSharp";
import {
  Chart as ChartJs,
  CategoryScale,
  Legend,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  PointElement,
} from "chart.js";
import Transfer from "./transfer";
import ChartTop from "./chartTop";
ChartJs.register(
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  PointElement
);
const data = {
  labels: ["04", "08", "12", "16", "20", "24", "28"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65, 50],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "#c9bab6",
      lineTension: 0.4,
      pointRadius: 0,
    },
    {
      label: "Second dataset",
      data: [33, 45, 100, 51, 40, 76, 80],
      fill: false,
      borderColor: "#fe9a75",
      lineTension: 0.4,
      pointRadius: 0,
    },
  ],
};
export const options = {
  //   responsive: true,
  height: 100,
  plugins: {
    legend: {
      display: false,
      position: "bottom",
    },
    title: {
      display: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      time: {
        unit: "day",
        displayFormats: {
          day: "dd MMM yy",
        },
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};
export default function RightItems({value, setValue}) {
  return (
    <Box
      sx={{ width: "68%", height: "80vh", marginTop: 10, marginLeft: "1.5rem" }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TopCards acc={"Acc, balance"} amount={"39,554.12"} />
        <TopCards acc={"Monthly income"} amount={"9,500.00"} />
        <TopCards acc={"Interest income"} amount={"3,554.125"} />
      </Box>
      <Card
        sx={{
          width: "100%",
          height: "75vh",
          marginTop: "1rem",
          borderRadius: 4,
          boxShadow: "none",
        }}
      >
        <ChartTop value={value} setValue={setValue} />
        <Line data={data} style={{ width: "100%" }} options={options} />
      </Card>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <Card
          sx={{
            width: "40%",
            height: "35vh",
            borderRadius: 4,
            boxShadow: "none",
            backgroundColor: "#fdbca4",
          }}
        >
          <Typography
            sx={{
              color: "#583c37",
              fontWeight: 700,
              fontSize: 25,
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            Refer and earn
          </Typography>
          <Typography
            sx={{
              color: "#583c37",
              width: "85%",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            Refer to your friend and earn bonus and extra discount
          </Typography>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Avatar
              src="/assets/transact.png"
              sx={{ borderRadius: 0, height: 120, width: 200 }}
            />
          </Box>
        </Card>
        <Card
          sx={{
            width: "55%",
            height: "35vh",
            borderRadius: 4,
            boxShadow: "none",
          }}
        >
          <Typography sx={{ margin: "1rem", color: "#583c37" }}>
            Quick transfer
          </Typography>
          <Transfer />
          <Typography sx={{ margin: "1rem", color: "#583c37" }}>
            Add amount
          </Typography>
          <Box
            sx={{
              width: "90%",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Input
              // className="search"
              placeholder="0.00"
              sx={{
                borderColor: "#583c37",
                ":active": { borderColor: "red" },
                "::placeholder": { color: "red" },
                width:'40%'
              }}
            />
            <Button
              sx={{
                backgroundColor: "#fe9a75",
                textTransform: "initial",
                width: 140,
                borderRadius: 2,
              }}
            >
              Send money
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
