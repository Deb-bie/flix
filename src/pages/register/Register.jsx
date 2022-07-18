import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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


  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const loginClick = () => {
    navigate('/login')
  };

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      const register = await createUserWithEmailAndPassword(auth, email, password);

      console.log(password)

      await updateProfile(auth.currentUser, {
        displayName: username
      });

      await setDoc(doc(db, 'users', register.user.uid), {
        uid: register.user.uid,
        username: username,
        email: email, 
        password: password, 
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
        displayName: username,
      });

      navigate("/login");
    } catch (err) {}
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={Logo} alt="" />
          <div>
            <button className="loginbutton" onClick={loginClick}>Sign In</button>
          </div> 

          
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
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input second" autoComplete="off">
            <input type="username" placeholder="Username" ref={usernameRef} autoComplete="off" />
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
