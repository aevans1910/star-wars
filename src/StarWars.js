import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addCharacter } from './actions'

import CharData from './CharData'
import CharList from './CharList';

import './StarWars.css'

class StarWars extends Component{
    constructor(props) {
        super(props) 
        this.state = {
            inputValue: '1',
            SWData: null,
        }
    }

    async handleSubmit(e) {
        e.preventDefault()
        const num = this.state.inputValue
        const url = `https://swapi.dev/api/people/${num}/`
        const data = await fetch(url)
        const res = await data.json()
        console.log(res)
        const hwdata = await fetch(res.homeworld)
        const hwres = await hwdata.json()
        res.homeworld = hwres.name
        this.setState({ SWData: res })
    }

    render() {
        const {SWData} = this.state
        return (
            <div className="StarWars">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input 
                        value={this.state.num} 
                        onChange={e => this.setState({ inputValue: e.target.value })}
                        type="text" 
                        placeholder="enter number"
                    />

                    <button type="submit">Submit</button>
                </form>

                <CharData SWData = {SWData} />
                <button onClick={(e) => {
                    this.props.addCharacter(this.state.SWData)
                }}>Save</button>

                <CharList characters= {this.props.characters}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
  }
  
  const mapDispatchToProps = () => {
    return {
      addCharacter
    }
  }

export default connect(mapStateToProps, mapDispatchToProps())(StarWars);