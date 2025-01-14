import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

function HomePage() {

    const { searchValue, setSearchValue, getMovies, movies } = useContext(GlobalContext);

    function getFlag(languageCode) {
        switch (languageCode) {
            case "it":
                return "../../public/img/it.png";
            case "en":
                return "../../public/img/en.png";
            default:
                return "../../public/img/placeholder.png";
        }
    }

    return (
        <div>
            <h2>Benvenuto su Boolflix!</h2>

            <input type="search" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
            <button type="search" onClick={getMovies}>Cerca</button>

            <ul>
                {movies.map((curMovie) => (
                    <li key={curMovie.id}>
                        <h3>{curMovie.title}</h3>
                        <h4>{curMovie.original_title}</h4>
                        <span>
                            <img
                                src={getFlag(curMovie.original_language)}
                                alt={curMovie.original_language}
                            />
                        </span>
                        <span>{curMovie.vote_average}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage;