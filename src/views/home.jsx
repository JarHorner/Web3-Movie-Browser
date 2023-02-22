import React from "react";
import { useForm } from "react-hook-form";
import { MagnifyingGlassIcon, FilmIcon } from "@heroicons/react/24/solid";



const Home = (props) => {
  const onSubmit = (data) => {
    console.log(data);
    props.renderDefaultView();
  };

  const {
    register,
    handleSubmit,
  } = useForm(); //Initializes form library use

  return (
    <div
      id="home_cntr"
      className="  flex h-full justify-center items-center bg-movieHeroImg bg-cover flex-col "
    >
      <div
        id=" home_content_cntr"
        className="w-1/2 h-1/2 bg-white/90  backdrop-blur-2xl rounded-lg flex flex-col shadow-2xl shadow-black "
      >
        <div id="content_title" className=" text-center ">
          <h1 className=" text-3xl font-bold rounded-t-lg p-3 border-b text-pink-900  bg-white ">Browse Movies</h1>
        </div>

        <div className="flex h-full ">


          <div id="content_title" className=" text-center flex-1 bg-pink-700 f-full flex items-center flex-col ">
            <FilmIcon className=" w-1/2 text-pink-50" />
            <h1 className="text-lg p-3 text-white"> Use the searchbar to search for matching movies or browse all our movies by clicking on the button.</h1>
          </div>

          <div
            id="content_form"
            className=" flex-1 flex justify-center h-full items-center "
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              
              <div className=" flex items-center bg-pink-700 w-96 rounded-lg ">
                {/* Title */}
                <label className="text-lg  font-bold px-2 text-white " htmlFor="movieTitle ">
                  Title
                </label>
                <div className=" flex bg-white rounded-lg w-full">
                  <input
                    name="movieTitle"
                    type="search"
                    placeholder="Enter movie title"
                    className=" p-3 rounded-2xl focus:outline-none flex-1"
                    {...register("movieTitle")}
                  />
                  <MagnifyingGlassIcon className=" w-7 mr-2 hover:cursor-pointer hover:scale-105 transition-all " />
                </div>
              </div>

              <div className="mt-10 flex">
                <button className=" bg-pink-600/50 text-white  p-2 flex-1 mx-2 rounded-lg hover:bg-pink-900 hover:text-pink-100 hover:scale-105 transition-all">
                  Show Matching Movies
                </button>
                <button className="flex-1 bg-pink-600 text-white p-2 mx-2 rounded-lg hover:bg-pink-900 hover:text-pink-100 hover:scale-105 transition-all">
                  Show All Movies
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center mt-10 bg-white/50 backdrop-blur-2xl p-2 rounded-lg text-pink-900 text-sm">
        Background Image by: Myke Simon
        <a href="https://unsplash.com/photos/atsUqIm3wxo" className=" underline">Visit Page</a>
      </div>
    </div>
  );
};

export default Home;
