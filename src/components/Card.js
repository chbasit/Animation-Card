import React from "react";
import beachImage from "../assets/images/beach.jpg";
import desertImage from "../assets/images/desert.jpg";
import mountainImage from "../assets/images/mountain.jpg";
import galaxyImage from "../assets/images/galaxy.jpg";

const Card = () => {
  const cards = [
    {
      title: "Majestic Peaks",
      copy: "Experience breathtaking mountain landscapes and unforgettable adventures.",
      button: "Book Now",
      image: mountainImage,
    },
    {
      title: "Seaside Escapes",
      copy: "Feel the ocean breeze and soak up the sun at these stunning beach getaways",
      button: "Book Now",
      image: beachImage,
    },
    {
      title: "Desert Wonders",
      copy: "Vast dunes, starry nights, and the adventure of a lifetime await you in the desert",
      button: "Book Now",
      image: desertImage,
    },
    {
      title: "Beyond the Stars",
      copy: "Leave Earth behind and embark on an interstellar journey like never before.",
      button: "Book Now",
      image: galaxyImage,
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 cursor-pointer">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card group relative flex flex-col items-center justify-center h-96 w-72 bg-white shadow-lg overflow-hidden rounded-lg hover:shadow-2xl transition-shadow duration-200"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{
                backgroundImage: `url(${card.image})`,
              }}
            ></div>

            <div className="text-center relative z-10 flex flex-col items-center justify-end h-full w-full bg-black bg-opacity-50 p-4">
              <h2 className="title text-xl font-bold text-white mb-2  translate-y-10  group-hover:translate-y-0 transition-all duration-300">
                {card.title}
              </h2>

              <div className="flex flex-col items-center justify-end h-24 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <p className="copy text-sm italic text-gray-200 mb-2">
                  {card.copy}
                </p>
                <button className="btn px-2 py-2 bg-white text-black font-semibold rounded transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {card.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Card;
