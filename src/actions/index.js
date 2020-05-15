export const ADD_CHARACTER = 'ADD_CHARACTER'

export const addCharacter = (SWData) => {
    return {
        type: ADD_CHARACTER,
        payload: {SWData}
    }
}