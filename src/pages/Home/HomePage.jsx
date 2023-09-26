import {useState, useEffect} from "react";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
const Home = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setNewCards(data);
      });
  }, []);
  const [newCards, setNewCards] = useState([]);
  const [query, setQuery] = useState("");
  const handleSearch = (query) => {
    if (newCards.length > 0 && query.length > 0) {
      const queryCards = cards.filter((card) =>
        card.category.toLowerCase().includes(query.toLowerCase())
      );
      setNewCards(queryCards);
      setQuery("");
    } else if (query === "") {
      setNewCards(cards);
      setQuery("");
    }
  };
  return (
    <div>
      <Banner setQuery={setQuery} query={query} handleSearch={handleSearch} />
      <Cards newCards={newCards} />
    </div>
  );
};

export default Home;
