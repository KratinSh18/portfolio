import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";

function MobileLinksBar() {
  return (
    <Box flex flexDirection="column">
      <Typography variant="h6">Kratin Sharma</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginY: "10px",
        }}
      >
        <EmailIcon />
        <Typography variant="span" sx={{ marginLeft: "8px" }}>
          2022mmb1385@iitrpr.ac.in
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginY: "10px",
        }}
      >
        <PhoneIcon />
        <Typography variant="span" sx={{ marginLeft: "8px" }}>
          +91-9460847679
        </Typography>
      </Box>
      <List>
        <ListItem disablePadding>
          <a
            href="https://drive.google.com/file/d/1-nlpwQ-6WGMaOAEWb3wnrcGZ25HUdsoz/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <ListItemButton>
              <ListItemIcon>
                <StickyNote2OutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Resume" />
            </ListItemButton>
          </a>
        </ListItem>
        <ListItem disablePadding>
          <a
            href="https://www.linkedin.com/in/kratin-sharma-07018225b/"
            target="_blank"
            rel="noreferrer"
          >
            <ListItemButton>
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText primary="LinkedIn" />
            </ListItemButton>
          </a>
        </ListItem>
        <ListItem disablePadding>
          <a
            href="https://github.com/KratinSh18"
            target="_blank"
            rel="noreferrer"
          >
            <ListItemButton>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="GitHub" />
            </ListItemButton>
          </a>
        </ListItem>
        <ListItem disablePadding>
          <a
            href="https://www.instagram.com/kratin._.18/"
            target="_blank"
            rel="noreferrer"
          >
            <ListItemButton>
              <ListItemIcon>
                <InstagramIcon />
              </ListItemIcon>
              <ListItemText primary="Instagram" />
            </ListItemButton>
          </a>
        </ListItem>
      </List>
    </Box>
  );
}

export default MobileLinksBar;
