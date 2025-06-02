import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Category = () => {
  const swiperRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Tahitian Vanilla Sugar Scrub",
      image: "src/assets/img/savy-category.png",
    },
    {
      id: 2,
      name: "Tahitian Vanilla Sugar Scrub",
      image: "src/assets/img/savy-category.png",
    },
    {
      id: 3,
      name: "Tahitian Vanilla Sugar Scrub",
      image: "src/assets/img/savy-category.png",
    },
    {
      id: 4,
      name: "Tahitian Vanilla Sugar Scrub",
      image: "src/assets/img/savy-category.png",
    },
    {
      id: 5,
      name: "Tahitian Vanilla Sugar Scrub",
      image: "src/assets/img/savy-product.png",
    },
    {
      id: 6,
      name: "Tahitian Vanilla Sugar Scrub",
      image: "src/assets/img/savy-product.png",
    },
    {
      id: 7,
      name: "Tahitian Vanilla Sugar Scrub",
      image: "src/assets/img/savy-product.png",
    },
    {
      id: 8,
      name: "Tahitian Vanilla Sugar Scrub",
      image: "src/assets/img/savy-product.png",
    },
    {
      id: 9,
      name: "Tahitian Vanilla Sugar Scrub",
      image: "src/assets/img/savy-product.png",
    },
  ];

  return (
    <section className="mb-41 mt-15 w-full mx-auto px-5">
      <div className="text-center">
        <h1 className="text-[#1E1D4C] mt-3 font-serif text-5xl font-semibold">
          Shop By Category
        </h1>
        <p className="mt-6 text-[#9F9F9F]">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
        <div className="flex justify-between mt-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="text-[#9C5B84] cursor-pointer w-10 h-10 flex items-center justify-center "
            aria-label="Previous"
          >
            <span class="font-bold text-black text-2xl">
              {" "}
              <span class="font-bold text-black text-2xl">
                <strong style={{ marginLeft: "203px" }}>&lt; </strong>
              </span>
            </span>
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="text-[#9C5B84] cursor-pointer w-10 h-10 flex items-center justify-center"
            aria-label="Next"
          >
            <span class="font-bold text-black text-2xl">
              {" "}
              <strong style={{ marginLeft: "-203px" }}>&gt; </strong>
            </span>
            <span class="font-bold text-black text-2xl"> </span>
          </button>
        </div>
      </div>

      <div className="mt-5">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 5 },
          }}
          navigation={false}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-purple-400/50"
                />
                <h2 className="text-black mt-2 font-semibold">
                  {product.name}
                </h2>
                <span className="font-bold text-[#9C5B84]">
                  {product.price}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
