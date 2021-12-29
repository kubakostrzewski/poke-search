import React from "react";
import "./Header.css"

const Header = () => {
    return(
        <div className='header'>
            <img alt='pika'
                 src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
                 className='logo animate__animated animate__shakeX'/>
            <h1>Hi Pokemon Master!</h1>
        </div>
    )
}

export default Header;