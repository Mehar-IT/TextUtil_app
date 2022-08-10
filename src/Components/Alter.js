import React from "react";
import "./Alter.css";
export const Alter = (props) => {
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        id="alter"
        role="alert"
      >
        <strong>{props.alert.type}</strong> {props.alert.message}
      </div>
    )
  );
};
