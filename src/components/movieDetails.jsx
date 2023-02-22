import MovieDetailsHeader from "./movieDetailsHeader";
import MovieInformation from "./movieInformation";

const MovieDetails = (props) => {

  return (
    <div
      id="default_filters"
      className="flex flex-col w-5/6 m-3 bg-slate-400 rounded-2xl "
    >
      <MovieDetailsHeader renderDefaultView={props.renderDefaultView} />
      <MovieInformation />
    </div>
  );
};

export default MovieDetails;
