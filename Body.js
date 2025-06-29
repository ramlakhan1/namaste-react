import React, { useEffect, useState } from "react";
import RestrorentCard from "./restrorent/RestrorentCard";
import { FaStar } from "react-icons/fa";
import Shimmer from "./components/Shimmer";

function Body() {
  const [restroList, setRestroLis] = useState([]);
  const [filterRestro, setFilterRestro] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //Optional chaning
    setRestroLis(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestro(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log(restroList);
  console.log("form");
  if (restroList.length === 0) {
    return (
      <div className="restro-card body">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  }

  return (
    <div id="body" className="body">
      <div className="button-container">
        <div className="Search">
          <input
            className="search-input"
            placeholder="Search"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="filter-btn"
            onClick={() => {
              const filterRestrorent = restroList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilterRestro(filterRestrorent);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log(restroList)
            const filtered = restroList.filter(
              (res) => res.info.avgRating > 4.0
            );
            setFilterRestro(filtered); // <-- set filtered
          }}
        >
          <FaStar style={{ marginRight: "6px" }} />
          Top Rated
        </button>
        <button
          className="filter-btn reset"
          onClick={() => {
            fetchData();
          }}
        >
          🔁 Reset
        </button>
      </div>
      <div className="restro-card">
        {filterRestro.map((restaurant) => (
          <RestrorentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
