import React from "react";
import { MovieInterface } from "../Interface/Movie.Interface";
import "./Originals.css";
import { VideoContainer } from "./VideoContainer";


interface OriginalProps {
    movieCategory: MovieInterface[];
}
export const Originals=({movieCategory}: OriginalProps )=>{
    return(
        <div className="originals-container">
            <h4>Originals</h4>
            <VideoContainer movieCategory={movieCategory} ></VideoContainer>
        </div>
    )
}