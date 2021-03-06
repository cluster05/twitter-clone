import { Switch, Route, Redirect } from 'react-router-dom';
import Feed from './../Feed/Feed';
import Trending from './../Trending/Trending';
import Notification from './../Notification/Notification';
import './Layout.css';

const Layout = () => {

    return (

        <div className="h-screen w-full overflow-y-scroll scrollbar" >
            <Switch>
                <Route path="/feed">
                    <Feed />
                </Route>
                <Route path="/trending">
                    <Trending />
                </Route>
                <Route path="/notification">
                    <Notification />
                </Route>
                <Route exact path="/">
                    <Redirect to="/feed" />
                </Route>
            </Switch>
        </div>

    )
}

export default Layout;
