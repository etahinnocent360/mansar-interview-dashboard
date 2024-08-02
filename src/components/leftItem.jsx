import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import {
  faAmazon,
  faApple,
  faCcMastercard,
  faGoogle,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import Transactions from "./transactions";
export default function LeftItem() {
  return (
    <Box
      sx={{
        width: "28%",
        height: "135vh",
        marginTop: 10,
        borderLeft: "2px solid white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          margin: "0 auto",
        }}
      >
        <Typography color="light" sx={{ color: "#88736e" }}>
          My cards
        </Typography>
        <MoreHorizIcon color="light" />
      </Box>
      <Card
        sx={{
          width: "90%",
          margin: "2rem auto",
          height: "28vh",
          boxShadow: "none",
          backgroundColor: "#fe9a75",
          borderRadius: 5,
        }}
      >
        <Box
          sx={{
            width: "95%",
            margin: "0 auto",
            display: "flex",
            paddingTop: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "white" }}>****4785</Typography>
          <MoreVertIcon
            sx={{
              backgroundColor: "#f7d8d36b",
              color: "white",
              borderRadius: 50,
            }}
          />
          <FontAwesomeIcon size="24" icon="fa-brands fa-cc-mastercard" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "95%",
            margin: "0 auto",
            paddingTop: 8,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "95%",
              margin: "0 auto",
              justifyContent: "center",
            }}
          >
            <Typography
              color={"tertiary"}
              sx={{
                fontWeight: 100,
                color: "white",
                //       marginLeft: "1rem",
              }}
            >
              Acc, balance
            </Typography>
            <Typography
              color={"tertiary"}
              sx={{
                fontWeight: 700,
                color: "white",
                //       marginLeft: "1rem",
                fontSize: 25,
              }}
            >
              $39,554.12
            </Typography>
          </Box>
          <FontAwesomeIcon
            size={80}
            style={{ color: "white", height: 30, width: 40 }}
            icon={faCcMastercard}
          />
        </Box>
      </Card>
      <Box
        sx={{
          width: "90%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#88736e" }}>Recent transactions</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#88736e" }}>All</Typography>
          <FontAwesomeIcon style={{ color: "#88736e" }} icon={faAngleDown} />
        </Box>
      </Box>
      <Typography
        sx={{ marginLeft: "1rem", marginTop: ".5rem", color: "#b7b7b7b8" }}
      >
        Today
      </Typography>
      <Transactions icon={faApple} title={"Apple music"} amount={"-$60.00"} />
      <Transactions icon={faSpotify} title={"Spotify"} amount={"-$107.40"} />
      <Transactions icon={faGoogle} title={"Google pay"} amount={"-$14.99"} />
      <Transactions icon={faDollarSign} title={"Salary"} amount={"$2500.00"} />
      <Typography
        sx={{ marginLeft: "1rem", marginTop: ".5rem", color: "#b7b7b7b8" }}
      >
        Yesterday
      </Typography>
      <Transactions icon={faAmazon} title={"Amazon"} amount={"-$149.99"} />
      <Box
        sx={{
          width: "90%",
          margin: "2rem auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            backgroundColor: "#fe9a75",
            textTransform: "initial",
            width: 180,
	    borderRadius:2
          }}
        >
          Get statement
        </Button>
      </Box>
    </Box>
  );
}
