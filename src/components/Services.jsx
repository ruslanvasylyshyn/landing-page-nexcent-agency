import company1 from "../assets/clients/company1.png";
import company2 from "../assets/clients/company2.png";
import company3 from "../assets/clients/company3.png";
import company4 from "../assets/clients/company4.png";
import company5 from "../assets/clients/company5.png";
import company6 from "../assets/clients/company6.png";
import company7 from "../assets/clients/company7.png";
import icon1 from "../assets/icons/icon1.png";

const Services = () => {
  const servicesInfo = [
    {
      id: 1,
      title: "Membership Organisations",
      decription:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "../src/assets/icons/icon1.png",
    },
    {
      id: 2,
      title: "National Associations",
      decription:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "../src/assets/icons/icon2.png",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      decription:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "../src/assets/icons/icon3.png",
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto text-center">
      <h2 className="text-neutralDGrey font-semibold text-4xl mb-2">
        {" "}
        Our Clients
      </h2>
      <p className="text-neutralGrey mb-4">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="w-full flex justify-between items-center flex-wrap gap-8 my-12">
        <img src={company1} alt="" />
        <img src={company2} alt="" />
        <img src={company3} alt="" />
        <img src={company4} alt="" />
        <img src={company5} alt="" />
        <img src={company6} alt="" />
        <img src={company7} alt="" />
      </div>

      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-neutralDGrey font-semibold text-4xl mb-3">
          {" "}
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralGrey mb-10">Who is Nextcent suitable for?</p>
      </div>

      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {servicesInfo.map((service) => (
          <div
            key={service.id}
            className="px-4 py-20 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center flex-col h-full"
          >
            <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
              <img
                src={service.image}
                alt={`${service.title} Icon`}
                className="-ml-5"
              />
            </div>
            <h4 className="text-2xl font-bold text-neutralGrey mb-2 px-2">
              {service.title}
            </h4>
            <p className="text-sm text-neutralGrey">{service.decription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
