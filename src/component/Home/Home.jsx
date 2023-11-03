import React, { useState } from "react";
import styles from "./Home.module.css";
import CodeEditor from "../CodeEditor/CodeEditor";
const Home = () => {
  const [code, setCode] = useState("<h3>Please Enter the HTML code</h3>");
  return (
    <>
      <div className="App container border my-5">
        <header className="App-header mt-3 text-center  p-2">
          <h1 className="title">
            <u>
              <strong>Online Code Editor</strong>
            </u>
          </h1>
        </header>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6">
              <CodeEditor code={code} onChange={setCode} />
            </div>
            <div className="col-md-6 output-container output">
              <h2 className="outTitle">Output:-</h2>
              <br />
              <div
                className="output"
                dangerouslySetInnerHTML={{ __html: code }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
