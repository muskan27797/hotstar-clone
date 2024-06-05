import React from "react"
import "./MovieCard.css"
import { MovieInterface } from "../Interface/Movie.Interface";
import { useNavigate } from "react-router-dom";

interface MovieCardProps{
    movieCategory: MovieInterface[];
}

export const MovieCard = ({movieCategory}: MovieCardProps) => {
    const navigate = useNavigate();
    return (
        <div className="content-container">
            {movieCategory.map(movie => {
                return (
                    <div className="image-container" onClick = {() => navigate(`/detail/${movie.id}`, { state: { movie }})} >
                        <img className="images" src={movie.cardImg} alt={movie.title}></img>
                    </div>
                )
            })}
        </div>
    )
}
