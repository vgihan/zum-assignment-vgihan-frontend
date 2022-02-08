import { setPost } from "../api/post";
import { Giact } from "../core/giact";
import { div } from "../core/h";
import { Router } from "../core/router";
import Button from "./Button";
import InputText from "./InputText";
import Textarea from "./Textarea";

function PostInputContainer() {
  const [writer, setWriter] = Giact.useState<string>("");
  const [title, setTitle] = Giact.useState<string>("");
  const [content, setContent] = Giact.useState<string>("");

  const inputText = InputText().template;
  const textarea = Textarea().template;
  const button = Button().template;

  const checkAllInput = (): boolean => {
    return !(!writer() || !title() || !content());
  };
  const handleChangeWriter = (e: any) => {
    setWriter(e.target.value);
  };
  const handleChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };
  const handleChangeContent = (e: any) => {
    setContent(e.target.value);
  };
  const handleClickSubmit = () => {
    if (!checkAllInput()) return alert("모든 정보를 입력해주세요");
    setPost({ writer: writer(), title: title(), content: content() });
    Router.route("/");
  };

  return {
    template: () =>
      div({ class: "center-box container" }, [
        inputText({
          className: "writer-input",
          placeholder: "글쓴이",
          onChange: handleChangeWriter,
        }),
        inputText({
          className: "title-input",
          placeholder: "글 제목",
          onChange: handleChangeTitle,
        }),
        textarea({
          className: "content-input",
          placeholder: "내용을 입력하세요.",
          onChange: handleChangeContent,
        }),
        button({
          name: "제출",
          className: "submit-btn",
          onClick: handleClickSubmit,
        }),
      ]),
  };
}

export default PostInputContainer;
