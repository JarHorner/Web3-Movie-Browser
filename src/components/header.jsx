import React, { useState } from "react";
import ReactModal from "react-modal";
import { FilmIcon, AdjustmentsHorizontalIcon} from "@heroicons/react/24/solid";

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
          className="bg-white/50 hover:bg-red-600 font-bold py-2.5 px-8 rounded-2xl hover:scale-105 transition-all"
          onClick={handleOpenModal}
        >
          About
        </button>
        <ReactModal
          isOpen={showModal}
          contentLabel="About"
          appElement={document.getElementById("root")}
        >
          <div className="flex flex-row-reverse">
            <button
              className="bg-white/50 border-2 border-black  hover:bg-red-600 font-bold py-2.5 px-8 rounded-2xl hover:scale-105 transition-all"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex w-1/2">
              <div className="py-5 px-10 my-5">
                <h1 className="text-2xl font-bold">Group Members:</h1>
              </div>
              <div className="flex items-center ">
                <p className="">
                  This application has be built by Jarret Horner and Jasmail
                  Duck.
                </p>
              </div>
            </div>

            <div className="flex w-1/2">
              <div className="py-5 px-10 my-5">
                <h1 className="text-2xl font-bold">GitHub Link:</h1>
              </div>
              <div className="flex items-center px-5">
                <a
                  href="https://github.com/JarHorner/Web3-Movie-Browser"
                  className=""
                >
                  https://github.com/JarHorner/Web3-Movie-Browser
                </a>
              </div>
            </div>

            <div className="flex w-1/2">
              <div className="py-5 px-10 my-5">
                <h1 className="text-2xl font-bold">Technology Used:</h1>
              </div>
              <div className="flex items-center">
                <p className=""></p>
              </div>
            </div>

            <div className="flex w-1/2">
              <div className="py-5 px-10 my-5">
                <h1 className="text-2xl font-bold">Third-party Source Code:</h1>
              </div>
              <div className="flex items-center">
                <p className=""></p>
              </div>
            </div>
          </div>
        </ReactModal>
      </div>
    </div>
  );
};

export default Header;
