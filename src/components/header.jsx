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
            " w-14 transition-all hover:cursor-pointer hover:scale-105 hover:bg-pink-700 hover:text-white hover:drop-shadow-2xl rounded-lg p-2 ml-1   " +
            (props.filterView ? " bg-pink-700 text-white " : " text-pink-700 ")
          }
          onClick={() => {
            props.filterView
              ? props.setShowFilter(false)
              : props.setShowFilter(true);
          }}
        />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <FilmIcon
          className=" w-16 transition-all hover:cursor-pointer hover:scale-105 hover:bg-pink-700 hover:text-white hover:drop-shadow-2xl rounded-lg p-2 text-pink-700 mr-1 "
          onClick={() => props.renderHomeView()}
          title="Home"
        />
        <h1
          className="mx-2 text-3xl text-pink-900 font-bold cursor-pointer"
          title="About Us"
          onClick={handleOpenModal}
        >
          Movie Browser
        </h1>
      </div>

      <div className="flex justify-center items-center mr-2">
        <HeartIcon
          className={
            " w-14 transition-all hover:cursor-pointer hover:scale-105 hover:bg-pink-700 hover:text-white hover:drop-shadow-2xl rounded-lg p-2  mx-2  " +
            (props.favView ? " bg-pink-700 text-white " : "text-pink-700")
          }
          onClick={() => {
            props.favView ? props.setShowFav(false) : props.setShowFav(true);
          }}
        />
        {/* Using existing React modal-dialog component */}
        {/* Example taken from  https://reactcommunity.org/react-modal/ */}
        <AboutModal showModal={showModal} handleCloseModal={handleCloseModal} />
      </div>
    </div>
  );
};

export default Header;
