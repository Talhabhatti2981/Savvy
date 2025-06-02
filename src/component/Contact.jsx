const Contact = () => {
  return (
    <section className="mb-8" id="contact">
      <div className="bg-[#D9D9D9] px-5 sm:px-10 ">
        <div className="pt-8 text-center lg:text-left">
          <p className="text-[#4698B3] font-medium lg:ml-[110px]">CONTACT US</p>
          <h1 className="text-[#1E1D4C] pt-1 text-3xl sm:text-4xl lg:text-5xl font-semibold font-serif lg:ml-[110px]">
            Get In Touch
          </h1>
          <p className="text-[#636363] pt-6 text-sm leading-8 sm:text-base lg:pt-8 lg:ml-[110px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus,
            <br className="hidden sm:block" />
            luctus nec ullamcorper mattis, pulvinar dapibus.
          </p>
        </div>

        <div className="pt-8 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10">
          <div className="w-full max-w-xl px-3 sm:px-0">
            <form action="" >
              <div className=" flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  className="w-full sm:w-1/2 py-4 rounded-md p-3 bg-white border border-[#E4E4E4] focus:outline-none focus:border-[#4698B3]"
                  placeholder="First Name"style={{
                  border :"0.1px solid grey"
                }} 
                />
                <input
                  type="text"
                  className="w-full sm:w-1/2 py-4 rounded-md p-3 bg-white border border-[#E4E4E4] focus:outline-none focus:border-[#4698B3]"
                  placeholder="Last Name"
                  style={{
                  border :"0.1px solid grey"
                }} 
                />
              </div>
              <div className="pt-5">
                <input
                  type="email"
                  className="w-full py-4 rounded-md p-3 bg-white border border-[#E4E4E4] focus:outline-none focus:border-[#4698B3]"
                  placeholder="Email Address"
                  style={{
                  border :"0.1px solid grey"
                }} 
                />
              </div>
              <div className="pt-5">
                <textarea
                  className="w-full h-40 p-3 rounded-sm bg-white border border-[#E4E4E4] focus:outline-none focus:border-[#4698B3]"
                  placeholder="Message"
                  style={{
                  border :"0.1px solid grey"
                }} 
                ></textarea>
              </div>
              <button className="w-full py-4 cursor-pointer bg-[#4698B3] text-white font-medium mt-4 rounded-md hover:bg-[#87abb8]">
                Send Message
              </button>
            </form>
          </div>

          <div className="w-full max-w-md h-[400px] sm:h-[500px] lg:h-[610px] relative mt-4 lg:-mt-50 mb-10 rounded-2xl overflow-hidden">
  <iframe
    className="w-full h-full rounded-2xl"
    frameBorder="0"
    scrolling="no"
    marginHeight="0"
    marginWidth="0"
    src="https://maps.google.com/maps?width=400&height=660&hl=en&q=islington%20-%20city%20center%20west&t=&z=14&ie=UTF8&iwloc=B&output=embed"
  ></iframe>

  <a
    href="https://sprunkiretake.net"
    style={{
      fontSize: "2px",
      color: "gray",
      position: "absolute",
      bottom: 0,
      left: 0,
      zIndex: 1,
      maxHeight: "1px",
      overflow: "hidden",
    }}
  >
    sprunki retake
  </a>
</div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
