import React from "react";
import Header from "../components/header";

const Default = (props) => {
  return (
    <div id="default_cntr" className=" flex ">
      <Header renderHomeView={props.renderHomeView} />
    </div>
  );
};

export default Default;
