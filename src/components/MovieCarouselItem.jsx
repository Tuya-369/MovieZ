import { Star } from "lucide-react";
import * as React from "react";

export const MovieCarouselItem = () => {
  return (
    <div className="relative w-screen h-[600px] md: w-[375px]  md:h[274px] text-white">
      <img
        className="w-full h-full object-cover rounded-md"
        src="https://billboardphilippines.com/wp-content/uploads/2024/10/wicked-movie-ftr-img-1600x838.jpg"
        alt="OFFICIAL.TRAILER"
      />
      <div className="absolute top-80 ml-40 left-4 max-w-[400px] h-[264px]  ">
        <p className="text-sm">Now Playing:</p>
        <h2 className="text-2xl font-bold">Wicked</h2>
        <div className="flex items-center gap-1 mt-1">
          <Star className="text-yellow-400 text-lg fill-yellow-300 " />
          <span className="text-sm">6.9/10</span>
        </div>
        <p className="text-xs mt-2">
          Elphaba, a misunderstood young woman because of her green skin
        </p>
        <button className="mt-3 px-3 py-1 bg-white text-black text-sm rounded hover:bg-gray-300 transition">
          ▶ Watch Trailer
        </button>
      </div>
    </div>
  );
};
