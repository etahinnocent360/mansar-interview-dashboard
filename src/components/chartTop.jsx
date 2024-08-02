import { Box, Button, ListItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

export default function ChartTop({ value, setValue }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "95%",
        margin: "1rem auto",
      }}
    >
      <Typography sx={{ width: "40%", color:"#583c37"}}>Statistics</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "50%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FiberManualRecordRoundedIcon
            color="secondary"
            sx={{ fontSize: 15 }}
          />
          <Typography sx={{color:"#583c37"}}>Income</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FiberManualRecordRoundedIcon
        //     color="light"
            sx={{ fontSize: 15, color:"#c9bab6",}}
          />
          <Typography sx={{color:"#583c37"}}>Expenses</Typography>
        </Box>
        <Select
          value={value}
          onChange={(e) => setValue(e.target.value)}
	      PaperProps={{
            sx: {
             border:'none', outline:'none'
            },
          }}
          sx={{
            width: 140,
            height: 30,
            backgroundColor: "#fe9a75",
	    borderRadius:2.5,
            '.MuiOutlinedInput-notchedOutline':{border:0},
            color: "white",
          }}
        >
          <ListItem value={1}>Last month</ListItem>
          <ListItem value={2}>Last Year</ListItem>
        </Select>
      </Box>
    </Box>
  );
}
