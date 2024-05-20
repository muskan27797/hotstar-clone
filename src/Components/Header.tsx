import { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../Assets/images/logo.svg";
import HomeIcon from "../Assets/images/home-icon.svg";
import SearchIcon from "../Assets/images/search-icon.svg";
import WatchList from "../Assets/images/watchlist-icon.svg";
import Originals from "../Assets/images/original-icon.svg";
import MovieIcon from "../Assets/images/movie-icon.svg";
import SeriesIcon from "../Assets/images/series-icon.svg";
import { UserDetail } from "../Interface/Movie.Interface";

interface HeaderInputProps{
    userDetail?: UserDetail,
    handleAuth?: () => void
}

export const Header = ({userDetail, handleAuth}: HeaderInputProps) => {
    return (
        <div className="headerContainer">
            <div className="hotstarLogo">
                <img src={Logo}  alt=""/>
            </div>
            {!userDetail?.name? <button onClick={handleAuth} className="headerLogin">LOGIN</button> : <>
            <div className="headerMenu">
                <a style={{ textDecoration: "none" }} href="/home">
                    <img src={HomeIcon} alt=""/>
                    <span>HOME</span>
                </a>
                <a style={{ textDecoration: "none" }} href="/search">
                    <img src={SearchIcon} alt=""/>
                    <span>SEARCH</span>
                </a>
                <a style={{ textDecoration: "none" }} href="/watchList">
                    <img src={WatchList} alt=""/>
                    <span>WATCHLIST</span>
                </a>
                <a style={{ textDecoration: "none" }} href="/originals">
                    <img src={Originals} alt=""/>
                    <span>ORIGINALS</span>
                </a>
                <a style={{ textDecoration: "none" }} href="/movies">
                    <img src={MovieIcon} alt=""/>
                    <span>MOVIES</span>
                </a>
                <a style={{ textDecoration: "none" }} href="/series">
                    <img src={SeriesIcon} alt=""/>
                    <span>SERIES</span>
                </a>
            </div>
            <div className="logout-section">
                { userDetail.photo && <img className="login-photo" src={userDetail.photo} alt={userDetail.name}/>}
                <div className="sign-out" onClick={handleAuth}>
                    <span>Sign out</span>
                </div>
            </div>
            </>}
        

        </div>

    );
}