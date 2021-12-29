import {Component} from "react";
import Autocomplete from "./components/Autocomplete";
import CardList from "./components/CardList";
import Header from "./components/Header";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            searchFieldValue: '',
            allPokemons: []
        }
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=2000')
            .then(response => response.json())
            .then(data => data.results.map(result => result.name))
            .then(pokemonNames => this.setState({allPokemons: pokemonNames, filteredPokemons: pokemonNames}))
            .finally(() => this.setState( { isLoading: false }))
    }

    onSearchChange = (event) => {
        this.setState({ searchFieldValue: event.target.value } );
    }

    onClickAutocompleteItem = (event) => {
        this.setState({searchFieldValue: event.target.innerText})
    }

    render() {
        const { isLoading, allPokemons, searchFieldValue } = this.state;
        console.log('searchFieldValue', searchFieldValue)
        const filteredPokemons = allPokemons.filter(pokemon => pokemon.toLowerCase().includes(searchFieldValue.toLowerCase()))
        const pokemonsToDisplay = filteredPokemons.slice(0, 10)
        return isLoading ?
            <h1 className='tc'>Loading...</h1> :
            (
            <div>
                <Header />
                <Autocomplete
                    searchChange={this.onSearchChange}
                    clickItem={this.onClickAutocompleteItem}
                    items={pokemonsToDisplay}
                    searchFieldValue={searchFieldValue}
                />
                <CardList
                    names={pokemonsToDisplay}
                />
            </div>
        )
    }
}

export default App;