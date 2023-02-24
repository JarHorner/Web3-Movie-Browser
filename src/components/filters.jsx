import React, { useState } from "react";

import SEPERATOR from "./seperator";

const Filters = (props) => {

  const hideFilter = " w-0 p-0 ";
  const showFilter = ' w-1/4 p-2 ';

  const displayContent = ' flex ';
  const hideContent = " hidden ";
  
  const [selectedRadio, setSelectedRadio] = useState("");

  return (
    <div id="default_filters" className={" bg-white h-full transition-all " + (props.filterView ? showFilter : hideFilter)}>
      <div className={"flex-col " + (props.filterView ? displayContent : hideContent)}>
        <div className=" bg-pink-700 p-5 text-white rounded-lg ">
          <h1 className=" text-xl">Movie Filters</h1>
          <h2>Select on a filter to see corresponding results</h2>
        </div>

        <SEPERATOR title="Type" />

        <div className=" flex w-full items-center bg-pink-300 p-1 rounded-lg my-2">
          <label className="mr-2 text-white w-20"><input type="radio" className="mr-2 " name="radio" onClick={()=> {setSelectedRadio("title")}} />Title</label>
          <input type='text' className=" p-2 flex-1 rounded-lg" disabled={selectedRadio !== "title"}/>
        </div>

        <div className=" flex w-full items-center bg-pink-300 p-1 rounded-lg my-2">
          <label className="mr-2 text-white w-20"><input type="radio" className="  mr-2 " name="radio" onClick={()=> {setSelectedRadio("genre")}}  />Genre </label>
          <input type='text' className=" p-2 flex-1 rounded-lg" disabled={selectedRadio !== "genre"} />
        </div>

        <SEPERATOR title="Date" />

        <div className=" flex w-full items-center bg-pink-300 p-1 rounded-lg my-2">
          <label className="mr-2 text-white w-20"><input type="radio" className="  mr-2 " name="radio" onClick={()=> {setSelectedRadio("year")}} /> Year</label>
          <input type='month' className=" p-2 flex-1 rounded-lg" disabled={selectedRadio !== "year"} />
        </div>

        <SEPERATOR title="Misc" />

        <div className=" flex w-full items-center bg-pink-300 p-1 rounded-lg my-2">
          <label className="mr-2 text-white w-20"><input type="radio" className="  mr-2 " name="radio" onClick={()=> {setSelectedRadio("rating")}} /> Rating</label>
          <input type='text' className=" p-2 flex-1 rounded-lg" disabled={selectedRadio !== "rating"} />
        </div><button onClick={() => {
          props.setShowFilter(false);
        }}>Hide</button>
      </div>
    </div>


  );
};

export default Filters;
