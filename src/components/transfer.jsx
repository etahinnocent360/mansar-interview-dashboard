import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

export default function Transfer({ img, name }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        margin: "1rem auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
	  flexDirection:'column',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar src="/assets/blog44.jpeg" />
        <Typography sx={{ fontSize: 15 }}>Jane</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
	  flexDirection:'column',
          alignItems: "center",
        }}
      >
        <Avatar src="/assets/blog44.jpeg" />
        <Typography sx={{ fontSize: 15 }}>Clarisse</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
	  flexDirection:'column',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar src="/assets/blog44.jpeg" />
        <Typography sx={{ fontSize: 15 }}>Mercy</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
	  flexDirection:'column',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar src="/assets/blog44.jpeg" />
        <Typography sx={{ fontSize: 15 }}>John</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            border: "dashed 1px #88736e",
            height: 40,
            width: 40,
            borderRadius: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 30, color: "#88736e" }}>+</Typography>
        </Box>
        <Typography sx={{ fontSize: 15, color: "#88736e" }}>Add new</Typography>
      </Box>
      <Box>
        <FontAwesomeIcon
          style={{ fontSize: 30, fontWeight: 100, color: "#88736e" }}
          icon={faAngleRight}
        />
      </Box>
    </Box>
  );
}
