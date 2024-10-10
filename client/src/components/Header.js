// src/components/Header.js
import React, { useEffect, useRef } from "react";
import { GitHub, LinkedIn, Language } from "@mui/icons-material";
import { Button, IconButton, Box, Toolbar, AppBar } from "@mui/material";

const socials = [
  {
    icon: <GitHub />,
    url: "https://www.github.com/andrewkukhar",
  },
  {
    icon: <LinkedIn />,
    url: "https://www.linkedin.com/in/andrewkukhar/",
  },
  {
    icon: <Language />,
    url: "https://www.akweb.dev/",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <AppBar
      position="fixed"
      ref={headerRef}
      sx={{
        transition: "transform 0.3s ease-in-out",
        backgroundColor: "#18181b",
      }}
      elevation={0} // Optional: Remove shadow
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Social Icons */}
        <Box>
          {socials.map(({ icon, url }) => (
            <IconButton
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Box>

        {/* Navigation Links */}
        <Box>
          <Button
            onClick={handleClick("projects")}
            sx={{
              color: "white",
              textTransform: "none",
              marginLeft: 2,
              marginRight: 2,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Projects
          </Button>
          <Button
            onClick={handleClick("contactme")}
            sx={{
              color: "white",
              textTransform: "none",
              marginLeft: 2,
              marginRight: 2,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Contact Me
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
