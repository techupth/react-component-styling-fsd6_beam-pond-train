/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Alert from "./components/Alert";
import "./App.css";
import Button from "./components/Button";
import icon1 from "./assets/frown.svg";
import icon2 from "./assets/alert-triangle.svg";
import icon3 from "./assets/alert-circle.svg";
import icon4 from "./assets/check-circle.svg";

function App() {
  let emo1 = <img src={icon1} />;
  let emo2 = <img src={icon2} />;
  let emo3 = <img src={icon3} />;
  let emo4 = <img src={icon4} />;

  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <div className="primary-button">
          <Button color="#074EE8" name="Primary" />
        </div>
        <div className="secondary-button">
          <Button color="#07A4E8" name="Secondary" />
        </div>
        <div className="secondary-button">
          <Button color="red" name="Error" />
        </div>
        <div className="secondary-button">
          <Button color="#26B795" name="Success" />
        </div>
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <div className="alert">
          <Alert color="#F9C8C8" text="This is error alert box" logo={emo1} />
        </div>
        <div className="alert">
          <Alert color="#F9D9C8" text="This is warning alert box" logo={emo2} />
        </div>
        <div className="alert">
          <Alert color="#F9EBC8" text="This is info alert box" logo={emo3}/>
        </div>
        <div className="alert">
          <Alert color="#CEF7CD" text="This is success alert box" logo={emo4}/>
        </div>
      </div>
    </div>
  );
}

export default App;
