import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import Footer from "./components/Footer";
import SearchInput from "./components/SearchInput";

//TODO API KEY : 3c315337

const API_URL = "http://www.omdbapi.com?apikey=3c315337";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [spinner, setSpinner] = useState(true);

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

  const headingLinkHandler = () => {
    searchMovies("batman");
    setSearchTerm("");
  };

  return (
    <div className="app">
      <h1 onClick={headingLinkHandler}>The Movie Tone</h1>

      <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchMovies={searchMovies}
      />

      {spinner && <h2 className="loading">Loading...</h2>}

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, i) => (
            <MovieCard movie={movie} key={i} />
          ))}
        </div>
      ) : (
        !spinner && (
          <div className="empty">
            <h2>Sorry🙁! No movies found</h2>
          </div>
        )
      )}

      <Footer />
    </div>
  );
};

export default App;
