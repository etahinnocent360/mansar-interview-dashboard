import { Card, Typography } from '@mui/material'
import React from 'react'

export default function TopCards({acc, amount}) {
  return (
    <Card
          sx={{
            width: "30%",
            height: "16vh",
            borderRadius: 4,
            boxShadow: "none",
	     display: "flex",
              flexDirection: "column",
        //       alignItems: "center",
              justifyContent: "center",
          }}
        >
          <Typography
            color={"tertiary"}
            sx={{
              fontWeight: 100,
              color: "#88736e",
              marginLeft: "1rem",
             
            }}
          >
           {acc}
          </Typography>
          <Typography
            color={"tertiary"}
            sx={{
              fontWeight: 700,
              color: "#583c37",
              marginLeft: "1rem",
              fontSize: 25,
	    
            }}
          >
            {amount}
          </Typography>
        </Card>
  )
}
