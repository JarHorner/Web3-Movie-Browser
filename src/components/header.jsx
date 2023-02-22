
import React, { useState } from "react";
import { FilmIcon, AdjustmentsHorizontalIcon} from "@heroicons/react/24/solid";
import AboutModal from "./aboutModal";


const Header = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div
      id=" default_header"
      className="h-20 bg-white border-b flex flex-row justify-start"
    >
      <div className="flex-1 flex">
        <AdjustmentsHorizontalIcon className={"w-20 " + (props.filterView? "hidden": "block")} onClick={()=>{
          props.setShowFilter(true)
        }} />
        <FilmIcon
          className=" w-20 ml-5 hover:cursor-pointer hover:scale-105 transition-all"
          onClick={() => props.renderHomeView()}
        />
      </div>
      <div className="flex-1"></div>
      <div className="flex mr-10 justify-center items-center">
        <button
          className="bg-white/50 hover:bg-red-600 border-2 border-black font-bold py-2.5 px-8 rounded-2xl hover:scale-105 transition-all"
          onClick={handleOpenModal}
        >
          About
        </button>
        <div>
          <button 
            className="bg-white/50 hover:bg-red-600 border-2 border-black font-bold py-2.5 px-5 rounded-2xl hover:scale-105 transition-all" 
            onClick={() => {
              props.renderMovieDetailsView()
              props.setShowFilter(true)
            }}
          >
            Open Movie Details
          </button>
        </div>
        {/* Using existing React modal-dialog component */}
        {/* Example taken from  https://reactcommunity.org/react-modal/ */}
        <AboutModal showModal={showModal} handleCloseModal={handleCloseModal} />
      </div>
    </div>
  );
};

export default Header;
