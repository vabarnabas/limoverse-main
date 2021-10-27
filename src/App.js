import './App.css';

//Components
import News from './components/News';
import Login from './components/Login';

//Resources
import limoverseLogo from './resources/limoverse_white.svg';
import { HiFingerPrint, HiLogout, HiStatusOffline } from 'react-icons/hi';
import { FaSignOutAlt } from 'react-icons/fa'

//Hooks & Others
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import { useState, useEffect } from 'react';
import { getAuth, signOut, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
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

  const onSignOut = () => {
      signOut(auth);
  }

  return (
    <div className="bg-primary h-screen overflow-hidden select-none">
      {isLogin ? (user ? '' : <Login onClick={() => setLogin(false)} auth={auth}/>) : ''}
      <News firestore={firestore}/>
      <div className="text-white fixed bottom-2 left-3 cursor-default bg-tertiary py-1 px-3 text-sm rounded-md"><p className="">limoverse 2.0.0 dev</p></div>
      <div className="fixed top-0 left-0 h-12 bg-tertiary w-screen flex justify-center items-center shadow-md">
        <img src={limoverseLogo} alt="" className="h-24 mr-auto ml-6" />
        {user ?
        <button onClick={onSignOut} className="bg-white py-1 px-4 ml-auto mr-6 rounded-md flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary"><HiStatusOffline className="mr-2"/>Kijelentkezés</button> : 
        <button onClick={() => setLogin(true)} className="bg-white py-1 px-4 ml-auto mr-6 rounded-md flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary"><HiFingerPrint className="mr-2"/>Bejelentkezés</button>
        } 
        </div>
    </div>
  );
}

export default App;
