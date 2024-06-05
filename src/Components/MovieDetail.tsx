import { Header } from "./Header";
import "./MovieDetail.css";
import PlayIconBlack from "../Assets/images/play-icon-black.png"
import PlayIconWhite from "../Assets/images/play-icon-white.png"
import GroupIcon from "../Assets/images/group-icon.png";
import { useLocation, useNavigate } from "react-router-dom";
import { IWatchListContext, MovieInterface } from "../Interface/Movie.Interface";
import { UserLoginContext, WatchListContext } from "../App";
import { useContext, useState } from "react";
import { useUserInfoHook } from "../Hooks/useUserInfoHook";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MovieDetail = () => {
    const location = useLocation();
    const { movie } = location.state;
    const movieData = movie as MovieInterface;
    const { userDetail } = useContext(UserLoginContext);
    const navigate = useNavigate(); 

    const { setWatchList, watchList } = useContext<IWatchListContext>(WatchListContext);


    const addToWatchList = (status: string) => {
        if(status === "AddMovieInWatchlist"){
            setWatchList(prevMovie => [...prevMovie, movieData]);
        }else {
            const filteredWatchList = watchList.filter(movie => movie.title !== movieData.title )
            setWatchList(filteredWatchList);
        }
        movieData.is_watchlisted = !movieData.is_watchlisted;
        // const data= JSON.parse(localStorage.getItem(userDetail.email ?? "") ?? "");
        // data.push(movieData.title);
        // localStorage.setItem(userDetail.email ?? "", JSON.stringify(data));
    }

    return (
        <>
            <Header></Header>
            <div className="moviedetail-container">
                <div className="movie-img-container">
                    <img alt="" src={movieData.backgroundImg} />
                </div>
                <div className="movie-img-title">
                    <img alt="" src={movieData.titleImg} />
                </div>
                <div className="movie-description-container">
                    <div className="movie-buttons">
                        <div className="movie-button play" onClick={() => navigate(`/detail/${movieData.id}/${movieData.title}/${movieData.id}/watch`)}>
                            <img src={PlayIconBlack} alt=""></img>
                            <span>Play</span>
                        </div>
                        <div className="movie-button trailer">
                            <img src={PlayIconWhite} alt=""></img>
                            <span>Trailer</span>
                        </div>
                        {!!movieData.is_watchlisted ?
                            <div className="add-list" onClick={() => addToWatchList("RemoveMovieInWatchList")} aria-tooltip="Added to watchlist">
                                <FontAwesomeIcon className="icon" icon={faCheck}></FontAwesomeIcon>
                                <div className="tooltip-text" >Added to watchlist</div>
                            </div> :
                            <div className="add-list" onClick={() => addToWatchList("AddMovieInWatchlist")}>
                                <span />
                                <span />
                                <div className="tooltip-text">WatchList</div>
                            </div>}

                    </div>
                    <div className="short-description"> {movieData.subTitle}</div>
                    <div className="description">{movieData.description}</div>
                </div>
            </div>
        </>
    )
}