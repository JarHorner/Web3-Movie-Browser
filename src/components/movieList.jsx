

import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <div id="default_List" className="bg-white/90 backdrop-blur-2xl flex flex-col h-full flex-1 ">

      <div className="flex items-center p-5 bg-white rounded-lg m-2 text-pink-900 ">
        <h1 className="text-3xl">List of Matching Movie Results</h1>
      </div>

      <div className="flex rounded-lg p-2 bg-white mx-2 ">

        <div className= "flex-1 w-[14%] "/>
        <div className=" flex-1 w-[14%]">
          <h1 className="text-xl ">Title</h1>
        </div>
        <div className=" flex-1 w-[14%]">
          <h1 className="text-xl">Year</h1>
        </div>
        <div className=" flex-1  w-[14%]">
          <h1 className="text-xl">Rating</h1>
        </div>
        <div className=" flex-1 w-[14%]">
          <h1 className="text-xl">Popularity</h1>
        </div>
        <div className=" flex-1 w-[14%]"/>
        <div className=" flex-1 w-[14%]"/>
      </div>


      <div className=" overflow-y-scroll ">
        {props.movieList.map((m) =>
      <MovieCard movie={m} key={m.id} renderMovieDetailsView={props.renderMovieDetailsView} setMovieSelected={props.setMovieSelected} />
      )}
      </div>
      
  


    </div>
  );
};

export default MovieList;
