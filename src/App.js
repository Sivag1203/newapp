import Addmovie from "./Addmovie";
import Register from "./Register";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Portal from "./Portal";
import NotFound from "./NotFound";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import EditMovie from "./EditMovie";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import Paper from "@mui/material/Paper";
function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Paper
          style={{ minHeight: "100vh", borderRadius: "0%" }}
          elevation={10}
        >
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route
              path="/portal"
              element={<Portal mode={mode} setMode={setMode} />}
            >
              <Route path="home" element={<Home />} />
              <Route path="addmovie" element={<Addmovie />} />
              <Route path="movie" element={<MovieList />}></Route>
              <Route path="view/:id" element={<MovieDetail />}></Route>
              <Route path="edit/:id" element={<EditMovie />}></Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
