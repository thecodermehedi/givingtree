import {useEffect, useState} from "react";
import {useLoaderData, useParams} from "react-router-dom";
import DonationDetailsPage from "../../components/DonationDetailsPage/DonationDetailsPage";

const DonationDetails = () => {
  const {id} = useParams();
  const cards = useLoaderData();
  const [card, setCard] = useState();
  useEffect(() => {
    const card = cards?.find((card) => card.id === id);
    setCard(card);
  }, [id, cards]);
  return (
    <section className="px-20">
      <DonationDetailsPage card={card} />
    </section>
  );
};

export default DonationDetails;