import React, { useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";

const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken");

  const [{ foodItems }, dispatch] = useStateValue();

  return (
    <section className="w-full lg:px-10 my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p
          className="text-2xl font-semibold capitalize text-textColor relative
          before:absolute before:rounded-lg before:content- before:w-24  before:h-1
          before:-bottom-4 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all
          ease-in-out duration-100 mr-auto"
        >
          Our Popular Dishes
        </p>

        <div
          className="w-full flex items-center justify-start lg:justify-center md:gap-8 gap-3 py-6 overflow-x-scroll
        scrollbar-none mt-3"
        >
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.8 }}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName ? "bg-cartNumBg" : "bg-card"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col
                gap-3 items-center justify-center hover:bg-cartNumBg `}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter === category.urlParamName
                      ? "bg-card"
                      : "bg-cartNumBg"
                  } group-hover:bg-card flex items-center justify-center`}
                >
                  <IoFastFood
                    className={`${
                      filter === category.urlParamName
                        ? "text-textColor"
                        : "text-card"
                    } group-hover:text-textColor`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white font-semibold`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category == filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
