import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Register from "./components/Register/Register";
import Layout from "./containers/Layout/Layout";
import Sidenav from "./containers/Sidenav/Sidenav";
import firebase from 'firebase/app';
import 'firebase/auth';

const App = () => {

    const [authState, setAuthState] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            user ? setAuthState(true) : setAuthState(false);
        });
    }, [])

    const signInWithGoogleHandler = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                setAuthState(true);
            }).catch((error) => {
                alert(error.message)
            });
    }

    return (
        <Router>
            {
                !authState ?
                    <Register signInWithGoogle={signInWithGoogleHandler} /> :
                    <div className="bg-gray-900 flex w-screen h-screen">
                        <Sidenav />
                        <Layout />
                    </div>
            }
        </Router >
    )
}

export default App;
