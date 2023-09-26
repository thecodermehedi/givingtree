import {PieChart, Pie, Cell} from "recharts";
import {useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";
import {getStoredDonation} from "../../utility/localstorage";

const Statistics = () => {
  const alldata = useLoaderData();
  const [remainingTotalDonation, setRemainingTotalDonation] = useState(0);
  const [doantedAmmount, setDonatedAmmount] = useState(0);
  useEffect(() => {
    const storedDonationsIds = getStoredDonation();
    if (alldata.length > 0) {
      const allamounts = alldata.map((data) => data.amount);
      const totalammount = allamounts.reduce(
        (tilltotal, current) => tilltotal + current,
        0
      );
      const storedDonationCards = [];
      for (const id of storedDonationsIds) {
        const donation = alldata.find((card) => card.id === id);
        if (donation) {
          storedDonationCards.push(donation);
        } else {
          return;
        }
      }
      const alldonationammount = storedDonationCards.map((data) => data.amount);
      const donatedammount = alldonationammount.reduce(
        (tilltotal, current) => tilltotal + current,
        0
      );
      const remainingTotal = totalammount - donatedammount;
      setRemainingTotalDonation(remainingTotal);
      setDonatedAmmount(donatedammount);
    }
  }, [alldata]);
  const data = [
    {name: "Remaining Donation", value: remainingTotalDonation},
    {name: "Your Donation", value: doantedAmmount},
  ];
  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        className="font-bold text-xl md:text-3xl"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen my-10 md:my-0 gap-10">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={200}
          fill="#FF444A"
          dataKey="value"
          className="hidden md:block"
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
          fill="#FF444A"
          dataKey="value"
          className="block md:hidden"
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="flex flex-col  md:flex-row gap-4 md:gap-16 font-semibold">
        <p>
          Your Donation &nbsp;
          <span className="bg-[#00C49F] px-10 text-sm  rounded-lg"></span>
        </p>
        <p>
          Total Donation &nbsp;
          <span className="bg-[#FF444A] px-10 text-sm rounded-lg"></span>
        </p>
      </div>
    </div>
  );
};

export default Statistics;
