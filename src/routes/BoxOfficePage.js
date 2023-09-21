// src/routes/BoxOfficePage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './BoxOfficePage.css'; 

const BoxOfficePage = () => {
  const { movieCd } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '8119141e51340070c87116fea0a6cee2';
        const apiUrl = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${apiKey}&movieCd=${movieCd}`;

        const response = await axios.get(apiUrl);
        setMovieDetail(response.data.movieInfoResult.movieInfo);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [movieCd]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>영화 상세 정보</h2>
      <h3>{movieDetail.movieNm} ({movieDetail.movieNmEn})</h3>
      <p>개봉일: {movieDetail.openDt}</p>
      <p>장르: {movieDetail.genres.map(genre => genre.genreNm).join(', ')}</p>
      {/* 기타 영화 정보를 표시하세요 */}
    </div>
  );
};

export default BoxOfficePage;
