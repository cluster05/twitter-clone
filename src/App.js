import { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Register from "./components/Register/Register";
import Layout from "./containers/Layout/Layout";
import Sidenav from "./containers/Sidenav/Sidenav";
import CreateTweetBox from './containers/Sidenav/CreateTweet/CreateTweetBox/CreateTweetBox';
import { TweetContext } from './Context/TweetContext';

const App = () => {

    const [authState, setAuthState] = useState(false);
    const [createTweet, setCreateTweet] = useState(false);



    return (
        <Router>
            {!authState ?
                <Register goWithGoogle={() => setAuthState(true)} /> :
                null
            }
            <div className="bg-gray-900 flex w-screen h-screen">
                <TweetContext.Provider value={{ changeCreateTweet: () => setCreateTweet(!createTweet) }}>
                    {createTweet ?
                        <CreateTweetBox /> :
                        null
                    }
                    <Sidenav />
                    <Layout />
                </TweetContext.Provider>
            </div>
        </Router >
    )
}

export default App;
