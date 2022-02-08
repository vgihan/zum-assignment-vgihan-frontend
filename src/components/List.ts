import { li, span, ul } from "../core/h";
import { getPost } from "../api/post";
import { Post } from "../types/post";
import { Giact } from "../core/giact";
import "../../public/css/list.scss";

function List() {
  const [posts, setPosts] = Giact.useState<Post[]>([]);

  const getData = async () => {
    const data = await getPost();
    setPosts(data);
  };

  getData();

  return {
    template: () =>
      ul({ class: "container center-box" }, [
        ...posts().map((postElement: Post) => {
          const { id, title, date, writer } = postElement;
          return li({}, [
            span({ class: "post-id" }, [id]),
            span({ class: "post-title" }, [title]),
            span({ class: "post-date" }, [date]),
            span({ class: "post-writer" }, [writer]),
          ]);
        }),
      ]),
  };
}

export default List;
