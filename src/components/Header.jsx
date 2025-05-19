import { Film, MoonIcon, Search } from "lucide-react";

export const Header = () => {
  return (
    <div className=" flex  justfy space-between items-center w-[428px] h-[52px] ">
      <div className=" flex ">
        <Film className="text-blue-600" />
        <p className=" Indigo-700 text-lg  text-blue-600 ">MovieZ</p>
      </div>
      {/* <button className="  w-97 h-36 border-solid ">Genre</button> */}
      <div className="pl-[379px]">
        <Search />
      </div>
      <div className="pl-[10px]">
        <MoonIcon />
      </div>
    </div>
  );
};
