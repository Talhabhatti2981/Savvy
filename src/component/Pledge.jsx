const Pledge = () => {
  return (
    <section className="mb-60 mt-50 px-4" id="pledge">
      <div className="flex flex-col lg:flex-row justify-around items-center gap-10">
        <div className="text-center lg:text-left">
          <img
            src="src/assets/img/fledge.png"
            alt=""
            width={300}
            className="lg:ml-20 pt-10 mx-auto lg:mx-0"
          />
          <p className="pt-8 text-[#636372] text-center leading-loose text-sm sm:text-base">
            Saavy Natural is committed to transparency. Our entire line is made only <br className="hidden sm:block" />
            with concern-free ingredients.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
            <div className="text-center">
              <img
                src="src/assets/img/natural.png"
                alt=""
                className="mx-auto sm:ml-24"
                width={100}
              />
              <h1 className="pt-1 font-medium font-serif">Natural</h1>
              <p className="pt-1 text-[#636372] leading-relaxed text-sm sm:text-base">
                Natural, minimally-processed plant-based <br />
                ingredients. We never use parabens or <br />
                chemical for any kind
              </p>
            </div>
            <div className="text-center">
              <img
                src="src/assets/img/natural.png"
                alt=""
                className="mx-auto sm:ml-24"
                width={100}
              />
              <h1 className="pt-1 font-medium font-serif">Pure</h1>
              <p className="pt-1 text-[#636372] leading-relaxed text-sm sm:text-base">
                Natural, minimally-processed plant-based <br />
                ingredients. We never use parabens or <br />
                chemical for any kind
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
            <div className="text-center">
              <img
                src="src/assets/img/hand.png"
                alt=""
                className="mx-auto sm:ml-22"
                width={100}
              />
              <h1 className="pt-1 font-medium font-serif">Handcrafted</h1>
              <p className="pt-1 text-[#636372] leading-relaxed text-sm sm:text-base">
                Small batch collections, made by hand <br />
                with responsibly sourced ingredients.
              </p>
            </div>
            <div className="text-center">
              <img
                src="src/assets/img/cut.png"
                alt=""
                className="mx-auto sm:ml-17"
                width={114}
              />
              <h1 className="pt-1 font-medium font-serif">Cruelty Free</h1>
              <p className="pt-1 text-[#636372] leading-relaxed text-sm sm:text-base">
                Small batch collections, made by hand <br />
                with responsibly sourced ingredients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pledge;
