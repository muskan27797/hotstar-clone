import react from "react";
import "./Login.css";
import Logo1 from "../Assets/images/cta-logo-one.svg" 
import Logo2 from "../Assets/images/cta-logo-two.png" 
import { Header } from "./Header";
import { useUserInfoHook } from "../Hooks/useUserInfoHook";

export const Login = () => {
    const {handleAuth, userDetail} = useUserInfoHook() 
return(
    <div className="loginContainer">
        <Header handleAuth={handleAuth} userDetail={userDetail} ></Header>
        <div className="container">
            <div className="image1">
               <img className="logo1" src={Logo1}/>
            </div>
            <button className="login-btn" onClick={handleAuth}>GET ALL THERE</button>
            <div className="login-text">
                Get Premier Access to Raya and the Last Dragon for an additional fee with Disney+ subscription. As of 03/26/24, the price of Disney+ and The Disney Bundle will increase by $1.
            </div>
            <div className="image1">
               <img className="logo1" src={Logo2}/>
            </div>
        </div>
    </div>
      
);
}