import ReactModal from "react-modal";

const AboutModal = (props) => {
  return (
    // The style of this ReactModel https://github.com/reactjs/react-modal was used as a basis
    <ReactModal
      isOpen={props.showModal}
      contentLabel="About section"
      appElement={document.getElementById("root")}
      onRequestClose={props.handleCloseModal}
      style={{
        overlay: {
          backgroundColor: "rgba(251, 182, 206, 0.5)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "60%",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <div className="flex flex-row-reverse animate-fadeIn ">
        <button
          className="px-3 py-2 text-white bg-pink-700 rounded-lg hover:scale-105 transition-all"
          onClick={props.handleCloseModal}
        >
          Close
        </button>
      </div>
      <div className="flex flex-col items-center justify-center animate-fadeIn">
        <div className="flex w-2/3">
          <div className="py-5 pr-12 my-5">
            <h1 className="text-2xl font-bold">Group Members:</h1>
          </div>
          <div className="flex items-center w-full">
            <p className="">
              This application has be built by Jarret Horner and Jasmail Duck.
            </p>
          </div>
        </div>

        <div className="flex w-2/3">
          <div className="py-5 pr-12 my-5">
            <h1 className="text-2xl font-bold">GitHub Link:</h1>
          </div>
          <div className="flex items-center px-5">
            <a
              href="https://github.com/JarHorner/Web3-Movie-Browser"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/JarHorner/Web3-Movie-Browser
            </a>
          </div>
        </div>

        <div className="flex w-2/3">
          <div className="py-5 pr-12 my-5">
            <h1 className="text-2xl font-bold">Technology Used:</h1>
          </div>
          <div className="flex items-center">
            <p className=""></p>
          </div>
        </div>

        <div className="flex w-2/3">
          <div className="py-5 pr-12 my-5">
            <h1 className="text-2xl font-bold">Third-party Source Code:</h1>
          </div>
          <div className="flex items-center">
            <ul>
              <li>
                <a
                  href="https://reactcommunity.org/react-modal/"
                  className=""
                  target="_blank"
                  rel="noreferrer"
                >
                  https://reactcommunity.org/react-modal/
                </a>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
              <li>
                <p></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default AboutModal;
