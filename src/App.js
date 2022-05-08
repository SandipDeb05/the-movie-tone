import React, { useEffect, useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import "./App.css";

//TODO API KEY : 3c315337

const API_URL = "http://www.omdbapi.com?apikey=3c315337"; // FIXME

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  useEffect(() => {
    searchMovies("batman");
  }, []);

  const searchMovies = async (title) => {
    setSpinner(true);
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    setSpinner(false);
    console.log(data);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

  return (
    <div className="app">
      <h1 onClick={() => searchMovies("batman")}>The Movie Tone</h1>

      <div className="search">
        <input
          placeholder="Search your favourite movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onKeyPress={handleKeyPress}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {spinner && <h2 className="loading">Loading...</h2>}

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, i) => (
            <MovieCard movie={movie} key={i} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Sorry🙁! No movies found</h2>
        </div>
      )}

      <div className="footer">
        <p>Coded by Sandip Deb </p>
        <a
          href="https://www.linkedin.com/in/sandip-deb-8b76b2157/"
          target={"_blank"}
        >
          <BsLinkedin className="icon " />
        </a>
        <a href="https://github.com/SandipDeb05" target={"_blank"}>
          <BsGithub className="icon" />
        </a>
      </div>
    </div>
  );
};

export default App;
