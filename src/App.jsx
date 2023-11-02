import React, { useState } from "react";
import "./App.css";
import CodeEditor from "./component/CodeEditor/CodeEditor";

function App() {
  const [code, setCode] = useState(
    "<h1>Hello, World!</h1>\n<p>Edit this code</p>"
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Online Code Editor</h1>
      </header>
      <div className="editor-container">
        <CodeEditor code={code} onChange={setCode} />
      </div>
      <div className="output-container">
        <h2>Output</h2>
        <div className="output" dangerouslySetInnerHTML={{ __html: code }} />
      </div>
    </div>
  );
}

export default App;
