
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { faStarHalfStroke as faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons";

const RatingToStars = (props) => {

    const ConvertRatingToStars = () => {
        let stars = [];
        // hard coding a rating to test
        let rating = RoundRating(7.7);

        for (let index = 1; index <= 10; index++) {
            if (index <= rating) {
                    stars.push(faStarFull);
            } else if (index > rating) {
                if (rating % 1 === 0.5 && index - 1 < rating) {
                    stars.push(faStarHalf);
                } else {
                    stars.push(faStarEmpty);                  
                }
            }
        }
        return stars;
    }

    const RoundRating = (rating) => {
        let whole = Math.floor(rating);
        let decimal = rating % 1;

        if (decimal <= 0.25) {
            decimal = 0;
        } else if (decimal < 0.75) {
            decimal = 0.5;
        } else if (decimal >= 0.75) {
            decimal = 1;
        }
        return whole + decimal;
    }

    return (
        <>
            {ConvertRatingToStars().map( (s) => { return (<FontAwesomeIcon icon={s} className="text-5xl"/> )})}
        </>
    )
}


export default RatingToStars;