import { Giact } from "./core/giact";
import { div } from "./core/h";
import { VirtualDom } from "./core/virtualDom";
import Main from "./pages/Main";
import Write from "./pages/Write";
import { ComponentReturnType } from "./types/component";
import { Path } from "./types/path";

type Router = {
  [path in Path]: ComponentReturnType;
};

function Router() {
  const [path, setPath] = Giact.useState<Path>(
    document.location.pathname as Path
  );

  const map: Router = {
    "/": Main(),
    "/write": Write(),
  };
  const onChangeLocation = () => {
    setPath(document.location.pathname as Path);
  };

  window.addEventListener("route", onChangeLocation);
  window.addEventListener("popstate", onChangeLocation);

  return {
    template: () => div({ class: "router" }, [map[path()].template()]),
  };
}

export default Router;
