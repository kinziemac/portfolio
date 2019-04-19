import React, { Component }  from "react";
import SplashLanding from "./Containers/Landing/SplashLanding";
import AboutLanding from "./Containers/Landing/About/AboutLanding";
import App from "App"

import { Route } from 'react-router-dom'


const routes = (
    <Route path="/">
        <Route component={App}>
            <Route path="/splash" component={SplashLanding} />
            <Route path="/about" component={AboutLanding} />
        </Route>
    </Route>
)

export default routes