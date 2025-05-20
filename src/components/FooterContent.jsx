import { Film, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <div className=" flex bg-indigo-600 w-screen h-[280px] mt-[20px]">
      <div>
        <div className=" flex justify center w-[247px] h-[200px] mr-[80px] ml-[80px] pt-[40px] ">
          <Film className="text-zinc-50 " />
          <p className=" text-lg  text-zinc-50 ">MovieZ</p>
        </div>
        <p className="mr-[80px] ml-[80px] pt-[10px]">
          © 2024 Movie Z. All Rights Reserved.
        </p>
      </div>
      <div className="   center h-[200px] w-[913px] pt-[40px] ml-[796px]">
        <p className="">Contact Information</p>
        <Mail />
        <Button variant="link">Gantulgagntuya30@gmail.com</Button>
        <Phone />
        <Button variant="link">+976(80688616)</Button>
        <p>Follow us</p>
        <Button variant="link">Facebook </Button>
      </div>
    </div>
  );
};
