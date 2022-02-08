import EventManager from "../core/eventManager";
import { input } from "../core/h";

type Props = {
  placeholder: string;
  className: string;
  onChange: Function;
};

function InputText() {
  return {
    template: ({ className, placeholder, onChange }: Props) => {
      EventManager.addEventHandler(className, "change", onChange);
      return input({
        type: "text",
        class: className,
        placeholder,
      });
    },
  };
}

export default InputText;
