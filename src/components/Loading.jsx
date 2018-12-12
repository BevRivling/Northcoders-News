import React from "react";
import loading from "../img/loading.svg";

const Loading = () => {
  return (
    <div className="grey-background">
      <img alt="loading" id="loading" src={loading} />
    </div>
  );
};

export default Loading;
