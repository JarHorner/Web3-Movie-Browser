import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddRating = (props) => {
  return (
    <div>
      <div>
        <div
          className="flex flex-row justify-center items-center w-full mt-3 mb-3"
          onMouseLeave={(e) => {
            if (!props.selected) {
              props.DisplayRatingStars();
            }
          }}
        >
          {props.stars.map((s) => {
            return (
              <FontAwesomeIcon
                icon={s.icon}
                key={s.key}
                id={s.key}
                className="text-4xl"
                onMouseEnter={(e) => {
                  // if(!props.selected) {
                  //     props.ChangeFullStar(e)
                  //  }
                  props.ChangeFullStar(e);
                }}
                onClick={props.RatingSelected}
              />
            );
          })}
        </div>
        <div className="flex flex-row justify-center items-center w-full">
          <button
            className="bg-white/50 hover:bg-red-600 border-2 border-black font-bold py-2 px-8 rounded-2xl hover:scale-105 transition-all"
            onClick={props.SubmitRating}
          >
            Rate
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRating;
