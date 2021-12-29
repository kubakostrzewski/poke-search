import React, {Component} from "react";
import './Autocomplete.css'

const Autocomplete = ( {items, searchChange, clickItem, searchFieldValue} ) => {


    const onClickInput = (event) => {
        event.target.parentNode.querySelector('ul').style.display = 'block';
    }

    const onInputFocusLost = (event) => {
        setTimeout(() => {  event.target.parentNode.querySelector('ul').style.display = 'none' }, 200);
    }

        return (
            <div className='autocomplete'>
                <input
                    placeholder='Find your pokemon!'
                    className='pa3 tc w-100'
                    type='search'
                    onChange={searchChange}
                    onClick={onClickInput}
                    onBlur={onInputFocusLost}
                    value={searchFieldValue}/>
                <ul>
                    {
                        items.map((item, index) => <li key={index} onClick={clickItem}
                                                               className='pa3 tc'>{item}</li>)
                    }
                </ul>
            </div>
        )
}

export default Autocomplete;