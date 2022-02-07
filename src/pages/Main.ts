import { div } from "../core/h";
import List from "../components/List";
import Button from "../components/Button";
import { Router } from "../core/router";
import "../../public/css/main.scss";

function Main() {
  const handleClickWrite = () => {
    Router.route("/write");
  };

  const list = List().template;
  const button = Button().template;

  return {
    template: () =>
      div({ class: "page center-box" }, [
        list(),
        button({
          name: "글쓰기",
          className: "write-btn",
          onClick: handleClickWrite,
        }),
      ]),
  };
}

export default Main;
