
import RatingToStars from "./ratingToStars";
import AddRating from "./addRating";

const RatingBox = (props) => {

    return (
        <div className="flex flex-row justify-center mt-3 items-center">
          <div className="flex flex-col bg-slate-600 rounded-2xl px-3 pt-2 pb-5">
            {/* <div className="flex flex-row justify-center items-center">
                <h1 className="text-3xl font-bold">Ratings:</h1>
            </div> */}
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-center items-center w-full mt-2 mb-3" >
                        <RatingToStars />
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <div className="flex flex-col justify-center items-center mx-8">
                            <h2 className="text-2xl font-bold underline">Popularity</h2>
                            <p className="text-lg">33.726578</p>
                        </div>
                        <div className="flex-1"></div>
                        <div className="flex flex-col justify-center items-center mx-8">
                            <h2 className="text-2xl font-bold underline">Count</h2>
                            <p className="text-lg">10794</p>
                        </div>
                    </div>
                    <div>
                        <AddRating />
                    </div>
                </div>
            </div>

          </div>
        </div>
    )
}

export default RatingBox;