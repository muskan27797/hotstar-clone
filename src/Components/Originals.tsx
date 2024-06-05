import React, { forwardRef } from "react";
import { MovieInterface } from "../Interface/Movie.Interface";
import "./Originals.css";
import { MovieCard } from "./MovieCard";


interface OriginalProps {
    movieCategory: MovieInterface[];
}

export const  Originals = forwardRef<HTMLDivElement, OriginalProps>(({movieCategory}, ref) => {
    return(
        <div ref= {ref} className="originals-container">
            <h4 className="originals-heading">Originals</h4>
            <MovieCard movieCategory={movieCategory} ></MovieCard>
        </div>
    )
})