import EventManager from "../core/eventManager";
import { button } from "../core/h";

type Props = {
  name: string;
  className: string;
  onClick: Function;
};

function Button() {
  return {
    template: ({ name, className, onClick }: Props) => {
      EventManager.addEventHandler(className, "click", onClick);
      return button({ class: className }, [name]);
    },
  };
}

export default Button;
