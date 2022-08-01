import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, Timestamp, doc } from "firebase/firestore"; 


import { auth, db} from '../../firebase/Firebase';
import Logo from "../../assets/logo/logo.jpg";
import "./Register.scss";


export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);


  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };


  const handleFinish = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}, Username: ${username}`);
    createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
      console.log('save user');
      setDoc(doc(db, 'users', userCredentials.user.uid), {
        uid: userCredentials.user.uid,
        username, email, password, createdAt: Timestamp.fromDate(new Date()), isOnline: true, displayName: username
      }).then(navigate("/home"))
    }).catch(err => console.log(err.message))
  }


  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={Logo} alt="" />
          <Link to="/login" style={{textDecoration: "none"}}>
            <div>
              <button className="loginbutton">Sign In</button>
            </div>
          </Link> 
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" required placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}> Get Started </button>
          </div>
        ) : (
          <form className="input second" autoComplete="off" onSubmit={handleFinish}>
            <input type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
            {/* <button className="registerButton" onClick={handleFinish}>
              Start
            </button> */}

            {loading ? (
              <button className="registerButton" style={{backgroundColor: "green"}} >Starrting</button>
            ) : (
              <button className="registerButton" style={{backgroundColor: "green"}}>Start</button>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
