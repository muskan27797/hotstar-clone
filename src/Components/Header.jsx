import react from "react";
import "./Header.css";
import Logo from "../Assets/images/logo.svg";
import HomeIcon from "../Assets/images/home-icon.svg"

export const Header = () => {
return(
    <div className="headerContainer">
        <div className="hotstarLogo">
            <img src={Logo}/>
        </div>
        <div className="headerMenu">
       <a style={{textDecoration:"none"}} href="/home">
        <img src={HomeIcon}></img>
        <span >Home</span>
        </a>
       
        </div>
    </div>
      
);
}