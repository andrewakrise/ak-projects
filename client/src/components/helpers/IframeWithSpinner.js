// IframeWithSpinner.js:
import React, { useState } from "react";
import { CircularProgress, Box } from "@mui/material";

const IframeWithSpinner = ({ src, title }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Box sx={{ width: "100%", height: "12.5rem", position: "relative" }}>
      {loading && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <iframe
        src={src}
        style={{ width: "100%", height: "100%", border: "none" }}
        title={title}
        loading="lazy"
        onLoad={() => setLoading(false)}
      />
    </Box>
  );
};

export default IframeWithSpinner;
