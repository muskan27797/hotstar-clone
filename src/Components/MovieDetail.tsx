import { Header } from "./Header";
import "./MovieDetail.css"

export const MovieDetail = () => {
    return(
        <>
        <Header></Header>
        <div className="moviedetail-container">
            <div className="movie-img-container">
                <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg"/>
            </div>
            <div className="movie-img-title">
                <img alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DDFF0FDF457E092EE53149CE7DB5BD14CB97E27B92D2D087E7C687B4E3073DE2/scale?width=1440&aspectRatio=1.78"/>
            </div>
            <div className="movie-description-container">
                <div className="movie-description">Content</div>
            </div>
        </div>
        </>
       
    )
}