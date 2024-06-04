import "./App.css";
import * as button from "./components/Button.jsx";
import * as alert from "./components/Alert.jsx";
import * as alertBox from "./components/AlertBox.jsx";
function App() {
  return (
    <div className="App">
      <h1> Button</h1>
      <hr />
      <div className="button-components-section">
        <button.Button />
        <alert.Alert />
      </div>
      <h1> Alert</h1>
      <hr />
      <div className="alert-components-section">
        <alertBox.AlertBox />
      </div>
    </div>
  );
}

export default App;
