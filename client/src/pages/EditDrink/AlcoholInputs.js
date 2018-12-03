import React from "react"
const AlcoholInputs = ({alcohols, deleteAlc}) => {
  
    const alcoholList = alcohols.length ? (
        alcohols.map(alcohol => {
            return (
                <div className="collection-item" key={alcohol.id}>
                <span onClick={() => {deleteAlc(alcohol.id)}}>{alcohol.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You had no ingredients here.</p>
    )

    return (
        <div className="alcohols collection">
        {alcoholList}
        </div>
    )
    }

  export default AlcoholInputs;