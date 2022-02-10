import { Giact } from "./core/giact";
import { div } from "./core/h";
import Main from "./pages/Main";
import Modify from "./pages/Modify";
import Write from "./pages/Write";
import { Component } from "./types/component";

type RouterMap = {
  [path: string]: Component;
};

function Router() {
  const getPath = () => {
    const path = document.location.pathname;
    const pathElements = path.split("/");
    return {
      path: `/${pathElements[1]}`,
      params: pathElements.slice(2, pathElements.length),
    };
  };
  const map: RouterMap = {
    "/": Main,
    "/write": Write,
    "/modify": Modify,
  };
  const initPage = getPath();
  const [curPage, setCurPage] = Giact.useRouter(
    map[initPage.path](initPage.params)
  );
  const onChangeLocation = () => {
    Giact.clear();
    const nextPage = getPath();
    setCurPage(map[nextPage.path](nextPage.params));
  };

  window.addEventListener("route", onChangeLocation);
  window.addEventListener("popstate", onChangeLocation);

  return {
    template: () => div({ class: "router" }, [curPage().template()]),
  };
}

export default Router;
