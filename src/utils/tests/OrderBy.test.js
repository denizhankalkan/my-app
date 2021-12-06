import React from "react";
import ReactDOM from "react-dom";
import OrderByDropdown from "../../components/OrderByDropdown"

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<OrderByDropdown onChange={() => {}}></OrderByDropdown>, div);
});