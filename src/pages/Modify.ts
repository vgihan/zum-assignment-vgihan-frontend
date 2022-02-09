import PostInputContainer from "../components/PostInputContainer";
import { div } from "../core/h";
import { Giact } from "../core/giact";
import Button from "../components/Button";
import { getPost, getRefreshPost, setPost } from "../api/post";
import { Router } from "../core/router";
import "../../public/css/write.scss";

function Modify(params: string[]) {
  const [writer, setWriter] = Giact.useState<string>("");
  const [title, setTitle] = Giact.useState<string>("");
  const [content, setContent] = Giact.useState<string>("");

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

  (async () => {
    const data = await getRefreshPost({ id: parseInt(params[0]) });
    setWriter(data[0].writer);
    setTitle(data[0].title);
    setContent(data[0].content);
  })();

  const postInputContainer = PostInputContainer().template;
  const button = Button().template;

  return {
    template: () =>
      div({ class: "page center-box" }, [
        postInputContainer(
          {
            writer: handleChangeWriter,
            title: handleChangeTitle,
            content: handleChangeContent,
          },
          writer(),
          title(),
          content()
        ),
        button({
          name: "제출",
          className: "submit-btn",
          onClick: handleClickSubmit,
        }),
      ]),
  };
}

export default Modify;
