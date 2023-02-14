import React from "react";
import SEPERATOR from "./seperator";

const Filters = (props) => {

  const hideFilter = " w-0 p-0 ";
  const showFilter = ' w-1/4 p-2 ';

  const displayContent = ' flex ';
  const hideContent = " hidden ";

  return (
    <div id="default_filters" className={" bg-white/90 backdrop-blur-2xl h-full transition-all" + (props.filterView ? showFilter : hideFilter)}>
      <div className={"flex-col " + (props.filterView ? displayContent : hideContent)}>
        <div className=" bg-pink-700 p-5 text-white rounded-lg">
          <h1 className=" text-xl">Movie Filters</h1>
          <h2>Select on a filter to see corresponding results</h2>
        </div>

        <SEPERATOR title="Type" />

        <div className=" flex w-full items-center bg-pink-300 p-1 rounded-lg my-2">
          <label className="mr-2 text-white w-20"><input type="radio" className="mr-2 " />Title</label>
          <input type='text' className=" p-2 flex-1 rounded-lg" />
        </div>

        <div className=" flex w-full items-center bg-pink-300 p-1 rounded-lg my-2">
          <label className="mr-2 text-white w-20"><input type="radio" className="  mr-2 " />Genre </label>
          <input type='text' className=" p-2 flex-1 rounded-lg" />
        </div>

        <SEPERATOR title="Date" />

        <div className=" flex w-full items-center bg-pink-300 p-1 rounded-lg my-2">
          <label className="mr-2 text-white w-20"><input type="radio" className="  mr-2 " /> Year</label>
          <input type='month' className=" p-2 flex-1 rounded-lg" />
        </div>

        <SEPERATOR title="Misc" />

        <div className=" flex w-full items-center bg-pink-300 p-1 rounded-lg my-2">
          <label className="mr-2 text-white w-20"><input type="radio" className="  mr-2 " /> Rating</label>
          <input type='text' className=" p-2 flex-1 rounded-lg" />
        </div><button onClick={() => {
          props.setShowFilter(false);
        }}>Hide</button>
      </div>
    </div>


  );
};

export default Filters;
