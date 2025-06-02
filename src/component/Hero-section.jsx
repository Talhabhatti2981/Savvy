import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden mb-20">
      <div className="relative w-full  sm:mt-0">
        <img
          src="src/assets/img/hero-img.png"
          alt="Hero Background"
          className="w-full object-cover  h-[700px] sm:h-[600px] md:h-[700px]"
        />

        <img
          src="src/assets/img/hero1.png"
          alt="Hero Overlay"
          className="absolute top-[130px]  lg:ml-13  sm:top-[76px] md:top-[50px] lg:top-[150px] left-0 
           w-[800px] sm:w-[450px] md:w-[650px] object-contain lg:mt-[34px] "
        />

        <img
          src="src/assets/img/hero2.png"
          alt=""
          className="absolute top-[116px]  lg:ml-16 sm:top-[120px] md:top-[116px] lg:top-[175px] 
                   left-[120px] sm:left-[180px] md:left-[240px] 
                   w-[100px] sm:w-[130px] md:w-[175px] 
                   object-contain"
        />

        <h1
          className="
    absolute
    top-[400px] sm:top-[280px] md:top-[260px] lg:top-[300px]
    right-[20px] md:right-[120px] lg:right-[100px]
    lg:ml-20
    text-2xl sm:text-4xl md:text-5xl
    sm:text-center
    font-serif
    text-[#684477]
    mr-[-55px]
    lg:mt-[25px]
  "
          style={{ fontSize: "55px" }}
        >
          All Natural, Handcrafted
        </h1>

        <h2
          className="absolute top-[580px] lg:mt-[17px] sm:top-[340px] lg:top-[360px] md:top-[320px] 
                       sm:right-[40px] md:right-[80px] lg:right-[140px]
                      text-2xl sm:text-2xl md:text-3xl lg:text-4xl 
                      font-serif text-[#684477] "
        >
          Bath & Body care products
        </h2>

        <img
          src="src/assets/img/metrus.png"
          alt=""
          className="w-full object-contain top-20 lg:-mt-65 sm:-mt-330"
        />
        <div className="relative">
          <img
            src="src/assets/img/Rectangle .png"
            alt=""
            className="w-full h-[60px] sm:h-[400px] lg:h-[114px] md:h-[180px] object-cover"
          />

          <div className="absolute inset-0 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-center h-full gap-3 sm:gap-2">
              <div className="w-full sm:w-1/2 flex sm:justify-start justify-center">
                <img
                  src="src/assets/img/savy.png"
                  alt="Savy"
                  className="absolute inset-0 w-full h-full object-cover sm:static sm:w-full sm:h-auto md:w-2/2"
                />
              </div>
              <div className="w-full sm:w-1/2 flex justify-center sm:justify-end items-center space-x-2 sm:space-x-3">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
                  As Seen on
                </h1>
                <img
                  src="src/assets/img/shark.png"
                  alt="Shark"
                  className="w-[50px] sm:w-[60px] md:w-[70px] lg:w-[80px]"
                />
                <img
                  src="src/assets/img/tank.png"
                  alt="Tank"
                  className="w-[50px] sm:w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
