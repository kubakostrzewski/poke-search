import React, {Component} from "react";
import './Autocomplete.css'
import Scroll from "./Scroll";

class Autocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFieldValue: '',
            items: this.props.items
        }
    }

    onSearchChange = (event) => {
        this.setState({searchFieldValue: event.target.value})
    }

    onClickItem = (event) => {
        this.setState({searchFieldValue: event.target.innerText})
    }

    filterItems() {
        return this.state.items.filter(item => item.toLowerCase().includes(this.state.searchFieldValue.toLowerCase()));
    }

    render() {
        const filteredItems = this.filterItems()
        let key = 0;
        return (
            <div>
                <input
                    className='pa3 tc'
                    type='search'
                    onChange={this.onSearchChange}
                    value={this.state.searchFieldValue}/>
                <Scroll>
                    <ul>
                        {
                            filteredItems.map(item => <li key={key++} onClick={this.onClickItem}
                                                          className='pa3 tc'>{item}</li>)
                        }
                    </ul>
                </Scroll>
            </div>
        )
    }
}

export default Autocomplete;