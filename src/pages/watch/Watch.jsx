import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import { Link, useLocation } from "react-router-dom";
import "./Watch.scss";


import Trailer from "../../assets/video/sunset.mp4";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackIos />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={Trailer} />
    </div>
  );
}
