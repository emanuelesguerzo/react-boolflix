import AppCard from "../components/AppCard";
import AppHeader from "../components/AppHeader";

function HomePage() {

    return (
        <div>
            <AppHeader />

            <main className="container">
                <ul className="movies-list">
                    <AppCard />
                </ul>
            </main>

        </div>
    )
}

export default HomePage;