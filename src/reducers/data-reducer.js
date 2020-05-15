import {ADD_CHARACTER} from '../actions'

const dataReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_CHARACTER:
            const SWData = action.payload
            return [...state, SWData]

        default:
            return state
    }
}

export default dataReducer