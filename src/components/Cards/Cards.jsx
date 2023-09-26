import PropTypes from "prop-types";
import Card from "../Card/Card";

const Cards = ({newCards}) => {
  return (
    <div className="p-5 md:p-10 lg:p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
      {newCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

Cards.propTypes = {
  newCards: PropTypes.array,
};

export default Cards;
