import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

  import { useRef, useState } from "react";
  import ListItem from "../listItem/ListItem";
  import "./List.scss";
  
  export default function List({ list }) {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  
    const listRef = useRef();
  
    const handleClick = (direction) => {
      setIsMoved(true);
      let distance = listRef.current.getBoundingClientRect().x - 50;
      if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
      }
      if (direction === "right" && slideNumber < 10 - clickLimit) {
        setSlideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      }
    };
    return (
      <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
          <ArrowBackIosIcon className="sliderArrow left" onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }} />
          <div className="container">
            <ListItem index={0} />
            <ListItem index={1}/>
            <ListItem index={2}/>
            <ListItem index={3}/>
            <ListItem index={4}/>
            <ListItem index={5}/>
            <ListItem index={6}/>
            <ListItem index={7}/>
            <ListItem index={8}/>
          </div>
          <ArrowForwardIosIcon className="sliderArrow right"  onClick={() => handleClick("right")}/>
        </div>








        {/* <span className="listTitle">{list.title}</span> */}
        {/* <div className="wrapper"> */}
          {/* <ArrowBackIosIcon */}
            {/* className="sliderArrow left" */}
            {/* onClick={() => handleClick("left")} */}
            {/* style={{ display: !isMoved && "none" }} */}
          {/* /> */}
          {/* <div className="container" ref={listRef}> */}
            {/* {list.content.map((item, i) => ( */}
              {/* <ListItem index={i} item={item} /> */}
            {/* ))} */}
          {/* </div> */}
          {/* <ArrowForwardIosIcon */}
            {/* className="sliderArrow right" */}
            {/* onClick={() => handleClick("right")} */}
          {/* /> */}
        {/* </div> */}
      </div>
    );
  }
  