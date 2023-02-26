import MovieDetailsHeader from "./movieDetailsHeader";
import MovieInformation from "./movieInformation";

const MovieDetails = (props) => {
  return (
    <div
      id="default_filters"
      className="flex flex-col w-full bg-white/90 backdrop-blur-2xl animate-scaleUp "
    >
      <MovieDetailsHeader
        movieSelected={props.movieSelected}
        renderDefaultView={props.renderDefaultView}
        AddFavorite={props.AddFavorite}
        setShowFav={props.setShowFav}
      />
      <MovieInformation movieSelected={props.movieSelected} />
    </div>
  );
};

export default MovieDetails;
