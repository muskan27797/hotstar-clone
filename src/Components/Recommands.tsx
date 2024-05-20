import { MovieInterface } from "../Interface/Movie.Interface";
import "./Recommands.css";
import { VideoContainer } from "./VideoContainer";
import React from "react";

interface RecommendProps {
    movieCategory: MovieInterface[];
}
export const Recommands=({movieCategory}: RecommendProps )=>{
    return(
        <div className="recommand-container">
            <h4>Recommanded for you</h4>
            <VideoContainer movieCategory = {movieCategory}></VideoContainer>
        </div>
    )
}