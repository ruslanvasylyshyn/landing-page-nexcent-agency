import React from "react";
import about1 from "../assets/about1.png";
import icon4 from "../assets/icons/icon4.png";
import icon5 from "../assets/icons/icon5.png";
import icon6 from "../assets/icons/icon6.png";
import icon7 from "../assets/icons/icon7.png";

const About = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex justify-between items-center flex-col md:flex-row gap-12">
          <div>
            <img src={about1} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-neutralDGrey font-semibold text-4xl mb-4 md:w-4/5">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="text-neutralGrey mb-8 text-sm md:w-4/5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>

            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 bg-neutralSilver">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-neutralDGrey font-semibold text-4xl mb-3 md:w-2/3">
              Helping a local{" "}
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p className="text-neutralGrey text-base md:w-4/5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
          </div>

          <div className="md:1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={icon4} alt="Members" className="mr-4 w-12 h-12" />
                <div>
                  <h4 className="text-lg font-bold text-neutralDGrey">
                    2,245,341
                  </h4>
                  <p className="text-base text-neutralGrey">Members</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src={icon5} alt="Members" className="mr-4 w-12 h-12" />
                <div>
                  <h4 className="text-lg font-bold text-neutralDGrey">
                    2,245,341
                  </h4>
                  <p className="text-base text-neutralGrey">Members</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={icon6} alt="Members" className="mr-4 w-12 h-12" />
                <div>
                  <h4 className="text-lg font-bold text-neutralDGrey">
                    2,245,341
                  </h4>
                  <p className="text-base text-neutralGrey">Members</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src={icon7} alt="Members" className="mr-4 w-12 h-12" />
                <div>
                  <h4 className="text-lg font-bold text-neutralDGrey">
                    2,245,341
                  </h4>
                  <p className="text-base text-neutralGrey">Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
