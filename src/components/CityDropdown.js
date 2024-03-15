import React, { useState, useEffect, useContext, useRef } from "react";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const CityDropdown = () => {
  const { city, setcity, cities } = useContext(HouseContext);
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

  return (
    <Menu as="div" className="dropdown relative" ref={dropdownRef}>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div className="pt-4">
          <div className="text-[15px] font-medium leading-tight ">{city}</div>
          <div className="text-[13px]">Select your place</div>
          {isOpen ? (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          )}
        </div>
      </Menu.Button>

      {isOpen && (
        <Menu.Items className="dropdown-menu">
          {cities.map((city, index) => {
            return (
              <Menu.Item
                onClick={() => {
                  setcity(city);
                  setIsOpen(false); // Close the dropdown after selecting a city
                }}
                className="cursor-pointer hover:text-violet-700 transition"
                as="li"
                key={index}
              >
                {city}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      )}
    </Menu>
  );
};

export default CityDropdown;
