import React, {useRef, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom"
import Axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import "./Popular.scss";


const api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgpath = "https://image.tmdb.org/t/p/w1280"

const Popular = () => {

  const navigate = useNavigate();

  const sliderRef = useRef(null);
  const [movies, setMovies] = useState([]);

  const trailer = "../../assets/video/sunset.mp4";

  useEffect(() =>{
    Axios.get(api)
    .then(res => res.data)
    .then(data => {
      const movies = data.results;
      setMovies(movies)
    });
  },[])

  const handleWatch = () => {
    navigate("/watch")
  }


  const renderSlides = () => 
    movies.map(movie => (
      <div className="listItem" onClick={handleWatch} >
        <img src={imgpath + movie.poster_path} alt="movie" />
      </div>
    )
  );

  const sliderSettings = {
    ref: sliderRef,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,

    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    }]
  }

    

  return (
    <div className="list">
      <div className="another">
        <div className="featuredWrapper">
        <span className="listTitle">Popular Movies</span>
          <div style={{display: "flex"}}>
            <button className="sliderLeft button" onClick={() => sliderRef.current.slickPrev()}>
              <ArrowBackIosIcon />
            </button>
            <button className="sliderRight button" onClick={() => sliderRef.current.slickNext()}>
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>

        <div style={{ margin:10 }}>
          <Slider {...sliderSettings} >
            {renderSlides()}
          </Slider>
        </div>
      </div>
      </div>
  )
}

export default Popular