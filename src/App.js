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

                const payload = {
                    name: result.user.displayName,
                    email: result.user.email,
                    photoURL: result.user.photoURL
                };

                const notificationsPaylaod = {
                    title: 'Welcome ' + result.user.displayName + ' to twitter clone app. This app is build by Ajay Kumbhar to learn react skill. Take tour of this app. Have fun with your friend. Don\'t misuse it otherwise you will be block by system. Have a great day.',
                    created_at: Date.now(),
                }
                const timeStamp = Date.now() + '-notification-' + Math.floor(Math.random() * 10000000)

                firebase.database().ref('/users/' + result.user.uid + '/info').set(payload);
                firebase.database().ref('/users/' + result.user.uid + '/notifications/' + timeStamp).set(notificationsPaylaod);

            }).catch((error) => {
                alert(error.message)
            });
    }

    const signOut = () => {
        firebase.auth().signOut();
        setAuthState(false);
    }

    return (
        <Router>
            {
                !authState ?
                    <Register signInWithGoogle={signInWithGoogleHandler} /> :
                    <div className="bg-gray-900 flex w-screen h-screen">
                        <Sidenav signOut={signOut} />
                        <Layout />
                    </div>
            }
        </Router >
    )
}

export default App;
