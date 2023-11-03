import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import CodeEditor from "../CodeEditor/CodeEditor";

const Home = () => {
  const [htmlCode, setHtmlCode] = useState(
    "<h3>Please Enter the HTML code</h3>"
  );
  const [cssCode, setCssCode] = useState(null);
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = cssCode;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [cssCode]);
  return (
    <>
      <div className="App container border my-5 pb-5">
        <header className="App-header mt-3 text-center p-2">
          <h1 className="title">
            <u>
              <strong>Online Code Editor</strong>
            </u>
          </h1>
        </header>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6">
              <h4 className="text-primary">HTML</h4>
              <CodeEditor
                code={htmlCode}
                onChange={setHtmlCode}
                language="html"
              />
              <br />
              <h4 className="text-primary">CSS</h4>
              <CodeEditor code={cssCode} onChange={setCssCode} language="css" />
            </div>

            <div className="col-md-6 output-container ">
              <h2 className="outTitle">Output:-</h2>
              <br />
              <div
                className="output"
                dangerouslySetInnerHTML={{ __html: htmlCode }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
