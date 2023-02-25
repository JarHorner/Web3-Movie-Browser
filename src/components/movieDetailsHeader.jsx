
const MovieDetailsHeader = (props) => {

    return (
        <div className="flex flex-row">
          <div className="flex flex-col py-12 px-5">
            <h1 className="text-3xl font-bold">{props.movieSelected.title}</h1>
          </div>
          <div className="flex-1"></div>
          <div className="flex flex-col p-5">
            <button
              className="bg-white/50 hover:bg-red-600 font-bold py-2.5 px-8 rounded-2xl hover:scale-105 transition-all"
              onClick={props.renderDefaultView}
            >
              Close
            </button>
            <button 
                className="bg-white/50 hover:bg-red-600 font-bold py-2.5 px-8 rounded-2xl hover:scale-105 transition-all mt-5"
            >
              Add to Favs
            </button>
          </div>
        </div>
    );
  };
  
  export default MovieDetailsHeader;