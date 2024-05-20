import { MovieInterface } from "../Interface/Movie.Interface";
import "./NewDisneyVideo.css";
import { VideoContainer } from "./VideoContainer";
import React from "react";

interface NewDisneyProps {
    movieCategory: MovieInterface[];
}

export const NewDisneyVideo = ({movieCategory}: NewDisneyProps) => {
    return(
        <div className="newDisneyplus-container">
            <h4>New to Disney +</h4>
            <VideoContainer movieCategory={movieCategory}></VideoContainer>
        </div>
    )
}