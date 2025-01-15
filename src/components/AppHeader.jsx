import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

function AppHeader() {

    const { getMovies, searchValue, setSearchValue } = useContext(GlobalContext);

    function handleEnterKey(event) {

        if (event.key === "Enter") {
            getMovies();
        }
    }

    return (
        <header className="page-header">
            <div className="main-logo">
                <h1>
                    Boolflix   
                </h1>
            </div>
            <div className="searchbar">
                <button type="search" onClick={getMovies} >
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <input type="search" placeholder="Cerca Film o Serie TV..." value={searchValue} onKeyUp={handleEnterKey} onChange={(event) => setSearchValue(event.target.value)} />
            </div>
        </header>
    )
}

export default AppHeader;
