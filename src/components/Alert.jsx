// Start coding here

export function Alert() {
  return (
    <div className="container">
      <div className="holder">
        <p>Error</p>
        <button className="primary" style={{ backgroundColor: "#DE5753" }}>
          Large
        </button>
      </div>
      <div className="holder">
        <p>Success</p>
        <button className="secondary" style={{ backgroundColor: "#26B795" }}>
          Large
        </button>
      </div>
    </div>
  );
}
