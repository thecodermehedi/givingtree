import {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";
import {getStoredDonation} from "../../utility/localstorage";
import DonationCard from "../../components/DonationCard/DonationCard";

const Donation = () => {
  const cards = useLoaderData();
  const [donationCards, setDonationCards] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    const storedDonationsIds = getStoredDonation();
    if (cards.length > 0) {
      const storedDonation = [];
      for (const id of storedDonationsIds) {
        const donation = cards.find((card) => card.id === id);
        if (donation) {
          storedDonation.push(donation);
        } else {
          return;
        }
      }
      setDonationCards(storedDonation);
    }
  }, [cards]);
  const handleDonationCardsView = () => {
    setDataLength(donationCards.length);
  };
  return (
    <div className="flex flex-col min-h-[45rem] justify-center items-center my-5">
      <div className="px-5 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-4">
        {donationCards.length <= dataLength
          ? donationCards.map((card) => (
              <DonationCard key={card.id} card={card} />
            ))
          : donationCards
              .slice(0, dataLength)
              .map((card) => <DonationCard key={card.id} card={card} />)}
      </div>
      {donationCards.length > dataLength ? (
        <button
          onClick={handleDonationCardsView}
          className="btn btn-md w-fit capitalize text-white my-16 border bg-green-600 rounded-xl border-green-600 px-8 hover:bg-green-700 hover:border-green-700 self-center"
        >
          See All
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Donation;

/* 

<div className="px-20 grid grid-cols-1 md:grid-cols-2 place-items-center gap-4">
        {
        donationCards.slice(0, dataLength).map((card) => (
          <DonationCard key={card.id} card={card} />
        ))
        }
      </div>
      <button className="btn btn-md w-fit capitalize text-white my-16 border bg-green-600 rounded-xl border-green-600 px-8 hover:bg-green-700 hover:border-green-700">
        See All
      </button>

*/
