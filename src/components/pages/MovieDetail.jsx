import React from 'react';
import styles from "./MovieDetail.module.css";
import movie from "./movie.json";

const MovieDetails = () => {
    const imageUrl = "https://image.tmdb.org/t/p/w500"+ movie.poster_path;

    return (
        <div className={styles.detailsContainer}>
           <img src={imageUrl} alt="" /> 
        </div>
    );
}

export default MovieDetails;
