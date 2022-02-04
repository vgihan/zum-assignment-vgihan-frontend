import { div } from "../core/h";
import "../../public/css/main.scss";

function Main() {
  return {
    template: () => div({ class: "main-page center-box" }, ["Hello World !"]),
  };
}

export default Main;
