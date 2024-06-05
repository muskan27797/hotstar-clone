import { useEffect, useState } from "react";
import { MOCK_MOVIES } from "../MockMovies";
import { MovieInterface } from "../Interface/Movie.Interface";

export const useSearchHook = ()=>{

    const [ searchMovie, setSearchMovie ] = useState<string>(""); 
    const [ movieSuggestionArray, setMovieSuggestionArray]= useState<MovieInterface[]>([]);
    let searchedMoviesSuggestion : MovieInterface []= [];

    useEffect(()=>{
        if(searchMovie.length > 0 ){
            searchedMoviesSuggestion = MOCK_MOVIES.movies.filter(movie=>{
                if(movie.title.toLowerCase().includes(searchMovie.toLowerCase())){
                  return true; 
                }   
                return false;
             })
        }
        setMovieSuggestionArray(searchedMoviesSuggestion);
    },[searchMovie]) 


    return{
        searchMovie,
        setSearchMovie,
        movieSuggestionArray,
        // setWatchList,
        // watchList
    }
}