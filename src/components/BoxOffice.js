// src/components/BoxOffice.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BoxOffice.css';

const BoxOffice = () => {
  const [boxOfficeData, setBoxOfficeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // KOFIC Open API 주소와 키를 여기에 넣어주세요
        const apiKey = '8119141e51340070c87116fea0a6cee2';
        const apiUrl = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${apiKey}&targetDt=20230917`;

        const response = await axios.get(apiUrl);
        setBoxOfficeData(response.data.boxOfficeResult.weeklyBoxOfficeList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>주간/주말 박스오피스</h2>
      <ul>
        {boxOfficeData.map((movie, index) => (
          <li key={movie.movieCd}>
            <Link to={`/box-office/${movie.movieCd}`}>
            <strong>{index + 1}. {movie.movieNm}</strong>
            </Link>
            <p>매출액: {movie.salesAmt}원</p>
            <p>관객수: {movie.audiCnt}명</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoxOffice;
