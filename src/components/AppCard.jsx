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

        for(let i = 0; i < rating; i++) {
            stars.push(<i key={i} className="fas fa-star"></i>)
        }
        return stars;
    }

    return (
        <>
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
        </>
    )
}

export default AppCard;