import PostInputContainer from "../components/PostInputContainer";
import { div } from "../core/h";
import "../../public/css/write.scss";

function Write() {
  const postInputContainer = PostInputContainer().template;

  return {
    template: () => div({ class: "page center-box" }, [postInputContainer()]),
  };
}

export default Write;
