import { UPDATE_NAV_MODE } from '../actions'

const navMode = (state = false, action) => {
    switch (action.type) {
        case UPDATE_NAV_MODE:
            return action.data
        default:
            return state
    }
}

export default navMode