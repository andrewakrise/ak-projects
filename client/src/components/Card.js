// src/components/Card.js
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ProjectCard = ({ id, title, description, imageSrc, link }) => {
  return (
    <Card key={id} className="project-card">
      <CardMedia
        component="img"
        height="200"
        image={imageSrc}
        alt={title}
        sx={{
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="#64748b">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end", padding: 2 }}>
        <Button
          size="small"
          color="primary"
          href={link}
          target="_blank"
          endIcon={<OpenInNewIcon />}
        >
          See more
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
