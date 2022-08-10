import React from "react";

export default function About(props) {
  const themeButton =
    props.theme !== "light"
      ? {
          background: "#212529",
          color: "white",
          // borderColor: "#212529",
          borderColor: "red",
        }
      : { background: "white", color: "black" };
  const themeMsg =
    props.theme !== "light"
      ? { background: "#323436", color: "white" }
      : { background: "white", color: "black" };

  return (
    <div>
      <h3 className="text-center my-3">About Us</h3>
      <div className="accordion my-3" id="accordionExample">
        <div className="accordion-item" style={themeMsg}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={themeButton}
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is Textutil free application...</strong>in this
              application you can use text tools like count word remove extra
              spaces and many more
            </div>
          </div>
        </div>
        <div className="accordion-item" style={themeMsg}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={themeButton}
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              You can avil these features absolutely free..
              <strong>This is made by Hamza Tarique</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={themeMsg}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={themeButton}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This Application is brower Compatible and respomsive to your
              favourite browser
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
