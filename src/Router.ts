import { Giact } from "./core/giact";
import { div } from "./core/h";
import Main from "./pages/Main";
import Write from "./pages/Write";
import { Component } from "./types/component";

type Router = {
  [path: string]: Component;
};

function Router() {
  const [curPage, setCurPage] = Giact.useRouter(Main());

  const map: Router = {
    "/": Main,
    "/write": Write,
  };
  const onChangeLocation = () => {
    Giact.clear();
    const path = document.location.pathname;
    setCurPage(map[path]());
  };

  window.addEventListener("route", onChangeLocation);
  window.addEventListener("popstate", onChangeLocation);

  return {
    template: () => div({ class: "router" }, [curPage().template()]),
  };
}

export default Router;
