import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './containers/Home/Home';
import Favorites from './containers/Favorites/Favorites';
import Navigation from './components/Navigation/Navigation';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Navigation />
                        <Switch>
                            <Route path='/favorites' component={Favorites} />
                            <Route path='/' component={Home} />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </Router>


            </div>
            
        );
    }
}

export default App;