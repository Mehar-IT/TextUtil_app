import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const onChangeValue = (e) => {
    setText(e.target.value);
  };
  const clickToUpper = () => {
    setText(text.toUpperCase());
    props.setAlert("success", "Text converted to uppercase");
  };
  const clickToLower = () => {
    setText(text.toLowerCase());
    props.setAlert("success", "Text converted to lowerecase");
  };
  const clickToClear = () => {
    setText("");
    props.setAlert("success", "Text is clered");
  };

  const clickToRemoveExtraSpace = () => {
    setText(text.replace(/\s+/g, " ").trim());
    props.setAlert("success", "Removed extra spaces from text");
  };

  const clickToCopy = () => {
    navigator.clipboard.writeText(text);

    props.setAlert("success", "Text is copied!!");
  };
  return (
    <>
      <div className="mb-3">
        <p>{props.textTitle}</p>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          style={
            props.theme === "light"
              ? { background: "white", color: "black" }
              : { background: "rgb(50 52 54)", color: "white" }
          }
          value={text}
          onChange={onChangeValue}
        ></textarea>
      </div>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={clickToUpper}
      >
        Convert to UpperCase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={clickToLower}
      >
        Convert to LowerCase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={clickToRemoveExtraSpace}
      >
        Remove Extra Space
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={clickToCopy}
      >
        Copy Text
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={clickToClear}
      >
        Clear
      </button>
      <h3 className="my-3">Your Text Summary</h3>
      <table
        className="table"
        style={
          props.theme === "light" ? { color: "black" } : { color: "white" }
        }
      >
        <thead>
          <tr>
            <th>Word Count</th>
            <th>Slow (125 wpm)</th>
            <th>Average (300 wpm)</th>
            <th>Fast (450 wpm)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {/* {text.split(" ").length} ,{text.length} characters */}
              {/* {text.trim().split(/\s+/).length} ,{text.length} characters */}
              {text.split(/\s+/).filter((e) => e.length !== 0).length} words,
              {text.length} characters
            </td>
            <td>
              {(
                0.008 * text.split(/\s+/).filter((e) => e.length !== 0).length
              ).toFixed(5)}{" "}
              min
            </td>
            <td>
              {(
                0.003333333 *
                text.split(/\s+/).filter((e) => e.length !== 0).length
              ).toFixed(5)}{" "}
              min
            </td>
            <td>
              {(
                0.002222222 *
                text.split(/\s+/).filter((e) => e.length !== 0).length
              ).toFixed(5)}{" "}
              min
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Preview</h3>
      <p style={{ textAlign: "center" }}>
        {text.length === 0 ? "Enter Something to Preview" : text}
      </p>
      <div style={{ height: "50px" }}></div>
    </>
  );
}
