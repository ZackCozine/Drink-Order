import React from 'react';

const Ingredients = ({ ingredients, deleteIngredient }) => {

    const ingredientList = ingredients.length ? (
        ingredients.map(ingredient => {
            return (
                <div className="collection-item" key={ingredient.id}>
                    <span onClick={() => { deleteIngredient(ingredient.id) }}>{ingredient.content}</span>
                </div>
            )
        })
    ) : (
            <p className="center">No ingredients yet</p>
        )
    return (
        <div className="ingredients collection">
            {ingredientList}
        </div>
    )
}

export default Ingredients;