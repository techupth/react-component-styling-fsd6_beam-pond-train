// Start coding here

import "./style.css";

export function Button() {
  return (
    <div className="container">
      <div className = "holder">
        <p>Primary</p>
        <button className="primary">Large</button>
      </div>
      <div className = "holder">
        <p>Secondary</p>
        <button className="secondary">Large</button>
      </div>
    </div>
  );
}
