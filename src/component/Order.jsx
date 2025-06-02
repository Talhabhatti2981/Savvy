const Order = () => {
  return (
    <section className="mb-33 px-4 sm:px-6 md:px-10" id="order">
      <div>
        <div>
          <h1 className="text-center text-[#1E1D4C] font-serif text-5xl font-semibold sm:text-3xl">
            How easy to order
          </h1>
          <p className="text-center text-[#9F9F9F] mt-4 sm:text-sm">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        </div>

        <div className="flex justify-center gap-15 mt-23 flex-col sm:flex-row sm:gap-6 md:gap-15">
          <div className="flex flex-col items-center text-center mb-12 sm:mb-0">
            <img
              src="src/assets/img/order1.png"
              alt=""
              className="mx-auto sm:mx-0"
              width={100}
            />
            <h1 className="font-bold text-[#222222] mt-3 mb-1 text-lg sm:text-base">
              Order Securely Online
            </h1>
            <p className="sm:text-sm max-w-xs">
              Pellentesque viverra posuere diam vel laoreet <br /> Vivamus
              volutpat dignissim bibendum.
            </p>
          </div>
          <div className="flex flex-col items-center text-center mb-14 sm:mb-0">
            <img
              src="src/assets/img/order2.png"
              alt=""
              className="mx-auto sm:mx-0"
              width={102}
            />
            <h1 className="font-bold text-[#222222] mt-3 mb-1 text-lg sm:text-base">
              Get Fast & Free Shipping
            </h1>
            <p className="sm:text-sm max-w-xs">
              Pellentesque viverra posuere diam vel laoreet <br /> Vivamus
              volutpat dignissim bibendum.
            </p>
          </div>
          <div className="flex flex-col items-center text-center mb-12 sm:mb-0">
            <img
              src="src/assets/img/order3.png"
              alt=""
              className="mx-auto sm:mx-0"
              width={90}
            />
            <h1 className="font-bold text-[#222222] mt-5 mb-1 text-lg sm:text-base">
              Enjoy Your Order
            </h1>
            <p className="sm:text-sm max-w-xs">
              Pellentesque viverra posuere diam vel laoreet <br /> Vivamus
              volutpat dignissim bibendum.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-18 sm:flex-row sm:space-x-4">
          <div className="flex justify-center sm:justify-start space-x-2">
            <img
              src="src/assets/img/Star 2.png"
              alt=""
              className="lg:w-4 lg:h-4"
            />
            <img
              src="src/assets/img/Star 2.png"
              alt=""
              className="lg:w-4 lg:h-4"
            />
            <img
              src="src/assets/img/Star 2.png"
              alt=""
              className="lg:w-4 lg:h-4"
            />
            <img
              src="src/assets/img/Star 2.png"
              alt=""
              className="lg:w-4 lg:h-4"
            />
            <img
              src="src/assets/img/Star 2.png"
              alt=""
              className="lg:w-4 lg:h-4"
            />
          </div>

          <div className="flex flex-col items-center mt-4 sm:mt-0 sm:flex-row sm:space-x-2">
            <h2 className="text-center sm:text-left text-sm sm:text-base">
              Rated <span className="font-bold text-[#262626]">5.0</span> Based
              on <span className="font-bold text-[#262626]">1,000+</span>{" "}
              reviews
            </h2>

            <div className="flex items-center mt-2 sm:mt-0">
              <img
                src="src/assets/img/Ellipse 1.png"
                alt=""
                className="w-4 sm:w-5 md:w-6"
              />
              <img
                src="src/assets/img/Ellipse 2.png"
                alt=""
                className="w-4 sm:w-5 md:w-6 -ml-2"
              />
              <img
                src="src/assets/img/Ellipse 3.png"
                alt=""
                className="w-4 sm:w-5 md:w-6 -ml-2"
              />
              <img
                src="src/assets/img/Ellipse 4.png"
                alt=""
                className="w-4 sm:w-5 md:w-6 -ml-2"
              />
              <img
                src="src/assets/img/Ellipse 5.png"
                alt=""
                className="w-4 sm:w-5 md:w-6 -ml-2"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button className="w-90 py-5 cursor-pointer bg-[#4698B3] text-white font-bold rounded-sm hover:bg-[#87abb8]">
            Shop Now →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Order;
