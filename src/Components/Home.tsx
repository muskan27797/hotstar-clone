import { Header } from './Header';
import "./Home.css"
import { ImgSlider } from './ImgSlider';
import { Viewers } from './Viewers';
import { Recommands } from './Recommands';
import { NewDisneyVideo } from './NewDisneyVideo';
import { Originals } from './Originals';
import { Trending } from './Trending';
import { useDatabaseHook } from '../Hooks/useDatabaseHook';
import { Suspense, useRef } from 'react';

export const Home = () => {

  const { movieCategory } = useDatabaseHook();
  const originalRef = useRef<HTMLDivElement>(null);

  const scrollToOriginals = ()=>{
    if(originalRef.current){
      originalRef.current.scrollIntoView({behavior: "smooth"})
    }
  }

  return (
    <>
      <Header scrollToOriginals={scrollToOriginals} ></Header>
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
          <Originals ref={originalRef} movieCategory={movieCategory.original} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Trending movieCategory={movieCategory.trending} />
        </Suspense>
      </div>
    </>
  )
}