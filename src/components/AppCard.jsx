import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

function AppCard() {

    const { movies } = useContext(GlobalContext);

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
        if (!rating) {
            stars.push("N/A")
        }
        for (let i = 0; i < rating; i++) {
            stars.push(<i key={i} className="fas fa-star"></i>)
        }
        return stars;
    }

    return (
        <>
            {movies.map((curMovie) => (
                <li key={curMovie.id} className="card">
                    <div className="card-container">
                        <div className="card-front">
                            <img
                                src={curMovie.poster_path ? `https://image.tmdb.org/t/p/w342/${curMovie.poster_path}` : "https://placehold.co/342x513/242323/FFF"}
                                className="movie-poster"
                            />
                        </div>
                        <div className="card-back">
                            <div><strong>Titolo:</strong> {curMovie.title || curMovie.name}</div>
                            <div><strong>Titolo originale:</strong> {curMovie.original_title || curMovie.original_name}</div>
                            <div><strong>Overview:</strong> {curMovie.overview ? curMovie.overview : "N/A"}</div>
                            <div className="country">
                                <strong>Paese:</strong> 
                                <img
                                    className="flags"
                                    src={getFlag(curMovie.original_language)}
                                    alt={curMovie.original_language}
                                />
                            </div>
                            <div><strong>Voto:</strong> {getRating(curMovie.vote_average)} su 5</div>
                        </div>
                    </div>

                </li>
            ))}
        </>
    )
}

export default AppCard;