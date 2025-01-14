import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GlobalContext from "./contexts/GlobalContext";
import axios from 'axios';
const apiUrl = "https://api.themoviedb.org/3";
const apiKey = "7491f98d6fabe3982ffbec8bbc81710a"

function App() {
  
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  },[])
  
  // function getMovies() {
  //   axios.get(`${apiUrl}/search/movie`, {
  //   params: {
  //     api_key: apiKey,
  //     query: searchValue,
  //   }  
  // }).then((resp) => {
  //   setMovies(resp.data.results)
  // })
  // }

  function getMovies() {
  
    const movieRequest = axios.get(`${apiUrl}/search/movie`, {
      params: {
        api_key: apiKey,
        query: searchValue,
      },
    });
  
    const tvRequest = axios.get(`${apiUrl}/search/tv`, {
      params: {
        api_key: apiKey,
        query: searchValue,
      },
    });
  
    Promise.all([movieRequest, tvRequest])
      .then(([movieResp, tvResp]) => {
        const moviesResults = movieResp.data.results;
        const tvResults = tvResp.data.results;
        setMovies([...moviesResults, ...tvResults]);
      })
      .catch((error) => {
        console.error("Errore durante la ricerca:", error);
      });
  }

  const globalProviderValue = {
    searchValue,
    getMovies,
    setSearchValue,
    movies,
  }

  return (
    <>
      <GlobalContext.Provider value={globalProviderValue}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
