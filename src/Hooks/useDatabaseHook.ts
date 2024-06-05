import { MovieCategory, MovieInterface, MovieType } from "../Interface/Movie.Interface";
import { MOCK_MOVIES } from "../MockMovies";
import { useState, useEffect } from "react";

export const useDatabaseHook = () => {
    const [movieCategory, setMovieCategory] = useState<MovieCategory>({
        recommend: [],
        original: [],
        newDisney: [],
        trending: [],
    })

    const [movieType, setMovieType] = useState<MovieType>({
        movie: [],
        series: []
    })

    useEffect(() => {
        let recommend: MovieInterface[] = [];
        let original: MovieInterface[] = [];
        let newDisney: MovieInterface[] = [];
        let trending: MovieInterface[] = [];
        let typeMovie: MovieInterface[] = [];
        let typeSeries: MovieInterface[] = [];


        MOCK_MOVIES.movies.forEach((movie, index) => {
            switch (movie.type) {
                case "recommend":
                    recommend = [...recommend, { ...movie as MovieInterface }];
                    break;
                case "original":
                    original = [...original, { ...movie as MovieInterface }];
                    break;
                case "new":
                    newDisney = [...newDisney, { ...movie as MovieInterface }];
                    break;
                case "trending":
                    trending = [...trending, { ...movie as MovieInterface }];
                    break;
                default: break;
            }

            switch (movie.category) {
                case "movie":
                    typeMovie = [...typeMovie, { ...movie as MovieInterface }];
                    break;
                case "series":
                    typeSeries = [...typeSeries, { ...movie as MovieInterface }];
                    break;
                default: break;
            }
        })
        setMovieCategory(prevState => {
            return {
                ...prevState,
                recommend: recommend,
                newDisney: newDisney,
                original: original,
                trending: trending
            }
        })

        setMovieType(prevState => {
            return {
                ...prevState,
                movie: typeMovie,
                series: typeSeries
            }
        })
    }, [])

    // db.collection('movies').onSnapshot((snapshot)=>{ 
    //    console.log(snapshot.docs.length);
    //    snapshot.docs.map(doc => {
    //     // console.log(doc.data());
    //     switch(doc.data().type){
    //         case "recommend":
    //             recommend = [...recommend, {id: doc.id, ...doc.data() as MovieDataInterface}];
    //             break;
    //         case "original" :
    //             original = [...original, {id: doc.id, ...doc.data() as MovieDataInterface}];
    //             break;
    //         case "new" :
    //             newDisney = [...newDisney, {id: doc.id, ...doc.data() as MovieDataInterface }];
    //             break;
    //         case "trending" :
    //             trending = [...trending, {id: doc.id, ...doc.data() as MovieDataInterface}];
    //             break;
    //     }
    // });
    //     setMovieCategory(prevState => {
    //         return {
    //             ...prevState,
    //             recommend: recommend,
    //             newDisney: newDisney,
    //             original: original,
    //             trending: trending
    //         }
    //     })
    //     })
    // },[movieCategory])

    return {
        movieCategory,
        movieType
    }
}

