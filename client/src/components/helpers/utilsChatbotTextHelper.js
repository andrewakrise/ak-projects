// client/src/components/utilsChatbotTextHelper.js
import React from "react";
import { Typography } from "@mui/material";

export const parseReply = (text) => {
  if (!text) return;

  const lines = text.split("\n");
  const elements = [];
  let listItems = [];
  const seenHeaders = new Set();

  lines?.forEach((line, index) => {
    if (line?.startsWith("**") && line?.endsWith(":**")) {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${index}`}>
            {listItems.map((item, idx) => (
              <li key={`item-${index}-${idx}`}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
      }

      const headerText = line?.replace(/\*\*/g, "").replace(":**", "").trim();
      if (!seenHeaders.has(headerText)) {
        seenHeaders.add(headerText);
        elements.push(
          <Typography
            variant="h6"
            key={`header-${index}`}
            sx={{ fontWeight: "bold", marginTop: "1rem" }}
          >
            {headerText}
          </Typography>
        );
      }
    } else if (line.startsWith("- ")) {
      const listItemText = line.slice(2).trim().replace(/\*\*/g, "");
      listItems.push(listItemText);
    } else if (line.trim() !== "") {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${index}`}>
            {listItems.map((item, idx) => (
              <li key={`item-${index}-${idx}`}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
      }

      const paragraphText = line.replace(/\*\*/g, "").trim();

      elements.push(
        <Typography
          variant="body1"
          key={`para-${index}`}
          sx={{ marginTop: "0.5rem" }}
        >
          {paragraphText}
        </Typography>
      );
    }
  });

  if (listItems?.length > 0) {
    elements.push(
      <ul key={`list-end`}>
        {listItems?.map((item, idx) => (
          <li key={`item-end-${idx}`}>{item}</li>
        ))}
      </ul>
    );
  }

  return elements;
};
