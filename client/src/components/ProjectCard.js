// ProjectCard.js (replace the image rendering code)
import React, { useState } from "react";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { OpenInNew } from "@mui/icons-material";
import { getYouTubeVideoId, getVimeoVideoId } from "./helpers/utils.js";
import IframeWithSpinner from "./helpers/IframeWithSpinner.js";

const ProjectCard = ({ id, title, description, link }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const youtubeId = getYouTubeVideoId(link);
  const vimeoId = getVimeoVideoId(link);

  const truncateDescription = (text, length) => {
    return text.length > length ? `${text.substring(0, length)}...` : text;
  };

  const isChessProject = id === "online-chess";

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 345,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        height: "25rem",
        overflowY: "auto",
      }}
    >
      {youtubeId ? (
        <IframeWithSpinner
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
        />
      ) : vimeoId ? (
        <IframeWithSpinner
          src={`https://player.vimeo.com/video/${vimeoId}`} // Correct embed URL for Vimeo
          title={title}
        />
      ) : link && link !== "no-link" ? (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "12.5rem",
            overflow: "hidden",
          }}
        >
          <IframeWithSpinner
            src={link}
            title={title}
            style={
              isChessProject
                ? {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "108rem",
                    height: "63rem",
                    border: "none",
                    transform: "scale(0.2)",
                    transformOrigin: "0 0",
                    pointerEvents: "none",
                  }
                : {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "108rem",
                    height: "63rem",
                    border: "none",
                    transform: "scale(0.2)",
                    transformOrigin: "0 0",
                    pointerEvents: "none",
                  }
            }
          />
        </div>
      ) : (
        <Typography
          variant="body1"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "200px",
          }}
        >
          In Progress...
        </Typography>
      )}
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          onClick={() => setShowFullDescription(!showFullDescription)}
          sx={{ cursor: "pointer" }}
        >
          {showFullDescription
            ? description
            : truncateDescription(description, 100)}
          {!showFullDescription && description.length > 100 && (
            <Typography
              variant="body2"
              color="primary"
              component="span"
              sx={{ cursor: "pointer" }}
            >
              {" "}
              Read more
            </Typography>
          )}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end", padding: 2 }}>
        {link && link !== "no-link" ? (
          <Button
            size="small"
            color="primary"
            href={link}
            target="_blank"
            endIcon={<OpenInNew />}
          >
            See more
          </Button>
        ) : (
          <Button size="small" color="primary" disabled>
            In Progress
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
