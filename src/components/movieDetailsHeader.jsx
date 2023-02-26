const MovieDetailsHeader = (props) => {
  const handleFavoritesClick = () => {
    props.AddFavorite(props.movieSelected);
  };

  return (
    <div className="flex flex-row animate-fadeIn bg-white m-3 rounded-lg">
      <div className="flex flex-col justify-center ml-5 flex-1 text-pink-700 ">
        <h1 className="text-3xl font-bold">{props.movieSelected.title}</h1>
      </div>

      <div className="flex flex-col p-5 w-52  ">
        <button
          className="px-3 py-2 text-white bg-pink-700 rounded-lg hover:drop-shadow-2xl  hover:scale-105 transition-all w-full mb-1 "
          onClick={props.renderDefaultView}
        >
          Close
        </button>
        <button
          className="px-3 py-2 bg-white text-pink-700 border rounded-lg hover:drop-shadow-2xl hover:scale-105 transition-all w-full mt-1"
          onClick={handleFavoritesClick}
        >
          Add to Favs
        </button>
      </div>
    </div>
  );
};

export default MovieDetailsHeader;
