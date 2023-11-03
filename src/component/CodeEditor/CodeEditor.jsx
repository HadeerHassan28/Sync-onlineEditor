import React from "react";
import MonacoEditor from "react-monaco-editor";

const CodeEditor = ({ code, onChange, language }) => {
  return (
    <>
      <MonacoEditor
        width="100%"
        height="300"
        language={language}
        theme="vs-dark"
        value={code}
        options={{
          selectOnLineNumbers: true,
        }}
        onChange={onChange}
      />
    </>
  );
};

export default CodeEditor;
