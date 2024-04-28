import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import { logo2 } from './assets';
import { Welcome, Home, CreatePost } from './page';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true, 
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <BrowserRouter>
      <div data-scroll-container ref={scrollRef}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;

