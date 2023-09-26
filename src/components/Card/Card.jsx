import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Card = ({card}) => {
  const {id, picture, title, category, categoryBg, cardBg, textColor} = card;

  return (
    <>
      <Link to={`/donation-details/${id}`}>
        <div
          className="card card-compact w-72 h-72 lg:w-80 lg:h-80 shadow-xl cursor-pointer "
          style={{
            backgroundColor: cardBg,
          }}
        >
          <figure>
            <img className="w-full object-cover h-64 md:h-72" src={picture} />
          </figure>
          <div
            className="card-body"
            style={{
              color: textColor,
            }}
          >
            <h3
              className="font-semibold text-sm w-fit p-1 rounded-lg"
              style={{
                backgroundColor: categoryBg,
              }}
            >
              {category}
            </h3>
            <h2 className="card-title text-lg font-bold">{title}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};

export default Card;
