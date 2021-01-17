import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Sidenav from "./containers/Sidenav/Sidenav";

const App = () => {
    return (
        <Router>
            <div className="bg-gray-900 flex w-screen h-screen">
                <Sidenav />
                <Layout />
            </div>

        </Router>
    )
}

export default App;
