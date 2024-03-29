import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from '@mui/icons-material/Brightness7';
export default function Topbar({mode, setMode}) {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button variant="contained" onClick={() => navigate("/")}>
          Log-out
        </Button>
        <Button variant="contained" onClick={() => navigate("/portal/movie")}>
          Movie
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate("/portal/addmovie")}
        >
          Add Movie
        </Button>
        <Button
          style={{ marginLeft: "60%" }}
          startIcon={
            mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />
          }
          color="inherit"
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          Mode
        </Button>
      </Toolbar>
    </AppBar>
  );
}
