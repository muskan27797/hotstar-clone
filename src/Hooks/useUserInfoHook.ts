import { useEffect, useState } from "react";
import { UserDetail } from "../Interface/Movie.Interface";
import { auth, provider } from "../firebase";
import {useNavigate} from "react-router-dom"

export const useUserInfoHook = ()=>{
    
    const [userDetail, setUserDetail] = useState<UserDetail>({
        name:"",
        email:"",
        photo:""
    })

    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
              if(user){
                setUserDetail({
                    name:  user.displayName,
                    email: user.email,
                    photo: user.photoURL
                })
                navigate('/home')
              }
        })
    },[userDetail.name])

    const handleAuth = () => {
        if(!userDetail.name){
            auth
            .signInWithPopup(provider)
            .then(result => {
                result.user && setUserDetail({
                    name:  result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                })
            })
            .catch(error  => console.log(error));
        }else if (userDetail.name){
            auth
            .signOut()
            .then(()=>{
                setUserDetail({
                    name:  "",
                    email: "",
                    photo: "" 
                })
                navigate('/')
            })
            .catch(error => console.log(error))
        }
    }

    return{
        handleAuth,
        userDetail,
        isUserLoggedIn: !!userDetail?.name,
    }
}