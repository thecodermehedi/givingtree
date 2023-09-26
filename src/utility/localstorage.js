const getStoredDonation = () => {
  const storedDonation = localStorage.getItem("donationDetails");
  const Donations = storedDonation ? JSON.parse(storedDonation) : [];
  return Donations;
};

const saveDonation = (id) => {
  const storedDonations = getStoredDonation();
  const exists = storedDonations.find((DonationId) => DonationId === id);
  if (!exists) {
    storedDonations.push(id);
    localStorage.setItem("donationDetails", JSON.stringify(storedDonations));
    return false;
  } else {
    return true;
  }
};

export {saveDonation, getStoredDonation};
