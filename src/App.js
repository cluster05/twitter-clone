import Layout from "./containers/Layout/Layout";
import Sidenav from "./containers/Sidenav/Sidenav";

const App = () => {
    return (
        <div className="bg-gray-900 flex">
            <Sidenav />
            <Layout />
        </div>
    )
}

export default App;
