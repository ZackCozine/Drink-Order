import React from 'react';

const Liquors = props => {

    const liquorList = props.drinkLiquors.length ? (
        // .map(liquor, index)
        props.drinkLiquors.map((liquor) => {
            return (
                <div className="collection-item" >
                {/* deleteDrinkLiquor({index}) */}
                    <span onClick={() => { props.deleteDrinkLiquor(liquor.id) }}>{liquor.name}</span>

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