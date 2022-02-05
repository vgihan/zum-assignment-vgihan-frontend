import EventManager from "../core/eventManager";
import { button, div, input, textarea } from "../core/h";

function PostInputContainer() {
  return {
    template: () =>
      div({ class: "center-box container" }, [
        input({ type: "text", class: "writer-input", placeholder: "글쓴이" }),
        input({ type: "text", class: "title-input", placeholder: "글 제목" }),
        textarea({ placeholder: "내용을 입력하세요." }),
      ]),
  };
}

export default PostInputContainer;
