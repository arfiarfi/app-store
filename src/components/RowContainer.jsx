import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();

  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();

  const addtocart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addtocart();
  }, [items]);

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3 my-12 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none "
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-275 h-[160px] md:h-[175px] min-w-[275px] md:w-300 md:min-w-[300px] my-12 backdrop-blur-lg
          bg-cardOverlay rounded-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly 
            py- px-4 relative"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="md:w-32 w-24 md:h-[140px] h-[110px] -mt-7 drop-shadow-2xl"
              >
                <img
                  src={item?.imageURL}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center
                justify-center cursor-pointer hover:shadow-lg"
                onClick={() => setItems([...cartItems, item])}
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-sm md:text-base">
                {item?.title}
              </p>
              <p className="mt-1 md:text-sm text-[12px] text-gray-500">
                {item?.calories} Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="md:text-base text-sm text-headingColor font-semibold">
                  <span className="text-[12px] text-red-500">IDR</span>{" "}
                  {item?.price}.00
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-300" />
          <p className="text-xl text-headingColor font-semibold my-3">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
