import React, {Component} from "react";
import "./Card.css"
import 'animate.css';

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            isLoading: true,
            imgUrl: ''
        }
    }

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
            .then(response => response.json())
            .then(data => data.sprites.other.home.front_default)
            .then(url => this.setState({imgUrl: url}))
            .finally(() => this.setState({isLoading: false}))
    }



    flipOnClick(name) {
        document.querySelector(`[name='${name}']`).classList.add('animate__flip')
        setTimeout(() => document.querySelector('.card').classList.remove('animate__flip'), 1000)
    }


    render() {
        const {name, isLoading, imgUrl} = this.state;
        return(
            <div name={name}
                 key={name}
                 className='pa2 ma2 bg-gold shadow-5 grow card animate__animated'
                 onClick={() => this.flipOnClick(name)}>
                {isLoading ? <div/> : <img alt="pokemon" src={imgUrl}/>}
            </div>
        )
    }
}

export default Card;