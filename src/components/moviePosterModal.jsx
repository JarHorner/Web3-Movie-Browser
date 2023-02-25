import ReactModal from "react-modal";

import { XCircleIcon } from "@heroicons/react/24/outline";

const MoviePosterModal = (props) => {
  const renderPlaceholderImg = (e) => {
    e.onerror = null;
    e.currentTarget.src = "https://via.placeholder.com/500";
  };

  return (
    // The style of this ReactModel https://github.com/reactjs/react-modal was used as a basis
    <ReactModal
      isOpen={props.showLargePoster}
      contentLabel="About section"
      appElement={document.getElementById("root")}
      onRequestClose={props.handleCloseLargePoster}
      style={{
        overlay: {
          backgroundColor: "rgba(251, 182, 206, 0.5)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          padding: "0",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <div className="relative">
        <img
          src={"https://image.tmdb.org/t/p/w500" + props.poster}
          className=""
          alt="Movie Title"
          title="Movie Title"
          onError={renderPlaceholderImg}
        ></img>
        <XCircleIcon
          className="absolute w-12 top-1 right-1 hover:fill-red-600/50 hover:scale-105 transition-all"
          onClick={props.handleCloseLargePoster}
        />
      </div>
    </ReactModal>
  );
};

export default MoviePosterModal;
