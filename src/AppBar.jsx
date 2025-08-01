import * as React from "react";
import AppBarMui from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EventIcon from "@mui/icons-material/Event";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Icon from "./icon.svg?react";
import "./AppBar.css";

export default function AppBar({ day, setDay }) {
  const [anchorElOptions, setAnchorElOptions] = React.useState(null);
  const optionsOpen = Boolean(anchorElOptions);
  const handleClickOptions = (event) => {
    setAnchorElOptions(event.currentTarget);
  };
  const handleCloseOptions = () => {
    setAnchorElOptions(null);
  };
  const setDayAndClose = (d) => {
    setDay(d);
    handleCloseOptions();
  };

  let realDay = 0;
  if (day == 1) {
    realDay = 28;
  } else if (day == 2) {
    realDay = 29;
  } else if (day == 3) {
    realDay = 30;
  } else if (day == 4) {
    realDay = 31;
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarMui position="fixed">
        <Toolbar>
          <Icon className="icon" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jubileu 2025 - Dia {realDay}
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleClickOptions}
          >
            <EventIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElOptions}
            open={optionsOpen}
            onClose={handleCloseOptions}
          >
            <MenuItem onClick={() => setDayAndClose(1)}> Dia 28</MenuItem>
            <MenuItem onClick={() => setDayAndClose(2)}> Dia 29</MenuItem>
            <MenuItem onClick={() => setDayAndClose(3)}> Dia 30</MenuItem>
            <MenuItem onClick={() => setDayAndClose(4)}> Dia 31</MenuItem>
          </Menu>
        </Toolbar>
      </AppBarMui>
    </Box>
  );
}
