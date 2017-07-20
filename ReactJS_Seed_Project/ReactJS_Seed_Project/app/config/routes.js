import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';
import Robot from '../components/Robot/robotPage';
import Shipping from '../components/Shipping/shippingPage';


import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/main" />
            <Route path="robot" component={Robot}> </Route>
            <Route path="shipping" component={Shipping}> </Route>
        </Route>
    </Router>

);
