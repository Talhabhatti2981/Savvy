const Feature = () => {
  return (
    <section className="mb-33 w-full" id="feature">
      <div className="relative w-full">
        <img
          src="src/assets/img/bg.png"
          alt="Background"
          className="w-full h-[653px] sm:h-[520px] object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex flex-col lg:flex-row items-center lg:items-start pt-[40px] lg:pt-[60px] relative overflow-hidden">
              <div className="relative w-full lg:w-1/2 flex justify-center items-center overflow-visible">
                <img
                  src="src/assets/img/hero2.png"
                  alt=""
                  className="
                  absolute 
                  left-[5%] sm:left-[8%] md:left-[22%] lg:left-[3%]
                  w-[90px] sm:w-[150px] lg:w-[200px]
                  opacity-60 z-10
                  top-[80%] sm:top-[65%] md:top-[80%] lg:top-[80%]
                  -translate-y-1/2
                  max-w-full
        "
                  style={{ maxWidth: "200px" }}
                />

                <div className="relative max-w-full">
                  <img
                    src="src/assets/img/savy-fea.png"
                    alt="Feature"
                    className="h-[150px] sm:h-[200px] md:h-[250px] lg:h-[400px] object-contain z-20 relative max-w-full"
                    style={{ height: "auto", maxWidth: "100%" }}
                  />
                  <img
                    src="src/assets/img/off-sale.png"
                    alt=""
                    className="
          absolute 
          right-[-13%]
          w-[140px] sm:w-[180px] lg:w-[250px] xl:w-[280px]
          z-30 
          top-1/2 -translate-y-1/2
          max-w-none
          "
                    style={{ maxWidth: "280px", maxHeight: "100%" }}
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2 mt-16 lg:mt-13 text-center lg:text-left z-20 px-4 sm:px-8 lg:px-12">
                <h1 className="text-[#276D90] font-serif text-xl sm:text-3xl lg:text-5xl leading-tight">
                  Tahitian Vanilla <br className="hidden sm:block" />
                  Spa Gift Set
                </h1>
                <div className="flex justify-center mt-4">
                  <button className="mt-6 cursor-pointer sm:mt-8 bg-[#4698B3] text-white text-base lg:mr-53 sm:text-lg lg:px-16 px-8 sm:px-12 py-3 lg:py-3 sm:py-4 hover:bg-[#87abb8] transition-all duration-300">
                    Order now
                  </button>
                </div>
                <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <h2 className="text-[#224356] text-xl lg:ml-[50px] sm:text-2xl lg:text-2xl">
                    Featured on
                  </h2>
                  <img
                    src="src/assets/img/Mask.png"
                    alt="Featured Logo"
                    className="h-[30px] sm:h-[40px] lg:h-[70px] object-contain max-w-full"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
