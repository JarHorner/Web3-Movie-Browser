import FavoritesList from "./favoritesList";

const Favorites = (props) => {
  return (
    <div id="default_Favorites" className={"m-3 bg-white rounded-2xl w-1/4 "}>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold">Favorites</h1>
      </div>
      <div className="overflow-y-auto ">
        {props.favoritesList.map((m) => (
          <FavoritesList
            movie={m}
            key={m.id}
            renderMovieDetailsView={props.renderMovieDetailsView}
            RemoveFavorite={props.RemoveFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
