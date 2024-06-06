import Image from "next/image";
import { Carousel } from "@/components/store/Carousel";
import { ItensGrid } from "@/components/store/ItensGrid";

export default function index() {
  return (
    <main className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      public
      <Carousel></Carousel>
      <ItensGrid></ItensGrid>
    </main>
  );
}