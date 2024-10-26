// IframeWithSpinner.js:
import React, { useState } from "react";
import { CircularProgress, Box } from "@mui/material";

const IframeWithSpinner = ({ src, title, style }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
        title={title}
        loading="lazy"
        onLoad={() => setLoading(false)}
        scrolling="no"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          overflow: "hidden",
          ...style,
        }}
      />
    </Box>
  );
};

export default IframeWithSpinner;
