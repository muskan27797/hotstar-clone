import { MovieInterface } from "../Interface/Movie.Interface";
import "./Trending.css";
import { VideoContainer } from "./VideoContainer";
import React from "react";

interface TrendingProps {
    movieCategory: MovieInterface[];
}

export const Trending=({movieCategory}: TrendingProps)=>{
    return(
        <div className="trending-container">
            <h4>Trending</h4>
            <VideoContainer movieCategory={movieCategory}></VideoContainer>
        </div>
    )
}