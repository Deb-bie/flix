import { useContext, useState } from "react";
import { signOut } from 'firebase/auth';
import { auth,db} from '../../firebase/Firebase';
import "./Navbar.scss";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import Logo from "../../assets/logo/logo.jpg"

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);


  const LogOut = async(e) => {
    await signOut(auth);
    navigate('/login')
  }


  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };



  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={Logo} alt="" />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="#" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="#" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>KID</span>
          <NotificationsIcon className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDownwardIcon className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => LogOut()}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
