import "./App.css";
import { Button } from "./components/Button";
import { Alert } from "./components/Alert";
import emo1 from "./assets/frown.svg";
import emo2 from "./assets/alert-triangle.svg";
import emo3 from "./assets/alert-circle.svg";
import emo4 from "./assets/check-circle.svg";

function App() {
  let train1 = <img src={emo1} />;
  let train2 = <img src={emo2} />;
  let train3 = <img src={emo3} />;
  let train4 = <img src={emo4} />;
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button name="Primary" color="#074EE8" />
        <Button name="Secondary" color="#07A4E8" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert color="#F9C8C8" name="This is error alert box" logo={train1} />
        <Alert color="#F9D9C8" name="This is warning alert box" logo={train2} />
        <Alert color="#F9EBC8" name="This is info alert box" logo={train3} />
        <Alert color="#CEF7CD" name="This is success alert box" logo={train4} />
      </div>
    </div>
  );
}

export default App;
