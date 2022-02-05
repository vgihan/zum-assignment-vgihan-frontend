import { Path } from "../types/path";

export const Router = (() => {
  const route = (path: Path) => {
    history.pushState({ data: "push" }, "", path);
    window.dispatchEvent(new Event("route"));
  };
  return { route };
})();
