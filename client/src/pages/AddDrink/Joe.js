import React from "react";
import ReactDOM from "react-dom";

const AllLiquors =  [
    {id: "asdfadsf45wgr1", name:"Captain Morgan",volume: 1},
    {id: "asdfadsf45wgr2", name:"Beefeeater",volume: 1},
    {id: "asdfadsf45wgr3", name:"Whiskey",volume: 1},
    {id: "asdfadsf45wgr4", name:"Vodka",volume: 1},
    {id: "asdfadsf45wgr5", name:"Beer",volume: 1},
    {id: "asdfadsf45wgr6", name:"Wine",volume: 1},
    {id: "asdfadsf45wgr7", name:"BarleyWine",volume: 1},
    {id: "asdfadsf45wgr8", name:"Mead",volume: 1},
];


const drink={name:"long island", liquors: [
{id: "asdfadsf45wgr1", name:"Captain Morgan",volume: 1},
{id: "asdfadsf45wgr2", name:"Beefeeater",volume: 1},
{id: "asdfadsf45wgr3", name:"Whiskey",volume: 1},
]}
class DrinkEditor extends React.Component{
state={
    drinkLiquor: [],
    selected: false,

}
componentDidMount() {
    this.setState({drinkLiquor:drink.liquors})
}
changeSelected = e => {
    this.setState({selected:e.target.value})
}
removeDrink = id =>  e => {
        this.setState({drinkLiquor: this.state.drinkLiquor.filter(drink=>drink.id!==id)})
    
    //this.setState()
}
addDrink = () => {
    const newDrink = this.props.AllLiquors.find(d=>d.id===this.state.selected)
    newDrink.volume=0
    this.setState({drinkLiquor: [...this.state.drinkLiquor, newDrink]})
}
finish = () => {
    this.props.onFinish(this.state.drinkLiquor)
}
render() {
    return (
    <div>
        {this.state.drinkLiquor.map((liquor) => (
        <div>
            <p>{liquor.name}</p><input value={liquor.volume}/>
            <button onClick={this.removeDrink(liquor.id)}>Delete</button></div>

        ))}
        <select onChange={this.changeSelected}>
        {this.props.AllLiquors.map((liquor,i) => (
            <option name={i} value={liquor.id}>{liquor.name}</option>
        ))}
        </select>
        <button onClick={this.addDrink}>Add</button>


    </div>
    )
}
};
ReactDOM.render(<DrinkEditor AllLiquors={AllLiquors}/>, document.getElementById("root"));



Collapse 