import React from "react";
import { Carousel } from "flowbite-react";
import banner1 from "../assets/banner1.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel pauseOnHover slide={false} className="w-full mx-auto">
          <div className="my-28 md:py-8 py-12 flex flex-col md:flex-row-reverse items-center justify-center dark:bg-gray-700 dark:text-white ">
            <div className="flex justify-between items-center flex-col-reverse md:flex-row">
              <div className="md:w1/2 mr-28">
                <h2 className="text-4xl font-semibold text-neutralDGrey mb-4 md:w-3/4 leading-snug md:text-6xl">
                  Lessons and insights
                  <span className="text-brandPrimary leading-snug">
                    {" "}
                    from 8 years
                  </span>
                </h2>
                <p className="text-neutralGrey text-base mb-8">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <button className="btn-primary">Register</button>
              </div>

              <div className="max-w-fit md:max-w-full">
                <img src={banner1} alt="man with laptop"/>
              </div>
            </div>
          </div>
          <div className="my-28 md:py-8 py-12 flex flex-col md:flex-row-reverse items-center justify-center dark:bg-gray-700 dark:text-white">
            <div className="flex justify-between items-center flex-col-reverse md:flex-row">
              <div className="md:w1/2 mr-28">
                <h2 className="text-4xl font-semibold text-neutralDGrey mb-4 md:w-3/4 leading-snug md:text-6xl">
                  Lessons and insights
                  <span className="text-brandPrimary leading-snug">
                    {" "}
                    from 8 years
                  </span>
                </h2>
                <p className="text-neutralGrey text-base mb-8">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <button className="btn-primary">Register</button>
              </div>

              <div className="max-w-fit md:max-w-full">
                <img src={banner1} alt="man with laptop" />
              </div>
            </div>
          </div>
          <div className="my-28 md:py-8 py-12 flex flex-col md:flex-row-reverse items-center justify-center dark:bg-gray-700 dark:text-white">
            <div className="flex justify-between items-center flex-col-reverse md:flex-row">
              <div className="md:w1/2 mr-28">
                <h2 className="text-4xl font-semibold text-neutralDGrey mb-4 md:w-3/4 leading-snug md:text-6xl">
                  Learn and earn
                  <br />
                  <span className="text-brandPrimary leading-snug">
                    in 4 month
                  </span>
                </h2>
                <p className="text-neutralGrey text-base mb-8">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <button className="btn-primary">Register</button>
              </div>

              <div className="max-w-fit md:max-w-full">
                <img src={banner1} alt="man with laptop" />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
