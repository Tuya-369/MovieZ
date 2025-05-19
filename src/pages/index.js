import { MovieCard } from "@/components/MovieCard";
import { Header } from "../components/Header";
import { CarouselItem } from "@/components/MovieCarouselItem";

export default function Home() {
  return (
    <div>
      <Header />
      <CarouselItem />
      <MovieCard />
    </div>
  );
}
