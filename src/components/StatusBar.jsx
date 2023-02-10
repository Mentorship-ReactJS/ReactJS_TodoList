import { Box, Button } from "@mui/material";
import React, { useCallback } from "react";
import StatusButton from "./StatusButton";
import { useDispatch } from 'react-redux';

function Statusbar() {
  const dispatch = useDispatch()

  const handleClearAllTask = useCallback(() => {
    dispatch({ type: "clearAll" });
  }, [dispatch]);

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
        <Button variant="contained" onClick={handleClearAllTask}>
          Clear all
        </Button>
      </Box>
    </Box>
  );
}

export default Statusbar;
