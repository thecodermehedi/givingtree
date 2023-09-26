import PropTypes from "prop-types";
import Swal from "sweetalert2";
import {saveDonation} from "../../utility/localstorage";

const DonationDetailsPage = ({card}) => {
  const handleDonation = (id, title, amount) => {
    const isExists = saveDonation(id);
    if (!isExists) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Donate $${amount} to ${title}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: `Already donated.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <section className="my-16 md:my-10 h-[30rem] md:h-[45rem] flex flex-col justify-center items-center">
      <div
        className=" hero w-full h-[18rem] md:h-[30rem] rounded-xl overflow-hidden relative"
        style={{
          backgroundImage: `url(${card?.picture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-24 ronded-xl bg-black bg-opacity-60 bottom-0 absolute"></div>
        <button
          onClick={() => handleDonation(card?.id, card?.title, card?.amount)}
          className="btn btn-sm md:btn-md text-white capitalize absolute bottom-5 left-5 border-none"
          style={{
            backgroundColor: `${card?.donateButtonBg}`,
          }}
        >
          Donate ${card?.amount}
        </button>
      </div>
      <div className="text-center lg:text-left w-full">
        <h1 className="font-bold text-2xl md:text-4xl text-gray-900 my-5">
          {card?.title}
        </h1>
        <p className="font-semibold opacity-80">{card?.description}</p>
      </div>
    </section>
  );
};

DonationDetailsPage.propTypes = {
  card: PropTypes.object,
};

export default DonationDetailsPage;
