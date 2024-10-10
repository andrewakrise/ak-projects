import React, { memo } from "react";
import { Snackbar, Button } from "@mui/material";

function Alert({ open, message, onClose, duration = 4000 }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      message={message}
      action={
        <Button color="secondary" size="small" onClick={onClose}>
          Close
        </Button>
      }
      className="notification-snackbar"
    />
  );
}

export default memo(Alert);
