import React, { useState } from "react"

// shadcn dialog
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

// icons
import { IoEyeOutline, IoIosStar } from "react-icons/io"
import { FaRegHeart } from "react-icons/fa6"
import { MdOutlineClear } from "react-icons/md"
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa"

// swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

// common components
import Title from "../common/Title"
import Image from "../common/Image"
import Flex from "../common/Flex"

// images
import game_1 from "/src/assets/game_1.png"
import game_2 from "/src/assets/game_2.png"
import game_3 from "/src/assets/game_3.png"
import game_4 from "/src/assets/game_4.png"

const QuckView = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button variant="ghost" className="p-1">
          <div className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center">
            <IoEyeOutline className="size-6 hover:text-primery" />
          </div>
        </Button>
      </DialogTrigger>

      {/* Modal Content */}
      <DialogContent className="max-w-[900px] p-5 overflow-visible">

        {/* Close Button */}
        <DialogClose className="absolute top-3 right-3">
          <MdOutlineClear className="size-5" />
        </DialogClose>

        <div className="flex gap-6">

          {/* LEFT : SLIDER */}
          <div className="w-1/2 h-[420px]">
            <Flex className="h-full gap-3">

              {/* Thumbs */}
              <div className="w-[20%] h-full">
                <Swiper
                  direction="vertical"
                  spaceBetween={10}
                  slidesPerView="auto"
                  freeMode
                  watchSlidesProgress
                  onSwiper={setThumbsSwiper}
                  modules={[FreeMode, Thumbs]}
                  className="h-full"
                >
                  {[game_1, game_2, game_3, game_4].map((img, i) => (
                    <SwiperSlide key={i} className="!h-auto cursor-pointer">
                      <Image imgSrc={img} className="w-full" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Main Slider */}
              <div className="w-[80%] h-full relative group">
                <Swiper
                  loop
                  spaceBetween={10}
                  thumbs={{ swiper: thumbsSwiper }}
                  navigation={{
                    nextEl: ".next_arrow",
                    prevEl: ".prev_arrow",
                  }}
                  modules={[Navigation, Thumbs]}
                  className="h-full"
                >
                  {[game_1, game_2, game_3, game_4].map((img, i) => (
                    <SwiperSlide key={i}>
                      <Image
                        imgSrc={img}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}

                  <div className="prev_arrow absolute left-2 top-1/2 -translate-y-1/2 w-[30px] h-[30px] bg-white flex items-center justify-center rounded opacity-0 group-hover:opacity-100 cursor-pointer">
                    <FaLongArrowAltLeft />
                  </div>

                  <div className="next_arrow absolute right-2 top-1/2 -translate-y-1/2 w-[30px] h-[30px] bg-white flex items-center justify-center rounded opacity-0 group-hover:opacity-100 cursor-pointer">
                    <FaLongArrowAltRight />
                  </div>
                </Swiper>
              </div>
            </Flex>
          </div>

          {/* RIGHT : DETAILS */}
          <div className="w-1/2">
            <Title
              text="Havic HV G-92 Gamepad"
              as="h4"
              className="text-xl font-semibold"
            />

            <div className="flex items-center gap-3 py-2">
              <Title text="$192.00" as="h5" className="text-lg" />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <IoIosStar key={i} className="text-yellow-500 size-4" />
                ))}
                <span className="text-sm text-gray-500">(123 reviews)</span>
              </div>
            </div>

            <div className="flex items-center gap-4 py-3">
              <Button>Buy Now</Button>
              <div className="w-[34px] h-[34px] border flex items-center justify-center rounded">
                <FaRegHeart />
              </div>
            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  )
}

export default QuckView
