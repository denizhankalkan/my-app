import React from "react";
import ReactDOM from "react-dom";
import Toast from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Toast
      onToastClosed={() => {}}
      onToastUnMount={() => {}}
      linkName={""}
      message={""}
    ></Toast>,
    div
  );
});

