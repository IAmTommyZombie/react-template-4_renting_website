import React, { useState, useEffect, useContext, useRef } from "react";
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleSelection = (selectedPrice) => {
    setPrice(selectedPrice);
    setIsOpen(false); // Close the dropdown after making a selection
  };

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "1500 - 1800",
    },
    {
      value: "1800 - 2000",
    },
    {
      value: "2000 - 2300",
    },
    {
      value: "2300 - 2800",
    },
    {
      value: "2800 - 3500",
    },
    {
      value: "3500 - 4500",
    },
  ];

  return (
    <Menu as="div" className="dropdown relative" ref={dropdownRef}>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div className="pt-4">
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]">Choose price range</div>
          {isOpen ? (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          )}
        </div>
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {prices.map((priceOption, index) => (
          <Menu.Item
            onClick={() => handleSelection(priceOption.value)} // Update the onClick handler
            className="cursor-pointer hover:text-violet-700 transition"
            as="li"
            key={index}
          >
            {priceOption.value}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
