import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heropData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div
          className="flex items-center gap-2 justify-center p-2 bg-orange-100
            px-2 py-1 rounded-full"
        >
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-6 h-6 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
          The Fastest Delirevy in
          <span className="text-orange-600 text-[3rem] lg:text-[4.5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          ifhwiuwbuibuw wbibvbvuibibr iubwebbwbvbibwibv wibiebvuibb uewbububeubv
          uiwbeubvubbub wbebuwbbuw sbububeb uibvubqbvubquibvui iubviub i
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 
            w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out
            duration-100 md:w-auto"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-650 "
          alt="hero-bg"
        />
        <div
          className="w-full h-420 lg:h-650 absolute flex items-center justify-center
         py-8 lg:px-24 top-0 left-0 gap-2 lg:gap-4 flex-wrap  "
        >
          {heropData &&
            heropData.map((n) => (
              <div
                key={n.id}
                className="w-[135px] h-[150px] lg:w-190 lg:h-auto p-4 
                bg-cardOverlay backdrop-blur-md 
                rounded-3xl items-center flex flex-col
                justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="lg:w-40 lg:-mt-20 w-[70px] -mt-10"
                  alt="I1"
                />
                <p className="lg:text-xl text-[12px] font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>
                <p className="text-[10px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>
                <p className="text-sm lg:text-base font-semibold text-textColor">
                  <span className="text-xs lg:text-sm text-red-600">IDR</span>{" "}
                  {n.price}.00
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
