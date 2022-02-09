import { div } from "../core/h";
import List from "../components/List";
import Button from "../components/Button";
import { Router } from "../core/router";
import { getPost, getRefreshPost } from "../api/post";
import { Giact } from "../core/giact";
import { Post } from "../types/post";
import "../../public/css/main.scss";

function Main() {
  const [posts, setPosts] = Giact.useState<Post[]>([]);

  const handleClickWrite = () => {
    Router.route("/write");
  };
  const handleClickRefresh = async () => {
    setPosts(await getRefreshPost());
  };

  (async () => {
    const data = await getPost();
    setPosts(data);
  })();

  const list = List().template;
  const button = Button().template;

  return {
    template: () =>
      div({ class: "page center-box" }, [
        button({
          name: "새로고침",
          className: "refresh-btn",
          onClick: handleClickRefresh,
        }),
        list({ posts: posts() }),
        button({
          name: "글쓰기",
          className: "write-btn",
          onClick: handleClickWrite,
        }),
      ]),
  };
}

export default Main;
