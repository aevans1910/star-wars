import React from 'react'
import Title from './Title'

export default function CharData (props) {
    if (props.SWData === null) {
        return null
    }
    const {name, height, mass, hair_color, eye_color, birth_year, homeworld} = props.SWData

    return (
        <div className="CharData">
            <Title str={name} />
            <div>
                <div>Name: {name}</div>
                <div>Height: {height}</div>
                <div>Mass: {mass}</div>
                <div>Hair color: {hair_color}</div>
                <div>Eye color: {eye_color}</div>
                <div>Birth year: {birth_year}</div>
                <div>Homeworld: {homeworld}</div>
            </div>
        </div>
    )
}