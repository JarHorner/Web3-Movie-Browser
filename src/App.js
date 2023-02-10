import HOME from "./views/home";
import DEFAULT from "./views/default";
import React, { useState, useEffect } from "react";

function App() {
  //ADD STATE
  const [movieList, setmovieList] = useState([]);

  // State for determ what view
  const [homeView, setHomeView] = useState(true);
  const [defaultView, setDefaultView] = useState(false);

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const url =
          "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=10";
        const response = await fetch(url);
        const data = await response.json();
        localStorage.setItem("movieList", JSON.stringify(data));
        setmovieList(data);
      } catch (err) {
        console.error(err);
      }
    };
    // invoke the async function
    if (!localStorage.getItem("movieList")) {
      getMovieData();
    } else {
      setmovieList(JSON.parse(localStorage.getItem("movieList")));
    }
  }, []);

  const renderDefaultView = () => {
    setHomeView(false);
    setDefaultView(true);
  };

  const renderHomeView = () => {
    setHomeView(true);
    setDefaultView(false);
  };

  return (
    <div className=" border h-full w-full ">
      {homeView ? (
        <HOME renderDefaultView={renderDefaultView} />
      ) : (
        <DEFAULT renderHomeView={renderHomeView} movieList={movieList} />
      )}
    </div>
  );
}

export default App;
