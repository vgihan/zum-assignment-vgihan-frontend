import { Giact } from "./core/giact";
import { div } from "./core/h";
import Main from "./pages/Main";
import Write from "./pages/Write";
import { Component, ComponentReturnType } from "./types/component";

type Router = {
  [path: string]: Component;
};

function Router() {
  const [curPage, setCurPage] = Giact.useState<ComponentReturnType>(Main());

  const map: Router = {
    "/": Main,
    "/write": Write,
  };
  const onChangeLocation = () => {
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
