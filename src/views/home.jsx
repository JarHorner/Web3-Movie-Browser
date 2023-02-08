import React from "react";
import { useForm } from "react-hook-form";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Home = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(); //Initializes form library use

  return (
    <div
      id="home_cntr"
      className="  flex h-full justify-center items-center bg-movieHeroImg bg-cover"
    >
      <div
        id=" home_content_cntr"
        className="w-1/2 h-1/2 bg-white/50   backdrop-blur-2xl rounded-2xl flex flex-col  p-5"
      >
        <div id="content_title" className=" self-center ">
          <h1 className=" text-3xl font-bold ">Browse Movies</h1>
        </div>

        <div
          id="content_form"
          className=" flex-1 flex justify-center items-center "
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex items-center ">
              {/* Title */}
              <label className="text-lg mr-2 font-bold " htmlFor="movieTitle ">
                Title:
              </label>
              <div className=" flex bg-white rounded-2xl ">
                <input
                  name="movieTitle"
                  type="search"
                  placeholder="Enter movie title"
                  className=" p-2 rounded-2xl focus:outline-none flex-1"
                  {...register("movieTitle")}
                />
                <MagnifyingGlassIcon className=" w-7 mr-2 hover:cursor-pointer hover:scale-105 transition-all " />
              </div>
            </div>

            <div className="mt-10 flex">
              <button className=" bg-white/50 flex-1 mx-2 rounded-2xl">
                Show Matching Movies
              </button>
              <button className="flex-1 bg-white/50 rounded-2xl">
                Show All Movies
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
