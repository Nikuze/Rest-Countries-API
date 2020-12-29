import React from "react";
import spinner from "../images/spinner2.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="spinner"
        style={{
          width: "100px",
          height: "100px",
          margin: "200px auto",
          display: "block",
        }}
      />
    </div>
  );
};

export default Spinner;
