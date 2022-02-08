import EventManager from "../core/eventManager";
import { input, textarea } from "../core/h";

type Props = {
  placeholder: string;
  className: string;
  onChange: Function;
};

function Textarea() {
  return {
    template: ({ className, placeholder, onChange }: Props) => {
      EventManager.addEventHandler(className, "change", onChange);
      return textarea({
        type: "text",
        class: className,
        placeholder,
        focus,
      });
    },
  };
}

export default Textarea;
