import {Component} from "react";
import Autocomplete from "./components/Autocomplete";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFieldValue: '',
            allPokemons: [],
        }
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=2000')
            .then(response => response.json())
            .then(data => data.results.map(result => result.name))
            .then(pokemonNames => this.setState({allPokemons: pokemonNames}))
    }

    render() {
        const { allPokemons } = this.state;
        return !allPokemons.length ?
            <h1 className='tc'>Loading...</h1> :
            (
            <div className='tc'>
                <h1>hi Pokemon</h1>
                <Autocomplete
                    items={allPokemons}
                />
            </div>
        )
    }
}

export default App;