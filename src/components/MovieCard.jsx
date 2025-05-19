import { Star } from "lucide-react";

export const MovieCard = () => {
  return (
    <div className="">
      <div>
        <p className="text-2xl mt-[32px] mb-[36px] font-bold">Upcoming </p>
      </div>

      <img
        className="w-[158px] h-[234px] md:w-[230px] md:h-[340px] rounded-t-lg "
        src="https://www.rappler.com/tachyon/2021/02/MORTAL_KOMBAT_VERT_MAIN_INTL.jpg?resize=1106%2C1639&zoom=1"
        alt=""
      />
      <div className="flex bg-gray-100 w-[158px] h-[50px] md:w-[230px] md:h-[76px]">
        <div className="flex m-[5px] ">
          <Star className="text-yellow-300 fill-yellow-300" />
          <p className=" "> 7.9/10</p>
          <p className=" mt-[30px] ">Mortal Kombat</p>
        </div>
      </div>
    </div>
  );
};
