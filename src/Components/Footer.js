import React from "react";

export default function Footer(props) {
  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        bottom: "0",
        paddingTop: "15px",
        width: "100%",
        backgroundColor: props.theme !== "light" ? "#212529" : "#dde5ed",
        color: props.theme !== "light" ? "white" : "black",
        textAlign: "center",
      }}
    >
      <p>
        Made By Hamza{" "}
        <span>
          <img src="❤️" alt="" />
          ❤️
        </span>
      </p>
    </div>
  );
}
