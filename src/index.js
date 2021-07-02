import React from 'react'
import ReactDOM from 'react-dom'
import { Provider} from 'react-redux'

import './index.scss'
import store from './libraries/store'
import { Home } from './comtainers'

const rootElement = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    rootElement
)
