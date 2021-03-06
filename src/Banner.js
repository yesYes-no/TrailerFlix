import axios from "./axios";
import React, { useState, useEffect } from "react";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // pull movie data from api
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        // grab a random movies from the data to use for banner
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  console.log(movie);

  return (
    // this header allows for styling of the background image that will not clash with "div" sections
    <header
      className="banner"
      style={{
        // tell the browser to have image cover space
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* title */}
        <h1 className="banner__title">
          {/* this will pull the title or (||) name or (||) orignal_name from the movie state/effect above. there are three options because of the nature of the API using different naming convention.
          if .stuff does not return anything then the Optional Chaining feature (?) will tell keep it from crashing by giving null.
          The nameing convention of .stuff is from the API json return  */}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* Div 2 buttons */}

        <div className="banner__buttons">
          
          
        </div>
        {/* Description */}
        {/* these pull the overview(description) of the movie from the state/effect function above */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;