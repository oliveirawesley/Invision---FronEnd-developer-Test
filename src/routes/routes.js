import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signin from '../views/Signin/index';
import Signup from '../views/Signup';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Signin />
            </Route>
            <Route path="/signup" exact>
                <Signup/>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;