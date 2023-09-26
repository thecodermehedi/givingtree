import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const DonationCard = ({card}) => {
  const {
    id,
    amount,
    picture,
    title,
    category,
    categoryBg,
    cardBg,
    textColor,
    donateButtonBg,
  } = card;
  return (
    <div
      className="card card-side h-60 w-full shadow-xl"
      style={{
        backgroundColor: cardBg,
      }}
    >
      <figure>
        <img className="object-cover h-full w-50 md:w-72" src={picture} />
      </figure>
      <div className="card-body">
        <h3
          className="font-semibold text-sm w-fit px-2 py-1 rounded-lg"
          style={{
            backgroundColor: categoryBg,
            color: textColor,
          }}
        >
          {category}
        </h3>
        <h2 className="card-title text-xl font-bold">{title}</h2>
        <h3
          className="font-bold"
          style={{
            color: textColor,
          }}
        >
          ${amount}
        </h3>
        <Link to={`/donation-details/${id}`}>
          <button
            className="btn btn-sm md:btn-md w-full lg:w-fit capitalize text-sm md:text-base  text-white mt-2 md:mt-10"
            style={{
              backgroundColor: donateButtonBg,
            }}
          >
            <span className="hidden md:inline">View</span>Details
          </button>
        </Link>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  card: PropTypes.object,
};

export default DonationCard;
