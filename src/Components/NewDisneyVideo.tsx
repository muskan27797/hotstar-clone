import { MovieInterface } from "../Interface/Movie.Interface";
import "./NewDisneyVideo.css";
import { MovieCard } from "./MovieCard";
import React from "react";

interface NewDisneyProps {
    movieCategory: MovieInterface[];
}

export const NewDisneyVideo = ({movieCategory}: NewDisneyProps) => {
    return(
        <div className="newDisneyplus-container">
            <h4 className="newDisneyplus-heading">New to Disney +</h4>
            <MovieCard movieCategory={movieCategory}></MovieCard>
        </div>
    )
}