import React from "react";
import MonacoEditor from "@monaco-editor/react";

const CodeEditor = ({ code, onChange, language }) => {
  const editorOptions = {
    selectOnLineNumbers: true,
    fontSize: 16,
  };
  return (
    <>
      <MonacoEditor
        width="100%"
        height="20vh"
        language={language}
        theme="vs-dark"
        value={code}
        options={editorOptions}
        onChange={onChange}
      />
    </>
  );
};

export default CodeEditor;

//!Test:

//?Html:
{
  /* <span class="hadeer">Hadeer</span>

<br/>
<div class="number"> 0
<button class="bttn">Increase </button>
</div>
//? css: */
}
// .hadeer{
//   color: red;
//   padding:30px;
// }

// .bttn{
//   padding:5px;
//   background: black;
//   color: white;
//   margin:20px;
// }
// .number{
//    margin-left:3px;
// }
//?JS
// document.addEventListener("DOMContentLoaded", function () {
//   const increaseNumbers = document.querySelectorAll(".number");
//   const increaseButtons = document.querySelectorAll(".bttn");

//   increaseButtons.forEach((button, index) => {
//     let number = 0;
//     button.addEventListener("click", () => {
//       number++;
//       increaseNumbers[index].textContent = number;
//     });
//   });
// });
