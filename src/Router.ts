import { div } from "./core/h";
import Main from "./pages/Main";
import Write from "./pages/Write";
import { ComponentReturnType } from "./types/component";

type Router = {
  [path in string]: ComponentReturnType;
};

function Router() {
  const path = document.location.pathname;
  const query = document.location.search;

  const router: Router = {
    "/": Main(),
    "/write": Write(),
  };

  return {
    template: () => div({ class: "router" }, [router[path].template()]),
  };
}

export default Router;
