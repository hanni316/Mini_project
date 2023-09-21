// src/App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes, } from 'react-router-dom';
import BoxOffice from './components/BoxOffice';
import BoxOfficePage from './routes/BoxOfficePage';
import Movie1 from './components/movie1';
import Movie2 from './components/movie2';
import VideoPlayer from './components/teaser';
import VideoPlayer2 from './components/teaser2';
import Footer from './components/footer';
import SlideShow from './components/banner';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">메인</Link>
            </li>
            <li>
              <Link to="/box-office">주간/주말 박스오피스</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/box-office" element={<BoxOffice />} />
          <Route path="/box-office/:movieCd" element={<BoxOfficePage />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <><div className="home">
      <header>
        <h2>Movie Info</h2>
        <h3>이달의 추천 영화</h3>
      </header>
      <hr />
      <div className='content1'>
        <div className='sinob'>
          <nav>
            <div>
              <Movie1 />
              <p><h2>오펜하이머</h2><br />
                미국의 물리학자 로버트 오펜하이머는 제 2차 세계대전에 쓸 <br />핵무기를 개발하기 위한 비밀 프로젝트 '맨해튼 프로젝트'를 주도하게 된다.</p>
            </div>
            <br />
            <div>
            <Movie2 />
              <p><h2>베니스 유령 살인사건</h2><br /></p>
              미스터리한 심령술사 '조이스 레이놀즈'가 죽은 영혼의 목소리를<br /> 전하는 광경을 보며 혼란에 빠지게 된다. <br />용의자가 '유령'인 목격자 없는 살인, 죽음은 시작에 불과했다!
            </div>
          </nav>
        </div>
      </div>
      <div>
        <article>
          <VideoPlayer />      
          <VideoPlayer2 />
        </article>
        <div>
          <nav>
            
          </nav>
        </div>
        <div>
          <nav className='right'>
            <h3>영화 예매</h3>
            <SlideShow />          
          </nav>
        </div>
      </div>
      
      <div>
        <footer className='footer'>
        <Footer></Footer>
        </footer>
      </div>
    </div>
    </>
  );
}


export default App;

