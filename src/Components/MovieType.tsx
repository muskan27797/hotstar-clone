import { MovieCard } from "./MovieCard";
import { useDatabaseHook } from "../Hooks/useDatabaseHook";
import { useParams } from "react-router-dom";
import "./MovieType.css";
import { Header } from "./Header";

export const MovieType = () => {

  const {type} = useParams(); 
   const { movieType } = useDatabaseHook();

    return(
        <div className="type-container">
           <Header></Header>
           <div className="type-heading">{type}</div>
           <div className="type-items">
           {type === "movie"? <MovieCard movieCategory={movieType.movie}/>  :  <MovieCard movieCategory={movieType.series}/>} 
           </div>
        </div>
    )
}