import React, { useState, useRef } from "react";
import {
  Avatar,
  IconButton,
  Typography,
  Box,
  ButtonBase,
  Button,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { grey } from "@mui/material/colors";
import { Popover } from "@mui/material";
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import StyledBadge from "../atoms/StyledBadge";

function LinksBar() {
  const avatarRef = useRef(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handlePopoverClose = () => {
    setPopoverOpen(false);
  };

  return (
    <>
      <Box
        component={ButtonBase}
        onClick={() => setPopoverOpen(!popoverOpen)}
        ref={avatarRef}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar src="/avatar.jpg" sx={{ width: 50, height: 50 }} />
        </StyledBadge>
      </Box>

      <Popover
        open={popoverOpen}
        onClose={handlePopoverClose}
        anchorEl={avatarRef.current}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            border: 1,
            borderColor: grey[200],
            padding: 2,
            marginLeft: 2,
            borderRadius: "5%",
          },
        }}
        elevation={0}
      >
        <Box flex flexDirection="column">
          <Typography variant="h6">Kratin Sharma</Typography>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <EmailIcon />
            <Typography
              variant="span"
              sx={{ marginLeft: "8px", marginTop: "5px" }}
            >
              2022mmb1385@iitrpr.ac.in
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <PhoneIcon />
            <Typography
              variant="span"
              sx={{ marginLeft: "8px", marginTop: "5px" }}
            >
              +91-9460847679
            </Typography>
          </Box>
          <a
            href="https://drive.google.com/file/d/1-nlpwQ-6WGMaOAEWb3wnrcGZ25HUdsoz/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Button>See my resume</Button>
          </a>
        </Box>
      </Popover>

      <a
        href="https://www.linkedin.com/in/kratin-sharma-07018225b/"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton>
          <LinkedInIcon sx={{ color: grey[700], width: 30, height: 30 }} />
        </IconButton>
      </a>
      <a href="https://github.com/KratinSh18" target="_blank" rel="noreferrer">
        <IconButton>
          <GitHubIcon sx={{ color: grey[700], width: 30, height: 30 }} />
        </IconButton>
      </a>
      <a
        href="https://www.instagram.com/kratin._.18/"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton>
          <InstagramIcon sx={{ color: grey[700], width: 30, height: 30 }} />
        </IconButton>
      </a>
    </>
  );
}

export default LinksBar;
