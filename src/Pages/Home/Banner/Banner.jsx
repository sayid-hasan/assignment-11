// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import fadeIn from "../../../Utilities/varient";
const Banner = () => {
  return (
    <>
      <div
        // variants={fadeIn("right", 0.2)}
        // initial={"hidden"}
        // whileInView={"show"}
        // viewport={{ once: false, amount: 0.7 }}
        className="my-10"
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" relative">
              <div className="h-[600px] w-full">
                {" "}
                <img
                  src={"https://i.ibb.co/7y3nGvQ/banner1.jpg"}
                  className="w-full"
                  alt=""
                />
              </div>
              <div className="z-10 absolute flex justify-start items-center top-0 left-0 h-full w-full bg-black bg-opacity-75 md:px-16 px-5 ">
                <div className="text-left flex flex-col gap-5">
                  <motion.div
                    variants={fadeIn("down", 0.1)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-2xl md:text-4xl font-font-oswald font-bold text-white md:leading-relaxed leading-normal"
                  >
                    <span className="">Digital Horizons:</span> <br />
                    <span className=" md:text-[60px] ">
                      Pioneering Tomorrow
                      <span>&#39;</span>s{" "}
                      <span className="text-[#F26767]">Frontiers</span>
                    </span>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    <p className="text-sm max-w-[600px] text-white font-font-merriweather md:leading-normal leading-tight">
                      Explore the cutting-edge realm of technology where
                      possibilities are limitless. Join us as we navigate the
                      forefront of innovation.
                    </p>
                    <button className="btn h-auto mt-4 border-transparent hover:bg-transparent hover:border-[#F26767] bg-[#F26767] text-white font-bold md:px-9 px-6  md:py-4 py-2 text-base max-w-[180px]">
                      Learn More
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" relative">
              <div className="h-[600px] w-full">
                {" "}
                <img
                  src={"https://i.ibb.co/dM7bMLy/banner2.jpg"}
                  className="w-full"
                  alt=""
                />
              </div>
              <div className="z-10 absolute flex justify-center items-center top-0 left-0 h-full w-full bg-black bg-opacity-75 md:px-16 px-5 ">
                <div className="text-center flex flex-col gap-5">
                  <motion.div
                    variants={fadeIn("down", 0.1)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-2xl md:text-4xl font-font-oswald font-bold text-white md:leading-relaxed leading-normal"
                  >
                    <span className="">Code Chronicles:</span> <br />
                    <span className=" md:text-[60px] ">
                      Crafting the Future
                      <span className="text-[#F26767]"> Byte by Byte</span>
                    </span>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    <p className="text-sm   text-white font-font-merriweather md:leading-normal leading-tight">
                      Enter the world of coding and software engineering where
                      each line shapes tomorrow&#39;s technology. Join us as we
                      unravel the language of the future.
                    </p>
                    <button className="btn h-auto mt-4 border-transparent hover:bg-transparent hover:border-[#F26767] bg-[#F26767] text-white font-bold md:px-9 px-6  md:py-4 py-2 text-base max-w-[180px]">
                      Learn More
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" relative">
              <div className="h-[600px] w-full">
                {" "}
                <img
                  src={"https://i.ibb.co/4fqy45J/banner3.jpg"}
                  className="w-full"
                  alt=""
                />
              </div>
              <div className="z-10 absolute flex justify-end items-center top-0 left-0 h-full w-full bg-black bg-opacity-75 md:px-16 px-5 ">
                <div className="text-right flex flex-col gap-5">
                  <motion.div
                    variants={fadeIn("down", 0.1)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-2xl md:text-4xl font-font-oswald font-bold text-white md:leading-relaxed leading-normal"
                  >
                    <span className="">AI Frontier:</span> <br />
                    <span className=" md:text-[60px] ">
                      Redefining Possibilities, One Algorithm
                      <span>&#39;</span>s{" "}
                      <span className="text-[#F26767]">at a Time</span>
                    </span>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    <p className="text-sm  text-white font-font-merriweather md:leading-normal leading-tight">
                      Step into the frontier of artificial intelligence where
                      boundaries are challenged and innovation thrives. Join us
                      as we explore the limitless potential of AI.
                    </p>
                    <button className="btn h-auto mt-4 border-transparent hover:bg-transparent hover:border-[#F26767] bg-[#F26767] text-white font-bold md:px-9 px-6  md:py-4 py-2 text-base max-w-[180px]">
                      Learn More
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
