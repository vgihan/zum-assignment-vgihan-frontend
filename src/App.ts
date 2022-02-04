import { div } from "./core/h";
import { VirtualDom } from "./core/virtualDom";
import Router from "./Router";

function App($parent: HTMLElement) {
  const router = Router();
  return {
    render: () => {
      VirtualDom.render(div({ class: "app" }, [router.template()]), $parent);
    },
  };
}

export default App;
