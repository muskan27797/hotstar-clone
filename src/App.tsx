import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from './Components/Login';
import { Home } from './Components/Home';
import React, { createContext, useState } from 'react';
import { MovieDetail } from './Components/MovieDetail';
import { SearchMovie } from './Components/SearchMovie';
import { WatchList } from './Components/WatchList';
import { IUserLoginContext, IWatchListContext, MovieInterface } from './Interface/Movie.Interface';
import { useUserInfoHook } from './Hooks/useUserInfoHook';
import { MovieType } from './Components/MovieType';
import { PlayMovie } from './Components/PlayMovie';


export const WatchListContext = createContext<IWatchListContext>({
  watchList: [],
  setWatchList: () => {}
});


export const UserLoginContext = createContext<IUserLoginContext>({
  userDetail: { name:"", email:"", photo:""},
  isUserLoggedIn: false,
  handleAuth: ()=> {}
});

function App() {
  const [ watchList, setWatchList ] = useState<MovieInterface[]>([]);
  const {isUserLoggedIn, handleAuth, userDetail} = useUserInfoHook();
  console.log("watchList from app File", watchList)
  return (
    <div className="App"> 
    <UserLoginContext.Provider value = {{userDetail, isUserLoggedIn, handleAuth}}>
    <WatchListContext.Provider value = {{watchList, setWatchList}}>
       <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/detail/:id" element={<MovieDetail/>}/>
          <Route path="/in/explore" element={<SearchMovie/>}/>
          <Route path="/watchList" element ={<WatchList/>}/>
          <Route path="/movie/:type" element ={<MovieType/>}/>
          <Route path="/detail/:id/:type/:id/watch" element={<PlayMovie/>}/>
       </Routes>
     </WatchListContext.Provider>
     </UserLoginContext.Provider>
    </div>
  );
}

export default App;
