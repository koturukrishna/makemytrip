import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Stack, Box } from "@mui/material/";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBars() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "orchid",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Stack spacing={3} display="flex" direction="row">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Krishna
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Supriya
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
