import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddRating = (props) => {
  return (
    <div>
      <div>
        <div
          className="flex flex-row justify-center items-center w-full mt-3 mb-3"
          // will make the stars list all empty stars unless a star has been clicked (selected)
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
                className="text-4xl cursor-pointer mx-1 text-pink-700"
                // changes the icon of each of the stars based on which star the cursor is hovering over.
                onMouseEnter={(e) => {
                  props.ChangeFullStar(e);
                }}
                // clicking on one selects is and when not hoving, the stars will stay as selected.
                onClick={props.RatingSelected}
              />
            );
          })}
        </div>
        <div className="flex flex-row justify-center items-center w-full py-2">
          <button
            className="px-3 py-2 bg-white text-pink-700 border rounded-lg hover:drop-shadow-2xl hover:scale-105 hover:text-white hover:bg-pink-700 transition-all w-full mt-1"
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
