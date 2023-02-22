import ReactModal from "react-modal";

import { XCircleIcon } from "@heroicons/react/24/outline";

const MoviePosterModal = (props) => {

// will add in props movie image link
  const movieImage =
  "https://image.tmdb.org/t/p/" + "w500" + "/wby9315QzVKdW9BonAefg8jGTTb.jpg";

    return (
        // The style of this ReactModel https://github.com/reactjs/react-modal was used as a basis
        <ReactModal
            isOpen={props.showLargePoster}
            contentLabel="About section"
            appElement={document.getElementById("root")}
            onRequestClose={props.handleCloseLargePoster}
            style={{
                overlay: {
                backgroundColor: 'rgba(251, 182, 206, 0.5)',
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    padding: '0',
                    transform: 'translate(-50%, -50%)',
                  }
            }}
        > 
          <div className="relative">
            <img src={movieImage} className="" alt="Movie Title" title="Movie Title"></img>
            <XCircleIcon 
                className="absolute w-12 top-1 right-1 hover:fill-red-600/50 hover:scale-105 transition-all"
                onClick={props.handleCloseLargePoster}
            />
          </div>
        </ReactModal>
    )
}

export default MoviePosterModal;