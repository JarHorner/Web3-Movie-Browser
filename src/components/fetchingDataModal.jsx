import ReactModal from "react-modal";
import loadingGIF from "../assets/gifs/loading.gif";

const FetchingDataModal = (props) => {
  return (
    <ReactModal
      isOpen={props.fetchingModal}
      contentLabel="Fetching modal to display loading movies"
      appElement={document.getElementById("root")}
      style={{
        overlay: {
          backgroundColor: "rgba(251, 182, 206, 0.5)",
        },
        content: {
          top: "30%",
          left: "50%",
          right: "50%",
          bottom: "auto",
          marginRight: "-20%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <div className="flex flex-col align-center justify-center">
        <div className="flex align-center justify-center">
          <img src={loadingGIF} alt="loading gif" className="w-24"></img>
        </div>
        <p className="flex text-lg mt-8 text-center align-center justify-center">
          Loading all the movies for your searching pleasure!
        </p>
      </div>
    </ReactModal>
  );
};

export default FetchingDataModal;
