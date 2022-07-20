import "./ListItem.scss";
import {MovieList} from "../../data/Data.js"

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Movie from "../../assets/movies/img1.jpg";
import Trailer from "../../assets/video/sunset.mp4";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  // const [movie, setMovie] = useState({});

  const trailer = "../../assets/video/sunset.mp4";

    const data = MovieList;

  return (
    <div className="listItem"
      style={{left: isHovered && index * 225 -50}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={Movie} alt="movie" />

      {isHovered && (
        <>
          <video src={Trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon />
              <AddIcon />
              <ThumbDownAltIcon />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className='desc'>
              lorem
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
      
    </div>
















    // <Link to="#">
    //   <div
    //     className="listItem"
    //     style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    //     onMouseEnter={() => setIsHovered(true)}
    //     onMouseLeave={() => setIsHovered(false)}
    //   >
    //     {
    //         data.map(movie => (
    //             <>
    //                 <img src={movie?.image} alt="" />
    //                 {isHovered && (
    //                     <>
    //                         <video src={movie.trailer} autoPlay={true} loop />
    //                         <div className="itemInfo">
    //                         <div className="icons">
    //                             <PlayArrowIcon className="icon" />
    //                             <AddIcon className="icon" />
    //                             <ThumbUpAltIcon className="icon" />
    //                             <ThumbDownAltIcon className="icon" />
    //                         </div>
    //                         <div className="itemInfoTop">
    //                             <span>{movie.duration}</span>
    //                             <span className="limit">+{movie.limit}</span>
    //                             <span>{movie.year}</span>
    //                         </div>
    //                         <div className="desc">{movie.desc}</div>
    //                         <div className="genre">{movie.genre}</div>
    //                         </div>
    //                     </>
    //                 )}
    //             </>
    //         ))
    //     }
    //   </div>
    // </Link>
  );
}
