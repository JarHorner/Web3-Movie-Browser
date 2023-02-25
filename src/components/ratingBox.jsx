import { useState, useEffect } from "react";
import RatingToStars from "./ratingToStars";
import AddRating from "./addRating";

import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons";

const RatingBox = (props) => {
    const [rated, setRated] = useState(false);
    const [selected, setSelected] = useState(false);
    const [stars, setStars] = useState([]);
    const [selectedStars, setSelectedStars] = useState([]);

    const SubmitRating = () => {
        setRated(true);
      };

      const RatingSelected = (e) => {
        setSelected(true);

        const starClicked = e.target.id;

        let newStars = [];
        for (let index = 0; index < 10; index++) {
            let star;
            if (index <= starClicked) {
                star = {icon: faStarFull, key: index}
            } else {
                star = {icon: faStarEmpty, key: index}
            }
            newStars.push(star);
        }
        setSelectedStars(newStars);
      };

    //   const DisplaySelectedStars = () => {
    //     let newStars = [];
    //     for (let index = 0; index < 10; index++) {
    //         const star = selectedStars[index];
    //         newStars.push(star);
    //     }
    //     setStars(newStars);
    //   };

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
        
        <div className="flex flex-row justify-center mt-3 items-center">
          <div className="flex flex-col bg-slate-600 rounded-2xl px-3 pt-2 pb-5">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-center items-center w-full mt-2 mb-3" >
                        <RatingToStars averageRating={props.movieSelected.ratings.average}/>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <div className="flex flex-col justify-center items-center mx-8">
                            <h2 className="text-2xl font-bold underline">Popularity</h2>
                            <p className="text-lg">{props.movieSelected.ratings.popularity}</p>
                        </div>
                        <div className="flex-1"></div>
                        <div className="flex flex-col justify-center items-center mx-8">
                            <h2 className="text-2xl font-bold underline">Count</h2>
                            <p className="text-lg">{props.movieSelected.ratings.count}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col justify-center items-center mt-3">
                            <h2 className="text-2xl font-bold underline">Rate Movie</h2>
                        </div>
                        {!rated ? <AddRating 
                            selected={selected} 
                            stars={stars} 
                            SubmitRating={SubmitRating} 
                            RatingSelected={RatingSelected}
                            DisplayRatingStars={DisplayRatingStars}
                            ChangeFullStar={ChangeFullStar} 
                        /> :
                        <div className="flex flex-row justify-center items-center w-full">
                            <h1 className="text-lg my-5">Thank you for rating Movie Title</h1>
                        </div> }
                    </div>
                </div>
            </div>

          </div>
        </div>
    )
}

export default RatingBox;