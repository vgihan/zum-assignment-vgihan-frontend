import "../../public/css/write.scss";
import Button from "../components/Button";
import PostInputContainer from "../components/PostInputContainer";
import { div } from "../core/h";

function Write() {
  const postInputContainer = PostInputContainer().template;
  const button = Button().template;

  const handleClickSubmit = () => {
    console.log("제출");
  };

  return {
    template: () =>
      div({ class: "page center-box" }, [
        postInputContainer(),
        button({
          name: "제출",
          className: "submit-btn",
          onClick: handleClickSubmit,
        }),
      ]),
  };
}

export default Write;
