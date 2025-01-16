import AppCard from "../components/AppCard";
import AppHeader from "../components/AppHeader";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

function HomePage() {
    const { movies } = useContext(GlobalContext);

    return (
        <div>
            <AppHeader />

            <main className="container">
                <ul className="movies-list">
                    {movies.map((curMovie) => (
                        <AppCard key={curMovie.id} movie={curMovie} />
                    ))}
                </ul>
            </main>

        </div>
    )
}

export default HomePage;