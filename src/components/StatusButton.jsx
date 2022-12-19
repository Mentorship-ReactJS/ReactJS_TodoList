import { Button } from "@mui/material";
import React, { useCallback } from "react";

function StatusButton({ title, onChange }) {
  const onChangeStatus = useCallback(
    () => onChange(title),

    [onChange, title]
  );

  return (
    <Button variant="text" onClick={onChangeStatus}>
      {title}
    </Button>
  );
}

export default StatusButton;
