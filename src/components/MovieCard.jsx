import { Star } from "lucide-react";

export const MovieCard = () => {
  return (
    <div className="w-full max-w-[180px] mx-auto">
      <div>
        <p className="text-2xl mt-[32px] mb-[36px] font-bold">Upcoming </p>
      </div>

      <img
        className="w-full h-auto rounded-t-lg"
        src="https://www.rappler.com/tachyon/2021/02/MORTAL_KOMBAT_VERT_MAIN_INTL.jpg?resize=1106%2C1639&zoom=1"
        alt="Movie"
      />

      <div className="bg-gray-100 h-[50px] flex items-center justify-between p-2">
        <div className="flex items-center">
          <Star className="text-yellow-300 fill-yellow-300" />
          <p clasName="ml-1">7.9/10</p>
        </div>
        <p className="text-xs mt-[30px]">Mortal Kombat</p>
      </div>
    </div>
  );
};
