import "./Viewers.css";
import VDisney from "../Assets/images/viewers-disney.png";
import VMarvel from "../Assets/images/viewers-marvel.png";
import VNational from "../Assets/images/viewers-national.png";
import VPixar from "../Assets/images/viewers-pixar.png";
import VStarwars from "../Assets/images/viewers-starwars.png";
import DisneyVideo from "../Assets/videos/1564674844-disney.mp4";
import PixarVideo from "../Assets/videos/1564676714-pixar.mp4";
import MarvelVideo from "../Assets/videos/1564676115-marvel.mp4";
import StartWarVideo from "../Assets/videos/1608229455-star-wars.mp4";
import NationalVideo from "../Assets/videos/1564676296-national-geographic.mp4";
import React from "react";

export const Viewers = () => {
    return (
        <div className="viewers-container">
            <div className="viewers-image-container">
                <img className="viewers-image" src={VDisney}></img>
                <video autoPlay={true} loop={true} playsInline={true}  muted={true}>
                    <source src={DisneyVideo} type='video/mp4'/>
                </video>    
            </div>
            <div className="viewers-image-container">
                <img className="viewers-image" src={VPixar}></img>
                <video autoPlay={true} loop={true} playsInline={true}  muted={true}>
                    <source src={PixarVideo} type='video/mp4'/>
                </video> 
            </div>
            <div className="viewers-image-container">
                <img className="viewers-image" src={VMarvel}></img>
                <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                    <source src={MarvelVideo} type='video/mp4'/>
                </video> 
            </div>
            <div className="viewers-image-container">
                <img className="viewers-image" src={VStarwars}></img>
                <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                    <source src={StartWarVideo} type='video/mp4'/>
                </video> 
            </div>
            <div className="viewers-image-container">
                <img className="viewers-image" src={VNational}></img>
                <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                    <source src={NationalVideo} type='video/mp4'/>
                </video> 
            </div>

        </div>
    )
}