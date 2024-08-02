import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function Transactions({ icon, title, amount }) {
  return (
    <Box
      sx={{
        width: "90%",
        margin: "1rem auto",
        display: "flex",
        justifyContent: "space-between",
	alignItems:'center'
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          style={{
            backgroundColor: "#fe9a75",
            height: 30,
            width: 30,
            padding: 10,
            color: "white",
            fontSize: 30,
            borderRadius: 50,
          }}
          // size={20}
          icon={icon}
        />
        <Box sx={{ marginLeft: ".5rem" }}>
          <Typography>{title}</Typography>
          <Typography sx={{ fontSize: 15, color: "#b7b7b7c5" }}>
            31 jul 2024
          </Typography>
        </Box>
      </Box>
      <Typography>{amount}</Typography>
    </Box>
  );
}
