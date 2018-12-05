import React from 'react';

const Liquors = ({ liquors, deleteLiquor }) => {

    const liquorList = liquors.length ? (
        liquors.map(liquor => {
            return (
                <div className="collection-item" key={liquor.id}>
                    <span onClick={() => { deleteLiquor(liquor.id) }}>{liquor.content}</span>
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