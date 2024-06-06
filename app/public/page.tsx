import Image from "next/image";
import { Carousel } from "../components/home/Carousel";
import { ItensCard } from "../components/home/ItensCard";

export default function index() {
  return (
    <main className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      public
      <Carousel></Carousel>
      <ItensCard></ItensCard>
    </main>
  );
}