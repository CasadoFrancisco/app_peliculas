import React from 'react';
import MovieCard from './MovieCard';
import Movies from "./Movies.json";
import styles from "./MovieGrid.module.css";

const MovieGrid = () => {
    // console.log(Movies);
    return (
        <div>
            <ul className={styles.moviesgrid}>
                {Movies.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie}/>
                })}
            </ul>
        </div>
    );
}

export default MovieGrid;
