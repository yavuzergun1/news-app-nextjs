import { categories } from "../constants";
import Navlink from "./Navlink";

function Navlinks() {
    return (
        <nav>
            {
                categories.map((category) => (
                    <Navlink key={category} category={category} />
                ))
 }      
        </nav>
    )
}

export default Navlinks;
