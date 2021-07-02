import React from 'react'
import { Switch, Route } from 'react-router'

import {
    Home,
    Privacy,
    Terms,
    Medicine,
    Patient
} from './comtainers'

const MainRoute = () => (
    <Switch>
        <Route path='/'>
            <Medicine />
        </Route>
        <Route path='/medicine'>
            <Medicine />
        </Route>
        <Route path='/patient'>
            <Patient />
        </Route>
        <Route path='/privacy'>
            <Privacy />
        </Route>
        <Route path='/terms'>
            <Terms />
        </Route>
    </Switch>
)

export default MainRoute
