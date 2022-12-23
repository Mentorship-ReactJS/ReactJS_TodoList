import { Box, Button } from "@mui/material";
import React from "react";
import StatusButton from "./StatusButton";

function Statusbar() {
  const statusList = ["all", "pendding", "completed"];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 1,
        paddingBottom: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {statusList.map((ele, index) => (
          <StatusButton key={index} title={ele} />
        ))}
      </Box>
      <Box>
        <Button variant="contained">Clear all</Button>
      </Box>
    </Box>
  );
}

export default Statusbar;
