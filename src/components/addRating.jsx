import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons";

const AddRating = (props) => {
    const [rated, setRated] = useState(false);
    const [selected, setSelected] = useState(false);
    const [stars, setStars] = useState([]);

    const RatingSelected = () => {
        setSelected(true);
      };

    useEffect(() => {
            DisplayRatingStars();
      }, []);

      const DisplayRatingStars = () => {
        let newStars = [];
        for (let index = 0; index < 10; index++) {
            const star = {icon: faStarEmpty, key: index}
            newStars.push(star);
        }
        setStars(newStars);
    }

    const ChangeFullStar = (e) => {
        const starHovering = e.target.id;

        let newStars = [];
        for (let index = 0; index < 10; index++) {
            let star;
            if (index <= starHovering) {
                star = {icon: faStarFull, key: index}
            } else {
                star = {icon: faStarEmpty, key: index}
            }
            newStars.push(star);
        }
        setStars(newStars);
    }


    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-3">
                <h2 className="text-2xl font-bold underline">Rate Movie</h2>
            </div>
            <div className="flex flex-row justify-center items-center w-full mt-3 mb-3" 
                onMouseLeave={() => {
                    if(!selected) {
                        DisplayRatingStars()
                    }
                }}
            >
                {stars.map( (s) => { return (<FontAwesomeIcon icon={s.icon} key={s.key} id={s.key} className="text-4xl" 
                                                onMouseEnter={(e) => {
                                                    if(!selected) {
                                                        ChangeFullStar(e)
                                                    }
                                                }}
                                                onClick={RatingSelected}
                                                /> 
                                            )})}
            </div>
            <div className="flex flex-row justify-center items-center w-full">
                <button
                    className="bg-white/50 hover:bg-red-600 border-2 border-black font-bold py-2 px-8 rounded-2xl hover:scale-105 transition-all"
                >
                    Rate 
                </button>
            </div>
        </div>
    )
}


export default AddRating;