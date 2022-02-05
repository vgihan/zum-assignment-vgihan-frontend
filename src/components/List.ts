import { li, span, ul } from "../core/h";
import "../../public/css/list.scss";
import { Giact } from "../core/giact";
import { Post, PostSearch } from "../types/post";

function List() {
  const [post, setPost] = Giact.useState<PostSearch[]>([
    { id: 0, title: "test 1", date: new Date(), writer: "vgihan" },
    { id: 1, title: "test 2", date: new Date(), writer: "vgihn" },
    { id: 2, title: "test 3", date: new Date(), writer: "vgian" },
    { id: 3, title: "test 4", date: new Date(), writer: "vihan" },
    { id: 4, title: "test 5", date: new Date(), writer: "vgia" },
    { id: 5, title: "test 6", date: new Date(), writer: "vgian" },
    { id: 5, title: "test 6", date: new Date(), writer: "vgian" },
    { id: 5, title: "test 6", date: new Date(), writer: "vgian" },
    { id: 5, title: "test 6", date: new Date(), writer: "vgian" },
    { id: 5, title: "test 6", date: new Date(), writer: "vgian" },
    { id: 5, title: "test 6", date: new Date(), writer: "vgian" },
    { id: 5, title: "test 6", date: new Date(), writer: "vgian" },
  ]);
  const getPostDate = (date: Date) => {
    return `${date.getFullYear()}.${date.getMonth()}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  };

  return {
    template: () =>
      ul({ class: "container center-box" }, [
        ...post().map((postElement) => {
          const { id, title, date, writer } = postElement;
          return li({}, [
            span({ class: "post-id" }, [id]),
            span({ class: "post-title" }, [title]),
            span({ class: "post-date" }, [getPostDate(date)]),
            span({ class: "post-writer" }, [writer]),
          ]);
        }),
      ]),
  };
}

export default List;
