import { Header } from './Header';
import "./Home.css"
import { ImgSlider } from './ImgSlider';
import { Viewers } from './Viewers';
import { Recommands } from './Recommands';
import { NewDisneyVideo } from './NewDisneyVideo';
import { Originals } from './Originals';
import { Trending } from './Trending';
import { useDatabaseHook } from '../Hooks/useDatabaseHook';
import React, { Suspense } from 'react';
import { useUserInfoHook } from '../Hooks/useUserInfoHook';

export const Home = () => {

  const { movieCategory } = useDatabaseHook();
  const { userDetail, handleAuth } = useUserInfoHook();

  return (
    <>
      <Header userDetail={userDetail} handleAuth={handleAuth}></Header>
      <div className='home-container'>
        <ImgSlider></ImgSlider>
        <Viewers />
        <Suspense fallback={<div>Loading...</div>}>
          <Recommands movieCategory={movieCategory.recommend} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <NewDisneyVideo movieCategory={movieCategory.newDisney} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Originals movieCategory={movieCategory.original} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Trending movieCategory={movieCategory.trending} />
        </Suspense>
      </div>
    </>
  )
}