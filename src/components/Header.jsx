import { Film, MoonIcon, Search } from "lucide-react";

export const Header = () => {
  return (
    <div className=" flex  justfy space-between items-center w-[1440px] h-[59px] mr-16 ml-16 mt-8 ">
      <div className=" flex ">
        <Film className="text-blue-600" />
        <p className="  Indigo-700 text-lg  text-blue-600 ">MovieZ</p>
      </div>
      <div className="">
        <button className="  w-97 h-36 border-solid  b-8 ml-16">Genre</button>
        <input
          className="w-150 h-15 radius/rounded-lg rounded-lg border/border-border gap-9"
          placeholder="Search..."
        ></input>
      </div>
      <div className="pl-[10px]">
        <MoonIcon />
      </div>
    </div>
  );
};
