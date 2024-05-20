import { MovieCategory, MovieDataInterface, MovieInterface } from "../Interface/Movie.Interface";
import db from "../firebase";
import { useState, useEffect } from "react";

export const useDatabaseHook = ()=>{
    const [movieCategory, setMovieCategory] = useState<MovieCategory>({
        recommend: [],
        original: [],
        newDisney: [],
        trending: []
    })

    let recommend: MovieInterface[]=[];
    let original: MovieInterface[]=[];
    let newDisney: MovieInterface[]= [];
    let trending: MovieInterface[]=[];

    useEffect(()=>{
        db.collection('movies').onSnapshot((snapshot)=>{ 
        //    console.log(snapshot.docs.length);
           snapshot.docs.map(doc => {
            // console.log(doc.data());
            switch(doc.data().type){
                case "recommend":
                    recommend = [...recommend, {id: doc.id, ...doc.data() as MovieDataInterface}];
                    break;
                case "original" :
                    original = [...original, {id: doc.id, ...doc.data() as MovieDataInterface}];
                    break;
                case "new" :
                    newDisney = [...newDisney, {id: doc.id, ...doc.data() as MovieDataInterface }];
                    break;
                case "trending" :
                    trending = [...trending, {id: doc.id, ...doc.data() as MovieDataInterface}];
                    break;
            }
        });
        setMovieCategory(prevState => {
            return {
                ...prevState,
                recommend: recommend,
                newDisney: newDisney,
                original: original,
                trending: trending
            }
        })
        })
    },[movieCategory])

    return {
        movieCategory,
    }
}

