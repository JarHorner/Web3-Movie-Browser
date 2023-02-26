import React, { useState } from "react";
import {
  FilmIcon,
  AdjustmentsHorizontalIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
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
      className="h-full bg-white border-b flex justify-start"
    >
      <div className="flex items-center ml-2 ">
        <AdjustmentsHorizontalIcon
          className={
            " w-16 transition-all hover:cursor-pointer hover:scale-105 hover:bg-pink-700 hover:text-white hover:drop-shadow-2xl rounded-lg p-2 text-pink-700  " +
            (props.filterView ? "hidden" : "block")
          }
          onClick={() => {
            props.setShowFilter(true);
          }}
        />

        <FilmIcon
          className=" w-16 transition-all hover:cursor-pointer hover:scale-105 hover:bg-pink-700 hover:text-white hover:drop-shadow-2xl rounded-lg p-2 text-pink-700 "
          onClick={() => props.renderHomeView()}
        />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <h1 className="mx-2 text-3xl text-pink-900 font-bold">Movie Finder</h1>
      </div>

      <div className="flex justify-center items-center mr-2">
        <HeartIcon
          className={
            " w-16 transition-all hover:cursor-pointer hover:scale-105 hover:bg-pink-700 hover:text-white hover:drop-shadow-2xl rounded-lg p-2 text-pink-700 mr-2  " +
            (props.favView ? "hidden" : "block")
          }
          onClick={() => {
            props.setShowFav(true);
          }}
        />
        <button
          className="py-2 px-4 text-white bg-pink-700 rounded-lg hover:scale-105 transition-all"
          onClick={handleOpenModal}
        >
          About
        </button>
        {/* Using existing React modal-dialog component */}
        {/* Example taken from  https://reactcommunity.org/react-modal/ */}
        <AboutModal showModal={showModal} handleCloseModal={handleCloseModal} />
      </div>
    </div>
  );
};

export default Header;
