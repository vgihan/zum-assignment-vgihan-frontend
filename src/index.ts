import * as styles from "../public/css/style.scss";
import image from "../public/img/test.png";

styles;

document.body.innerHTML = `
  <div>
    <p>Hello World !</p>
    <img id="test" />
  </div>
`;

(document.getElementById("test") as HTMLImageElement).src = image;
