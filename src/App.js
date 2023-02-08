import HOME from "./views/home";
import DEFAULT from "./views/default";
import React, { useState } from "react";

function App() {
  //ADD STATE

  // State for determ what view
  const [homeView, setHomeView] = useState(true);
  const [defaultView, setDefaultView] = useState(false);

  const renderDefaultView = () => {
    setHomeView(false);
    setDefaultView(true);
  };

  const renderHomeView = () => {
    setHomeView(true);
    setDefaultView(false);
  };

  return (
    <div className=" border h-full ">
      {homeView ? (
        <HOME renderDefaultView={renderDefaultView} />
      ) : (
        <DEFAULT renderHomeView={renderHomeView} />
      )}
    </div>
  );
}

export default App;
