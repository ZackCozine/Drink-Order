import React from "react"
const AddDrink = ({alcohols, deleteAlc}) => {
  
    const alcoholList = alcohols.length ? (
        alcohols.map(alcohol => {
            return (
                <div className="collection-item" key={alcohol.id}>
                <span>{alcohol.content}</span>
                <button onClick={() => {deleteAlc(alcohol.id)}}>Delete Ingredient</button>
                </div>
            )
        })
    ) : (
        <p className="center">You have no ingredients here.</p>
    )

    return (
        <div className="alcohols collection">
        {alcoholList}
        </div>
    )
    }

  export default AddDrink;