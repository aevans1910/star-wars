import React, { Component } from 'react'
import { connect } from 'react-redux'

import CharData from './CharData'
import Title from './Title'

class CharList extends Component {
    getList() {
        return this.props.characters.map((char, index) => {
            return (
                <div key={index}>
                    <Title str={char.SWData.name} />
                    Name: {char.SWData.name} <br />
                    Height: {char.SWData.height} <br />
                    Mass: {char.SWData.mass} <br />
                    Hair color: {char.SWData.hair_color} <br />
                    Eye color: {char.SWData.eye_color} <br />
                    Homeworld: {char.SWData.homeworld} <br />
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.getList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps)(CharList)