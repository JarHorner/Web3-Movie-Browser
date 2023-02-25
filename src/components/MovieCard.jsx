
const MovieCard = (props) => {

    const handleMovieDetailsView = () => {
        props.setMovieSelected(props.movie);
        props.renderMovieDetailsView();
    }

  return (
    <div className="flex m-2 bg-white p-2 rounded-lg">
        <div className="flex flex-1 w-[14%]  justify-center">
            <img className="rounded-lg" src={"https://image.tmdb.org/t/p/w92" + props.movie.poster} alt={props.movie.title} onClick={handleMovieDetailsView}></img>
        </div>
        
        <div className="flex flex-1 w-[14%] items-center ">
            <h1 className="text-xl " onClick={handleMovieDetailsView} >{props.movie.title}</h1>
        </div>
        <div className="flex flex-1 w-[14%] items-center ">
            <h1 className="text-xl ">{props.movie.release_date.substring(0,4)}</h1>
        </div>
        <div className="flex flex-1 w-[14%] items-center">
            <h1 className="text-xl ">{props.movie.ratings.average}</h1>
        </div>
        <div className="flex flex-1 w-[14%] items-center">
            <h1 className="text-xl ">{props.movie.ratings.popularity}</h1>
        </div>
        <div className="flex flex-1 w-[14%] items-center">
            <button className="text-xl bg-pink-500 py-1 px-3 rounded-lg text-white">
                ♥
            </button>
        </div>
        <div className="flex flex-1 w-[14%] ">
            <button className="text-xl" onClick={handleMovieDetailsView}>
                View
            </button>
        </div>
    </div>
  );
};

export default MovieCard;
