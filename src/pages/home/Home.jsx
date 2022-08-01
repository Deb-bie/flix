import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./Home.scss";
import List from "../../components/list/List";
import Movie from "../../assets/movies/img1.jpg";

import {useState , useRef} from "react";


import { auth,db} from '../../firebase/Firebase';
import { collection, onSnapshot} from "firebase/firestore";
import { signOut } from 'firebase/auth';



import Popular from "../../components/popular/Popular";
import NewShows from "../../components/new_shows/NewShows"


const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  // console.log(auth.currentUser)




  // const [isMoved, setIsMoved] = useState(false);
  // const [slideNumber, setSlideNumber] = useState(0);
  // const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  
  // const listRef = useRef();

  // const handleClick = (direction) => {
  //   setIsMoved(true);
  //   let distance = listRef.current.getBoundingClientRect().x - 50;
  //   if (direction === "left") {
  //     setSlideNumber(slideNumber - 1);
  //     listRef.current.style.transform = `translateX(${230 + distance}px)`;
  //   }
  //   if (direction === "right") {
  //     setSlideNumber(slideNumber + 1);
  //     listRef.current.style.transform = `translateX(${-230 + distance}px)`;
  //   }
  // };



  return (
    <div className="home">
      <Navbar />
      <Featured  />
      <Popular />
      <NewShows />
     
    </div>
  );
};

export default Home;
