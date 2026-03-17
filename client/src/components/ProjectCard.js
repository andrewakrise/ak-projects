// ProjectCard.js (replace the image rendering code)
import React, { useState } from "react";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Box,
} from "@mui/material";
import { OpenInNew, Close, Info } from "@mui/icons-material";
import { getYouTubeVideoId, getVimeoVideoId } from "./helpers/utils.js";
import IframeWithSpinner from "./helpers/IframeWithSpinner.js";

const ProjectCard = ({ id, title, description, link, detailContent }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const isDialogProject = link === "dialog";
  const youtubeId = !isDialogProject ? getYouTubeVideoId(link) : null;
  const vimeoId = !isDialogProject ? getVimeoVideoId(link) : null;

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
      {isDialogProject ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "12.5rem",
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setDialogOpen(true)}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, letterSpacing: 1, mb: 0.5 }}
          >
            {title}
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            Click to view details
          </Typography>
        </Box>
      ) : youtubeId ? (
        <IframeWithSpinner
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
        />
      ) : vimeoId ? (
        <IframeWithSpinner
          src={`https://player.vimeo.com/video/${vimeoId}?h=0eb484de83`}
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
        {isDialogProject ? (
          <Button
            size="small"
            color="primary"
            onClick={() => setDialogOpen(true)}
            endIcon={<Info />}
          >
            View Details
          </Button>
        ) : link && link !== "no-link" ? (
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

      {isDialogProject && detailContent && (
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 2,
              maxHeight: "85vh",
            },
          }}
        >
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pb: 1,
            }}
          >
            <Typography variant="h5" component="span" sx={{ fontWeight: 700 }}>
              {title}
            </Typography>
            <IconButton onClick={() => setDialogOpen(false)} size="small">
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>{detailContent}</DialogContent>
          <DialogActions sx={{ px: 3, py: 1.5 }}>
            <Button onClick={() => setDialogOpen(false)} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Card>
  );
};

export default ProjectCard;
