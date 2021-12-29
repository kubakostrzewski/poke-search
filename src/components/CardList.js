import React from "react";
import Card from "./Card";
import "./CardList.css"

const CardList = ( {names} ) => {
    return (
        <div key={names} className='cardList'>
            {
                names.map(name => {
                    return (
                        <Card
                            name={name}
                        />
                    )

                })
            }
        </div>
    )
}

export default CardList;