import { div } from "../core/h";

function Write() {
  return {
    template: () => div({ class: "write_page" }, ["Hello World !"]),
  };
}

export default Write;
