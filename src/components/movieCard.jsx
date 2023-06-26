const MovieCard = (props) => {
  const handleMovieDetailsView = () => {
    props.renderMovieDetailsView(props.movie);
  };

  const handleFavoritesClick = () => {
    props.setShowFav(true);
    props.AddFavorite(props.movie);
  };

  // ensures img always has a working src
  const renderPlaceholderImg = (e) => {
    e.onerror = null;
    e.currentTarget.src = "https://via.placeholder.com/92";
  };

  return (
    <div className="flex m-2 bg-white p-2 rounded-lg animate-scaleUp">
      <div className="flex flex-1 w-[14%]  justify-center">
        <img
          className="rounded-lg cursor-pointer"
          src={"https://image.tmdb.org/t/p/w92" + props.movie.poster}
          alt={props.movie.title}
          onClick={handleMovieDetailsView}
          onError={renderPlaceholderImg}
        ></img>
      </div>

      <div className="flex flex-1 w-[14%] items-center cursor-pointer">
        <h1 className="text-xl " onClick={handleMovieDetailsView}>
          {props.movie.title}
        </h1>
      </div>
      <div className="flex flex-1 w-[14%] items-center ">
        <h1 className="text-xl ">{props.movie.release_date.substring(0, 4)}</h1>
      </div>
      <div className="flex flex-1 w-[14%] items-center">
        <h1 className="text-xl ">{props.movie.ratings.average}</h1>
      </div>
      <div className="flex flex-1 w-[14%] items-center">
        <h1 className="text-xl ">{props.movie.ratings.popularity}</h1>
      </div>
      <div className="flex flex-1 w-[14%] items-center">
        <button
          className="text-3xl bg-white border py-1 px-3 rounded-lg text-neutral-400 hover:border-none hover:drop-shadow-xl hover:scale-110 hover:text-pink-500 transition-all"
          onClick={handleFavoritesClick}
        >
          ♥
        </button>
      </div>
      <div className="flex flex-1 w-[14%]">
        <button
          className="text-xl bg-white border my-10 px-3 rounded-lg hover:border-none hover:drop-shadow-xl hover:scale-110 hover:text-pink-500 transition-all"
          onClick={handleMovieDetailsView}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
