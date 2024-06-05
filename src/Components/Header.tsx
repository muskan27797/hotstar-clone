import "./Header.css";
import Logo from "../Assets/images/logo.svg";
import HomeIcon from "../Assets/images/home-icon.svg";
import SearchIcon from "../Assets/images/search-icon.svg";
import WatchList from "../Assets/images/watchlist-icon.svg";
import Originals from "../Assets/images/original-icon.svg";
import MovieIcon from "../Assets/images/movie-icon.svg";
import SeriesIcon from "../Assets/images/series-icon.svg";
import { useContext } from "react";
import { UserLoginContext } from "../App";
import { useNavigate } from "react-router-dom";
import { CONSTANTS } from "../CONSTANTS";

interface HeaderInputProps {
    scrollToOriginals?: () => void,
    watchlist?:boolean
}

export const Header = ({ scrollToOriginals, watchlist = true }: HeaderInputProps) => {

    const { isUserLoggedIn, handleAuth, userDetail } = useContext(UserLoginContext)
    const navigate = useNavigate();

    console.log("::: Muskan from Header ", isUserLoggedIn)
    return (
        <div className="headerContainer">
            <div className="hotstarLogo"  onClick={() => navigate('/home')}>
                <img src={Logo} alt="" />
            </div>
            {!isUserLoggedIn ? <button onClick={handleAuth} className="headerLogin">LOGIN</button> : <>
                <div className="headerMenu">
                    <div className="menu" onClick={() => navigate('/home')}>
                        <img src={HomeIcon} alt="" />
                        <span>HOME</span>
                    </div >
                    <div className="menu"  onClick={() => navigate("/in/explore")}>
                        <img src={SearchIcon} alt="" />
                        <span>SEARCH</span>
                    </div>
                    { watchlist && <div className="menu"  onClick={() => navigate("/watchList")}>
                        <img src={WatchList} alt="" />
                        <span>WATCHLIST</span>
                    </div>}
                    {scrollToOriginals && <div className="menu"  onClick={scrollToOriginals}>
                        <img src={Originals} alt="" />
                        <span>ORIGINALS</span>
                    </div> }
                    <div  className="menu"  onClick={() => navigate(`/movie/${CONSTANTS.MOVIE}`)}>
                        <img src={MovieIcon} alt="" />
                        <span>MOVIES</span>
                    </div>
                    <div className="menu"  onClick={()=> navigate(`/movie/${CONSTANTS.SERIES}`)}>
                        <img src={SeriesIcon} alt="" />
                        <span>SERIES</span>
                    </div>
                </div>
                <div className="logout-section">
                    {userDetail.photo && <img className="login-photo" src={userDetail.photo} alt={userDetail.name ?? ""} />}
                    <div className="sign-out" onClick={handleAuth}>
                        <span>Sign out</span>
                    </div>
                </div>
            </>}
        </div>

    );
}