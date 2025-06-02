import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Review = () => {
  return (
    <section className="mb-39  px-4 md:px-10">
      <h1 className="text-center  font-serif text-3xl sm:text-4xl md:text-5xl  text-[#1E1D4C] font-semibold">
        Real Reviews From Real Customers
      </h1>
      <p className="text-center mt-4 mb-10">
        <a href="#" className="text-[#9F9F9F] underline">
          See all customer feedback
        </a>
      </p>

      <Swiper 
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[ Navigation]}
        className="pb-10"
      >
        {[1, 2, 3, 4, 5].map((item, i) => (
          <SwiperSlide key={i}>
            <div className="rounded-lg p-6  bg-white mt-10">
              <div className="flex items-center mb-3 ">
                <img
                  src="src/assets/img/review.png"
                  alt="Profile"
                  className="rounded-full w-16 h-16 object-cover mr-3"
                />
                <div>
                  <h2 className="text-lg font-bold">Thomas Darrian</h2>
                  <img src="src/assets/img/Stars.png" className="mt-1" alt="Rating" width={100} />
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, or aliquet odio mattis. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos.
              </p>
              <p className="text-xs text-gray-500 pt-4">
                {`11:${30 + i} AM - Dec 12, 2023`}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     
    </section>
  );
};

export default Review;
