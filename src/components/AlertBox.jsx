import frown from "./Image/frown.png";
import circle from "./Image/alert-circle.png";
import triangle from "./Image/alert-triangle.png";
import check from "./Image/check-circle.png";
export function AlertBox() {
  return (
    // let image = require("./Image/frown.png");
    <div className="container">
      <button className="alertBox" style={{ backgroundColor: "#F9C8C8" }}>
        <img src={frown}></img>This is error alert box
      </button>
      <button className="alertBox" style={{ backgroundColor: "#F9D9C8" }}>
        <img src={circle}></img>This is warning alert box
      </button>
      <button className="alertBox" style={{ backgroundColor: "#F9EBC8" }}>
        <img src={triangle}></img> This is info alert box
      </button>
      <button className="alertBox" style={{ backgroundColor: "#CEF7CD" }}>
        <img src={check}></img>This is success alert box
      </button>{" "}
    </div>
  );
}
