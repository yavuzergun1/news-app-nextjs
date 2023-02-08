import { categories } from "../constants";
import Navlink from "./Navlink";

function Navlinks() {
  return (
    <nav>
      {categories.map((category) => (
        <Navlink key={category} category={category} isActive={true} />
      ))}
    </nav>
  );
}

export default Navlinks;
