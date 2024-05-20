import React from "react"
import "./VideoContainer.css"
import { MovieInterface } from "../Interface/Movie.Interface";
import { useNavigate } from "react-router-dom";

interface VideoContainerProps {
    movieCategory: MovieInterface[];
}

export const VideoContainer = ({movieCategory}: VideoContainerProps) => {
    const navigate = useNavigate();
    return (
        <div className="content-container">
            {movieCategory.map(movie => {
                return (
                    <div className="image-container" onClick = {() => navigate(`detail/${movie.id}`)} >
                        <img className="recommended-images" src={movie.cardImg}></img>
                    </div>
                )
            })}
        </div>
    )
}
