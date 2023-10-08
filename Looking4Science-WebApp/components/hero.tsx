"use client";

import { useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

export default function Hero() {
  const swiperRef = useRef<SwiperType>();

  const [currentSlide, setCurrentSlide] = useState(1);

  // @ts-ignore
  const handleSlideChange = useCallback((swiper) => {
    setCurrentSlide(swiper.realIndex + 1);
  }, []);

  const news = [
    {
      title: "Transforming Flight",
      description:
        "We're working on new sustainable options for air travel in the 21st century.",
      image:
        "https://www.nasa.gov/wp-content/uploads/2023/03/img-8973.webp?resize=2000,1125",
      link: "https://www.nasa.gov/aeronautics/",
    },
    {
      title: "Bringing Space Back to Earth",
      description:
        "OSIRIS-REx is the first U.S. mission to collect a sample from an asteroid. It returned to Earth on Sept. 24, 2023, carrying material from asteroid Bennu. The spacecraft continued on to a new mission to explore asteroid Apophis.",
      image:
        "https://www.nasa.gov/wp-content/uploads/2020/02/osiris-rex-orbiting-bennu.png?resize=2000,1125",
      link: "https://science.nasa.gov/mission/osiris-rex/",
    },
    {
      title: "Exploring a Metal Asteroid",
      description:
        "The Psyche mission will visit an asteroid that appears to be the nickel-iron core of a planet from the early Solar System.",
      image:
        "https://www.nasa.gov/wp-content/uploads/2017/03/psychelongshot0718b_1041x805.jpg",
      link: "https://science.nasa.gov/mission/psyche/",
    },
  ];

  return (
    <div id="hero" className="-mt-20 relative">
      <Swiper
        scrollbar={{
          hide: true,
        }}
        loop={true}
        modules={[Scrollbar]}
        className="w-full h-full"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
      >
        {news.map((news, x) => (
          <SwiperSlide
            key={x}
            className="h-screen bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%), url(${news.image})`,
            }}
          >
            <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 flex flex-col gap-8">
              <p className="text-white text-5xl md:text-7xl font-bold mr-12">
                {news.title}
              </p>
              <p className="text-white text-base md:text-lg max-w-xl mr-32">
                {news.description}
              </p>
              <Button
                variant={"outline"}
                size={"lg"}
                className="rounded-none self-start font-bold text-lg"
              >
                DISCOVER
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-6 md:bottom-12 flex flex-col right-6 md:right-12 items-end gap-4 z-40">
        <MoveRight
          size={48}
          className="text-white cursor-pointer"
          onClick={() => swiperRef.current?.slideNext()}
        />
        <p className="text-white text-7xl font-bold select-none">
          {currentSlide.toString().padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
