import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { HomeScreen } from '../components/Screens/HomeScreen';
import { SearchScreen } from '../components/Screens/SearchScreen';
import { BookScreen } from '../components/Screens/BookScreen';
import { Nav } from '../components/Navigation/Nav';

const AppRouter = () => {
    return (
        <>
                <Router>
                    <Nav />
                    <div className="m-3">
                        <Switch>
                            <Route exact path="/Home" component={HomeScreen} />
                            <Route exact path="/Search" component={SearchScreen} />
                            <Route exact path="/Book" component={BookScreen} />
                            <Redirect to="/" />
                        </Switch>

                    </div>


                </Router>
            
        </>
    );
}

export default AppRouter;
