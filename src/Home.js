import React from "react";

// Got image from https://unsplash.com/photos/9FDI-_E29fk
import background from "./images/Home.jpg";

function Home() {
  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col" style={{ backgroundColor: "#36393f" }}>
        <div className="">
          <h1 className="text-gray-300 text-3xl font-semibold text-center">
            Movie Browser
          </h1>
        </div>
        <div>
          <h2 className="text-gray-100 text-center">Title of Movie</h2>
        </div>
        <div>
          <form className="flex flex-col">
            <input type="text" className="" placeholder="Title of Movie" />
            <div className="flex flex-row">
              <div className="">
                <button className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                  <span>Download</span>
                </button>
              </div>
              <div className="">
                <button className="bg-grey hover:bg-white text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                  <span>Download</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
