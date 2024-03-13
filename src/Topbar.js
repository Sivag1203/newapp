import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
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
      </Toolbar>
    </AppBar>
  );
}
