import { MovieInterface } from "../Interface/Movie.Interface";
import "./Trending.css";
import { MovieCard } from "./MovieCard";
import React from "react";

interface TrendingProps {
    movieCategory: MovieInterface[];
}

export const Trending=({movieCategory}: TrendingProps)=>{
    return(
        <div className="trending-container">
            <h4 className="trending-heading">Trending In India</h4>
            <MovieCard movieCategory={movieCategory}></MovieCard>
        </div>
    )
}