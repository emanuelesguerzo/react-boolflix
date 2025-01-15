import AppCard from "../components/AppCard";
import AppHeader from "../components/AppHeader";

function HomePage() {

    return (
        <div>
            <AppHeader />

            <main>
                <ul>
                    <AppCard />
                </ul>
            </main>

        </div>
    )
}

export default HomePage;