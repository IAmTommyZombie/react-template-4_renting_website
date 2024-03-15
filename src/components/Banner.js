import React from "react";

import Image from "../assets/img/house-banner.png";

import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Rent</span> Your Dream Home With
            Us.
          </h1>
          <p className="max-w-[480px] mb-8">
            Consectetur irure incididunt quis Lorem sunt consectetur quis fugiat
            est ex ullamco. Labore commodo cillum eiusmod laborum veniam
            excepteur nostrud officia cillum. Cillum Lorem aute adipisicing et
            sit sit aute. Et Lorem anim sint ea pariatur ad mollit sunt
            voluptate ipsum. Exercitation sunt ullamco officia velit duis
            reprehenderit Lorem dolor nostrud mollit proident ad. Irure dolore
            commodo aliquip elit amet reprehenderit culpa. Veniam aute nulla
            dolor do enim adipisicing exercitation.
          </p>
        </div>

        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
