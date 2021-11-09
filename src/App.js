import './App.css';

//Components
import News from './components/News';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Menu from './components/Menu';

//Hooks & Others
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import { useState } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { initializeApp } from "firebase/app"
import {initializeFirestore} from 'firebase/firestore'; 
import HashGenerator from './components/HashGenerator';

//Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCBzNwEVcGmlxKbkwEQghiLfP1Jp_qo6No",
  authDomain: "limoverse-main.firebaseapp.com",
  projectId: "limoverse-main",
  storageBucket: "limoverse-main.appspot.com",
  messagingSenderId: "567564750931",
  appId: "1:567564750931:web:ad97934e0cd98a70bd76a6"
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
  const [pageState, setPageState] = useState('Menu');

  return (
    <div className="bg-primary h-screen overflow-hidden select-none">
      <Navbar user={user} setLogin={(login) => setLogin(login)} setPageState={(state) => setPageState(state)} auth={auth} />
      {isLogin ? (user ? '' : <Login onClick={() => setLogin(false)} auth={auth}/>) : ''}
      {(() =>
                        {switch(pageState) {
                            case 'News':
                                return <News firestore={firestore} auth={auth}/>;
                            case 'Hash':
                                return <HashGenerator firestore={firestore} auth={auth} user={user}/>;
                            case 'Menu':
                                return <Menu setPageState={(state) => setPageState(state)}/>;
                            default:
                                return null;
                        }})()  
                    }
      <div className="text-white fixed bottom-2 left-3 cursor-default bg-tertiary py-1 px-3 text-sm rounded-md"><p className="">limoverse 2.0.0 dev</p></div>

    </div>
  );
}

export default App;
