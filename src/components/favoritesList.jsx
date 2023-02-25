import { XCircleIcon } from "@heroicons/react/24/outline";

const FavoritesList = (props) => {
  const handleMovieDetailsView = () => {
    props.renderMovieDetailsView(props.movie);
  };

  const handleRemovingFavorite = () => {
    props.RemoveFavorite(props.movie);
  };

  const renderPlaceholderImg = (e) => {
    e.onerror = null;
    e.currentTarget.src = "https://via.placeholder.com/92";
  };

  return (
    <div className="flex m-2 bg-white p-2 rounded-lg">
      <div className="flex flex-1 w-[14%] justify-center">
        <div className="relative">
          <img
            className="rounded-lg cursor-pointer"
            src={"https://image.tmdb.org/t/p/w92" + props.movie.poster}
            alt={props.movie.title}
            title={props.movie.title}
            onClick={handleMovieDetailsView}
            onError={renderPlaceholderImg}
          ></img>
          <XCircleIcon
            className="absolute right-1 top-1 w-8 hover:fill-red-600/50 hover:scale-105 transition-all"
            onClick={handleRemovingFavorite}
          />
        </div>
      </div>
      <div className="flex flex-1 w-[14%] items-center cursor-pointer">
        <h1 className="text-xl " onClick={handleMovieDetailsView}>
          {props.movie.title}
        </h1>
      </div>
    </div>
  );
};

export default FavoritesList;
