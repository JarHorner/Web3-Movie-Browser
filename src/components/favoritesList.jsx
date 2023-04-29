import Favorites from "./favorites";

const FavoritesList = (props) => {
  const hideFav = " w-0 p-0 ";
  const showFav = " w-1/5 p-2 ";
  const displayContent = " flex ";
  const hideContent = " hidden ";

  return (
    <div
      id="default_Favorites"
      className={
        " bg-white/90 backdrop-blur-2xl h-full transition-all " +
        (props.favView ? showFav : hideFav)
      }
    >
      <div
        className={
          "flex-col h-full " + (props.favView ? displayContent : hideContent)
        }
      >
        <div className="flex flex-col justify-center items-center  bg-white rounded-2xl p-2">
          <h1 className="text-3xl text-pink-700 p-2">Favorites</h1>
        </div>
        <div className="overflow-y-auto  ">
          {props.favoritesList.map((m) => (
            <Favorites
              movie={m}
              key={m.id}
              renderMovieDetailsView={props.renderMovieDetailsView}
              RemoveFavorite={props.RemoveFavorite}
            />
          ))}
          ;
        </div>
      </div>
    </div>
  );
};

export default FavoritesList;
