import { useContext, useEffect } from "react"
import { UserLoginContext, WatchListContext } from "../App"
import { IWatchListContext } from "../Interface/Movie.Interface";
import "./Watchlist.css"
import { MovieCard } from "./MovieCard";
import { Header } from "./Header";

export const WatchList = () => {

  const {watchList} = useContext<IWatchListContext>( WatchListContext);
  const { userDetail } = useContext(UserLoginContext);

  useEffect(()=>{
    const data = localStorage.getItem(userDetail.email ?? "");
  },[])

    return(
        <div className="watchlist-container">
           <Header watchlist={false}></Header>
           <div className="watchlist-header">
               WatchList
           </div>
           <div className="watchlist-items">
               <MovieCard movieCategory={watchList}></MovieCard>
           </div>
          
        </div>
    )
}