import { MovieCard } from "@/components/MovieCard";
import { Header } from "../components/Header";
import { CarouselItem } from "@/components/MovieCarouselItem";

export default function Home() {
  return (
    <div>
      <Header />
      <CarouselItem />
      <div className="grid grid-cols-2 gap-4 md:gap-4">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}
