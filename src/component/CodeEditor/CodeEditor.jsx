import React from "react";
import MonacoEditor from "react-monaco-editor";

const CodeEditor = ({ code, onChange }) => {
  return (
    <MonacoEditor
      width="100%"
      height="600"
      language="html"
      theme="vs-dark"
      value={code}
      options={{
        selectOnLineNumbers: true,
      }}
      onChange={onChange}
    />
  );
};

export default CodeEditor;
