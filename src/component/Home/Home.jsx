import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import CodeEditor from "../CodeEditor/CodeEditor";

const Home = () => {
  const [htmlCode, setHtmlCode] = useState(
    `
   <div class="init">Hello, World!</div>
 
`
  );
  const [cssCode, setCssCode] = useState(`.init{
padding: 20px;
margin: 20px;
font-size:25px;
  }`);
  const [jsCode, setJSCode] = useState(
    `document.querySelector("div").style.color = "green";`
  );

  //!CSS
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = cssCode;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [cssCode]);

  //!JS
  useEffect(() => {
    try {
      const executeCode = new Function(jsCode);
      executeCode(); // Execute the code
    } catch (error) {
      console.error("Error executing JavaScript:", error);
    }
  }, [jsCode]);

  return (
    <>
      <div className=" container  my-3 pb-5 ">
        <header className="App-header mt-3 text-center p-2">
          <h1 className="title">
            <u>
              <strong>Online Code Editor</strong>
            </u>
          </h1>
        </header>
        <div className="container mt-3 ">
          <div className="row ">
            <div className="col-lg-6 mr-1">
              {/* html */}
              <h4 className="text-primary">HTML</h4>
              <CodeEditor
                code={htmlCode}
                onChange={setHtmlCode}
                language="html"
                className="my-3"
              />
              <br />
              {/* css */}
              <h4 className="text-primary">CSS</h4>
              <CodeEditor code={cssCode} onChange={setCssCode} language="css" />
              <br />
              {/* JS */}
              <h4 className="text-primary">{`React (JS)`}</h4>
              <CodeEditor
                code={jsCode}
                onChange={setJSCode}
                language="javascript"
              />
            </div>

            {/* outPut */}
            <div className="col-lg-6 output-container border pt-1">
              <h2 className="outTitle">Output:-</h2>
              <br />
              <iframe
                title="output"
                sandbox="allow-scripts"
                width="100%"
                height="400px"
                srcDoc={`<html><style>${cssCode}</style><body>${htmlCode}</body><script>${jsCode}</script></html>`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
