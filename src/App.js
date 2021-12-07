import './App.css';

//Components
import News from './components/News';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Charge from './components/Charge';
import Damage from './components/Damage';
import Settings from './components/Settings'

//Hooks & Others
import 'firebase/compat/firestore'
import { useState } from 'react';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { initializeApp } from "firebase/app"
import {initializeFirestore} from 'firebase/firestore'; 
import HashGenerator from './components/HashGenerator';
import { Toaster } from 'react-hot-toast'

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
  const [token, setToken] = useState('');
  const [tokenState, setTokenState] = useState(false);
  const [vulogPassword, setVulogPassword] = useState(localStorage.getItem('vulogPassword'));
  const [windowSize, setWindowSize] = useState((window.innerWidth < 640 ? 'small' : (window.innerWidth < 768 ? 'medium' : 'large')))

  const getWindowSize = () => {
    window.innerWidth <= 640 ? setWindowSize('small') : (window.innerWidth <= 768 ? setWindowSize('medium') : setWindowSize('large'))
  }
  
  console.log(windowSize)

  window.addEventListener('resize', getWindowSize)

  return (
    <div className="bg-primary h-screen overflow-hidden select-none">
      <Toaster position="top-left"/>
      <Navbar user={user} setLogin={(login) => setLogin(login)} setPageState={(state) => setPageState(state)} auth={auth} />
      {isLogin ? (user ? '' : <Login onClick={() => setLogin(false)} auth={auth}/>) : ''}
      <div className="pt-12 h-full">
      {user ? (() =>
                        {switch(pageState) {
                            case 'News':
                              return <News firestore={firestore} auth={auth}/>;
                            case 'Hash':
                              return <HashGenerator firestore={firestore} auth={auth} user={user}/>;
                            case 'Menu':
                              return <Menu windowSize={windowSize} setPageState={(state) => setPageState(state)}/>;
                            case 'Profile':
                              return <Profile setPageState={(state) => setPageState(state)} setToken={(token) => setToken(token)} setVulogPassword={(vulogPassword) => setVulogPassword(vulogPassword)} setTokenState={(tokenState) => setTokenState(tokenState)} token={token} tokenState={tokenState} user={user} vulogPassword={vulogPassword}/>;
                            case 'Charge':
                              return <Charge windowSize={windowSize} firestore={firestore} auth={auth} user={user}/>;
                            case 'Damage':
                              return <Damage />;
                            case 'Settings':
                              return <Settings />;
                            default:
                              return null;
                        }})()  : ''
                    }
      </div>
      <div className="text-white fixed bottom-2 right-3 cursor-default bg-tertiary py-1 px-3 text-sm rounded-md"><p className="">limoverse 2.0.0 dev</p></div>
    </div>
  );
}

export default App;
