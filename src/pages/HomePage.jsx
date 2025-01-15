import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

function HomePage() {

    const { searchValue, setSearchValue, getMovies, movies } = useContext(GlobalContext);

    function getFlag(languageCode) {
        switch (languageCode) {
            case "it":
                return "/img/it.png";
            case "en":
                return "/img/en.png";
            default:
                return "/img/placeholder.png";
        }
    }

    function getRating(score) {
        const stars = [];
        const rating = Math.ceil(score / 2);

        for(let i = 0; i < rating; i++) {
            stars.push(<i key={i} className="fas fa-star"></i>)
        }
        return stars;
    }

    function handleEnterKey(event) {

        if(event.key === "Enter") {
            getMovies();
        }
    }

    return (
        <div>
            <h2>Benvenuto su Boolflix!</h2>

            <input type="search" value={searchValue} onKeyUp={handleEnterKey} onChange={(event) => setSearchValue(event.target.value)} />
            <button type="search" onClick={getMovies} >Cerca</button>

            <ul>
                {movies.map((curMovie) => (
                    <li key={curMovie.id}>
                        <img src={curMovie.poster_path ? `https://image.tmdb.org/t/p/w342/${curMovie.poster_path}` : "https://placehold.co/342x400"}/>
                        <h3>{curMovie.title || curMovie.name}</h3>
                        <h4>{curMovie.original_title || curMovie.original_name}</h4>
                        <div>
                            <img
                                src={getFlag(curMovie.original_language)}
                                alt={curMovie.original_language}
                            />
                        </div>
                        <div>{getRating(curMovie.vote_average)}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage;