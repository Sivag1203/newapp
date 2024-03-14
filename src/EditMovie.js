import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import Addmovie from "./Addmovie";
import * as yup from "yup";
// import { useNavigate } from "react-router-dom";
export default function EditMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [show,setShow]  =   useState(false);
  //   const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://65f16b8e034bdbecc7627150.mockapi.io/movie/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv))
      .then(()=>setShow(true))
  }, [id]);

  return <div>{ show ? <Editform movie={movie} /> : "Loading..."}</div>;
}

function Editform({ movie }) {
  const movieValidationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    poster: yup.string().required("Poster is required").min(10).url(),
    trailer: yup.string().required("Trailer is required").min(10).url(),
    rating: yup.number().required("Rating is required").min(0).max(10),
    summary: yup.string().required("Summary is required").min(20),
  });
  const formik = useFormik({
    initialValues: {
      name: movie.name,
      poster: movie.poster,
      trailer: movie.trailer,
      rating: movie.rating,
      summary: movie.summary,
    },
    validationSchema: movieValidationSchema,
    onSubmit: (values) => {
      Addmovie(values);
    },
  });
  return (
    <div>
      <form className="form" onSubmit={formik.handleSubmit}>
        <h1>EDIT MOVIE</h1>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={
            formik.touched.name && formik.errors.name
              ? formik.errors.name
              : null
          }
        />

        <TextField
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          value={formik.values.poster}
          onChange={formik.handleChange}
          name="poster"
          onBlur={formik.handleBlur}
          error={formik.touched.poster && Boolean(formik.errors.poster)}
          helperText={
            formik.touched.poster && formik.errors.poster
              ? formik.errors.poster
              : null
          }
        />

        <TextField
          id="outlined-basic"
          label="Trailer"
          variant="outlined"
          value={formik.values.trailer}
          onChange={formik.handleChange}
          name="trailer"
          onBlur={formik.handleBlur}
          error={formik.touched.trailer && Boolean(formik.errors.trailer)}
          helperText={
            formik.touched.trailer && formik.errors.trailer
              ? formik.errors.trailer
              : null
          }
        />

        <TextField
          id="outlined-basic"
          label="Rating"
          variant="outlined"
          value={formik.values.rating}
          onChange={formik.handleChange}
          name="rating"
          onBlur={formik.handleBlur}
          error={formik.touched.rating && Boolean(formik.errors.rating)}
          helperText={
            formik.touched.rating && formik.errors.rating
              ? formik.errors.rating
              : null
          }
        />

        <TextField
          id="outlined-basic"
          label="Summary"
          variant="outlined"
          value={formik.values.summary}
          onChange={formik.handleChange}
          name="summary"
          onBlur={formik.handleBlur}
          error={formik.touched.summary && Boolean(formik.errors.summary)}
          helperText={
            formik.touched.summary && formik.errors.summary
              ? formik.errors.summary
              : null
          }
        />

        <Button variant="contained" type="submit">
          Edit Movie
        </Button>
      </form>
    </div>
  );
}
