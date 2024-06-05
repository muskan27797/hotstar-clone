import { MovieInterface } from "../Interface/Movie.Interface";
import "./Recommands.css";
import { MovieCard } from "./MovieCard";
import React from "react";

interface RecommendProps {
    movieCategory: MovieInterface[];
}
export const Recommands=({movieCategory}: RecommendProps )=>{
    return(
        <div className="recommand-container">
            <h4 className="reccomend-heading">Recommanded for you</h4>
            <MovieCard movieCategory = {movieCategory}></MovieCard>
        </div>
    )
}