import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Title from './Title'
import StarWars from './StarWars'
import reducers from './reducers'

const store = createStore(reducers)

export default function Home() {
    return (
        <Provider store={store}>
            <div className="Home">
                <div className="homeTitle">
                    <h1>FEW 2.3 Final - </h1>
                    <Title str='Ariane Evans' /> 
                </div>
                <StarWars />
            </div>
        </Provider>
    )
}