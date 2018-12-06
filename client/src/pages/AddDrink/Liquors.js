import React from 'react';

const Liquors = props => {

    const liquorList = props.drinkLiquors.length ? (
        props.drinkLiquors.map((liquor, index) => {
            return (
                <div className="collection-item" >
                    <span onClick={() => { props.deleteDrinkLiquor({ index }) }}>{liquor.name}</span>

                </div>
            )
        })
    ) : (
            <p className="center">No liquors yet</p>
        )
    return (
        <div className="liquors collection">
            {liquorList}
        </div>
    )
}

export default Liquors;