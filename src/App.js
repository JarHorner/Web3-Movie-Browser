import HOME from "./views/home";
import DEFAULT from "./views/default";
import React, { useState, useEffect } from "react";

function App() {
  //ADD STATE
  const [movieList, setMovieList] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  // State for determ what view
  const [homeView, setHomeView] = useState(true);


  useEffect(() => {
    const getMovieData = async () => {
      try {
        const url =
          "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=10";
        const response = await fetch(url);
        const data = await response.json();
        localStorage.setItem("movieList", JSON.stringify(data));
        setMovieList(data);
      } catch (err) {
        console.error(err);
      }
    };
    // invoke the async function
    if (!localStorage.getItem("movieList")) {
      getMovieData();
    } else {
      setMovieList(JSON.parse(localStorage.getItem("movieList")));
    }
  }, []);

  const renderDefaultView = () => {
    setHomeView(false);
  };

  const renderHomeView = () => {
    setHomeView(true);
  };

  return (
    <div className=" border h-full w-full  ">
      {homeView ? (
        <HOME renderDefaultView={renderDefaultView} />
      ) : (
        <DEFAULT renderHomeView={renderHomeView} movieList={movieList} favoritesList={favoritesList} />
      )}
    </div>
  );
}

export default App;
