import {RandomMovies} from "../../data/Data.js"

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import { useEffect, useState } from "react";
import "./Featured.scss";


import Movie from "../../assets/movies/img1.jpg";



export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  const data = RandomMovies;

  return (
    <div className="featured">

      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div> 
      )}
      
{/* 
      {
        data.map(content => {
          <>
            <img src={content.img} alt="" />
            <div className="info">
              <img src={content.imgTitle} alt="" />
              <span className="desc">{content.desc}</span>
              <div className="buttons">
                <button className="play">
                  <PlayArrowIcon />
                  <span>Play</span>
                </button>
                <button className="more">
                  <InfoIcon />
                  <span>Info</span>
                </button>
              </div>
            </div>
          </>
        } )
      } */}

<img src={Movie} alt="movie" />


      <div className="info">
        {/* <img src={Movie} alt ="alt" /> */}
        <h1>Gruu</h1>
        <span className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Asperiores aut fugit autem ex fugiat. Voluptates laborum 
          ipsa sint quasi ad?
        </span>

        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoIcon />
            <span>Info</span>
          </button>
        </div>
      </div>




    </div>
  );
}
