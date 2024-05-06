import recipedata from "./recipe.json";
import "./styling.css";

function IngredientList() {
   const ListOfIngidiants = (props) => {
    return props.map((ing) => <li key={props.index}>{ing}</li>)
   };
   return <ul>{ListOfIngidiants(recipedata[0].ingredients)}</ul>;
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 