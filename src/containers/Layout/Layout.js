
import { Switch, Route, Redirect } from 'react-router-dom';
import Feed from './../Feed/Feed';
import Trending from './../Trending/Trending';
import Notification from './../Notification/Notification';
import Bookmark from './../Bookmark/Bookmark';

const Layout = () => {
    return (
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
            <Route path="/bookmark">
                <Bookmark />
            </Route>
            <Route exact path="/">
                <Redirect to="/feed" />
            </Route>
        </Switch>
    )
}

export default Layout;
