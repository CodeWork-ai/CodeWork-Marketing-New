import React from "react";

const cardData = [
  { id: 1, image: "/logo1.png" },
  { id: 2, image: "/logo2.png" },
  { id: 3, image: "/logo3.png" },
  { id: 4, image: "/logo4.png" },
  { id: 5, image: "/logo5.png" },
  { id: 6, image: "/logo6.png" },
  { id: 7, image: "/logo7.png" },
];
const clientData = [
    { title: 'Client One', logo: '/logo1.png', width: 100, height: 50 },
    { title: 'Client Two', logo: '/logo2.png', width: 120, height: 60 },
    { title: 'Client Three', logo: '/logo3.png', width: 130, height: 70 },
    { title: 'Client Four', logo: '/logo4.png', width: 100, height: 50 },
    { title: 'Client Five', logo: '/logo5.png', width: 120, height: 60 },
    { title: 'Client Six', logo: '/logo6.png', width: 130, height: 70 },
    { title: 'Client Seven', logo: '/logo7.png', width: 130, height: 70 },
];

const ClientCard = () => {
  return (
    <div className="w-full h-full py-10 md:py-20 flex flex-col items-center space-y-10 md:space-y-20 px-10 2xl:px-20 ">
      {/* <div className="text-center px-4">
        <h1 className="text-xl lg:text-2xl 2xl:text-3xl text-[#0e0831] font-bold text-center mb-2 lg:mb-3 2xl:mb-5">
          Whom do we work with?
        </h1>
        <p className="text-center text-base lg:text-xl text-[#0e0831] 2xl:text-2xl leading-6 lg:leading-7 2xl:leading-8">
          Tailored strategies that reflect your brand’s identity. Enhance user
          engagement and streamline your business operations with our custom
          solutions.
        </p>
      </div> */}
      <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 pb-6 md:pb-10">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-red-600 bg-opacity-50 flex items-center justify-center w-full max-w-[300px] md:max-w-[400px] h-[200px] md:h-[300px] rounded shadow-lg transform transition-transform duration-700 hover:scale-105 p-2 mx-auto"
          >
            <img
              src={card.image}
              alt={`Card ${card.id}`}
              className="w-full h-full object-contain rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientCard;