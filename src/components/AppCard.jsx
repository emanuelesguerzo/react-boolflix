function AppCard({ movie }) {

    const availableLanguages = ["it", "en"];

    function getFlag() {
        let flag = availableLanguages.includes(movie.original_language) ? `${movie.original_language}.png` : 'placeholder.png';
        return `/img/${flag}`;
    }

    function getRating(score) {
        const stars = [];
        const rating = Math.ceil(score / 2);

        for (let i = 0; i < 5; i++) {
            if(i < rating) {
                stars.push(<i key={i} className="fa-solid fa-star"></i>)
            } else {
                stars.push(<i key={i} className="fa-regular fa-star"></i>)
            }
        }
        return stars;
    }

    return (
        <>
            <li className="card">
                <div className="card-container">
                    <div className="card-front">
                        <img
                            src={movie.poster_path ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}` : "https://placehold.co/342x513/242323/FFF"}
                            className="movie-poster"
                        />
                    </div>
                    <div className="card-back">
                        <div><strong>Titolo:</strong> {movie.title || movie.name}</div>
                        <div><strong>Titolo originale:</strong> {movie.original_title || movie.original_name}</div>
                        <div><strong>Overview:</strong> {movie.overview ? movie.overview : "N/A"}</div>
                        <div className="country">
                            <strong>Paese:</strong>
                            <img
                                className="flags"
                                src={getFlag(movie.original_language)}
                                alt={movie.original_language}
                            />
                        </div>
                        <div><strong>Voto:</strong> {getRating(movie.vote_average)}</div>
                    </div>
                </div>

            </li>
        </>
    )
}

export default AppCard;