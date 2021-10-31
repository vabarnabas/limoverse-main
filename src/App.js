import './App.css';

//Components
import News from './components/News';
import Login from './components/Login';
import Navbar from './components/Navbar';

//Resources
import limoverseLogo from './resources/limoverse_white.svg';
import { HiFingerPrint, HiStatusOffline, HiIdentification } from 'react-icons/hi';

//Hooks & Others
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import { useState, useEffect } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { initializeApp } from "firebase/app"
import {initializeFirestore} from 'firebase/firestore'; 

//Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyABvq9i9E4DngeMWTIoPlsnoBz3cjtv82s",
  authDomain: "limoverse-3085c.firebaseapp.com",
  projectId: "limoverse-3085c",
  storageBucket: "limoverse-3085c.appspot.com",
  messagingSenderId: "751192749715",
  appId: "1:751192749715:web:5815d4e7219ff068a57f66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeFirestore(app, {experimentalForceLongPolling: true});

//Set Up Authentication
const auth = getAuth(app);

function App() {
  const[user] = useAuthState(auth);
  const firestore = getFirestore(app);

  const [isLogin, setLogin] = useState(false);

  return (
    <div className="bg-primary h-screen overflow-hidden select-none">
      <Navbar user={user} setLogin={setLogin} auth={auth}/>
      {isLogin ? (user ? '' : <Login onClick={() => setLogin(false)} auth={auth}/>) : ''}
      <News firestore={firestore} auth={auth}/>
      <div className="text-white fixed bottom-2 left-3 cursor-default bg-tertiary py-1 px-3 text-sm rounded-md"><p className="">limoverse 2.0.0 dev</p></div>

    </div>
  );
}

export default App;
