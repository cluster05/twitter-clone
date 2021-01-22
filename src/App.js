import { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Register from "./components/Register/Register";
import Layout from "./containers/Layout/Layout";
import Sidenav from "./containers/Sidenav/Sidenav";

const App = () => {

    const [authState, setAuthState] = useState(false);

    return (
        <Router>
            {
                !authState ?
                    <Register goWithGoogle={() => setAuthState(true)} /> :
                    <div className="bg-gray-900 flex w-screen h-screen">
                        <Sidenav />
                        <Layout />
                    </div>
            }
        </Router >
    )
}

export default App;
