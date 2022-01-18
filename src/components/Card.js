import React, {Component} from "react";
import "./Card.css"
import 'animate.css';

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            isLoading: true,
            imgUrl: '',
            stats:[],
            response:{}
        }
    }

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
            .then(response => response.json())
            .then(data => this.setState({response: data}))
            .finally(() => {
                this.setState({imgUrl: this.state.response.sprites.other.home.front_default})
                this.setState({stats: this.state.response.stats})
                this.setState({isLoading: false})
            })
    }

    render() {
        const {name, isLoading, imgUrl} = this.state;
        return(

            <div
                name={name}
                key={name}
                className="ma2 flip-card">
                <div className="flip-card-inner">
                    <div className="pa2 flip-card-front shadow-5 bg-gold">
                        {isLoading ? <div/> : <img alt="pokemon" src={imgUrl}/>}
                    </div>
                    <div className="flip-card-back shadow-5 bg-dark-blue">
                        <h1>{name.toUpperCase()}</h1>
                        {
                            this.state.stats.map(statistic => <p>{`${statistic.stat.name.toUpperCase()}: ${statistic.base_stat}`}</p>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;