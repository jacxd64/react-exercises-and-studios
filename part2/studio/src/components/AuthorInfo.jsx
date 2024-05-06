import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
   return(
    <div>
      {recipedata[0].author}
      <img src={recipedata[0].authorImage} alt={recipedata[0].author} className="authorImage" />
      <a href={recipedata[0].website}>Recipe Website</a>
    </div>
   )
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 