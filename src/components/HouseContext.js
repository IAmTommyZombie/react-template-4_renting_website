import React, { useState, useEffect, createContext } from "react";

import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [city, setcity] = useState("Location (any)");
  const [cities, setcities] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price type (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allcities = houses.map((house) => {
      return house.city;
    });
    const uniquecities = ["Location (any)", ...new Set(allcities)];
    setcities(uniquecities);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    const uniqueProperties = ["Location (any)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    // set loading
    setLoading(true);

    // create a function that checks if the string includes '(any)'
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    // get first value of price and parse it to number
    const minPrice = parseInt(price.split(" ")[0]);

    // get second value of price and parse it to number
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      // if all values are selected
      if (
        house.city === city &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      // if all values are default
      if (isDefault(city) && isDefault(property) && isDefault(price)) {
        return house;
      }

      // if city is not default
      if (!isDefault(city) && isDefault(property) && isDefault(price)) {
        return house.city === city;
      }

      // if property is not default
      if (!isDefault(property) && isDefault(city) && isDefault(price)) {
        return house.type === property;
      }

      // if price is not default
      if (!isDefault(price) && isDefault(city) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      // city & property are not default
      if (!isDefault(city) && !isDefault(property) && isDefault(price)) {
        return house.city === city && house.type === property;
      }

      // if city and price are not default
      if (!isDefault(city) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.city === city;
        }
      }

      // property and price are not default
      if (isDefault(city) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        city,
        setcity,
        cities,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
