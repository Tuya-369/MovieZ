import { MovieCard } from "@/components/MovieCard";
import { Header } from "../components/Header";
import { MovieCarousel } from "@/components/MovieCarousel";
import { Footer } from "@/components/FooterContent";

export default function Home() {
  return (
    <div>
      <Header />
      <MovieCarousel />
      <div>
        <div>
          <h1 className=" mt-[32px] mb-[36px] ml-[50px] text-2xl font-bold">
            Upcoming
          </h1>
        </div>
        <div className=" flex justify center grid grid-cols-2 md:grid-cols-5 gap-8  w-[1440px] h-[3040] ">
          {Array.from({ length: 15 }).map((_, index) => (
            <MovieCard />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
