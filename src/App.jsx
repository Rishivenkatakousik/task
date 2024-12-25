import React, { useState, useEffect } from "react";
import axios from "axios";
import BeerCard from "./components/BeerCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://api.sampleapis.com/beers/ale")
      .then((response) => {
        setBeers(response.data);
        setFilteredBeers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = beers.filter((beer) =>
      beer.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBeers(filtered);
  };

  return (
    <div className="App">
      <h1>Beer Finder</h1>
      <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
      <div className="beer-grid">
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
}

export default App;
