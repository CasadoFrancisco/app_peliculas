import styles from "../src/components/App.module.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MovieDetails from "./components/pages/MovieDetail";
import LandingPage from "./components/pages/LandingPage";



function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
            <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
            <Route exact path="/movies/:movieId" element = {<MovieDetails/>}/>
            <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
