import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <div id="default_List" className=" w-1/2 bg-white/90 backdrop-blur-xl flex flex-col  ">
      <div className="flex items-center p-5 bg-white rounded-lg m-2 text-pink-900 ">
        <h1 className="text-3xl">List of Matching Movie Results</h1>
      </div>
      <div className="flex rounded-lg p-2 bg-white mx-2 ">

        <div className= "flex-1 w-[14%] ">
          
        </div>
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
        <div className=" flex-1 w-[14%]">
          
        </div>
        <div className=" flex-1 w-[14%]">
          
        </div>


      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        {props.movieList.map( (m) => 
           <MovieCard movie={m}/>
        )}
      </div>
    </div>
  );
};

export default MovieList;
