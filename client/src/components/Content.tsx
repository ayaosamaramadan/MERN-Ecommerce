const Content = () => {
  return (
    <>
      <div className="mt-52 ml-40">
        <span className="text-gray-400">Home / </span>
        <span>Contact</span>
      </div>

      <div className="ml-40 flex mt-14">
        <div className="shadow-lg p-8 rounded w-[25%] pt-10">
          <div className="border-b-2 pb-4 mb-4">
            <div className="flex items-center mb-4">
              <img
                src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740800906/tdxqcznu7dgezximbv6y.png"
                alt="Call to Us"
                className="w-10 h-10 mr-4"
              />
              <h2 className="text-xl font-semibold">Call To Us</h2>
            </div>
            <div className="text-[0.9rem]">
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
          </div>

          <div className="pb-4 mb-4">
            <div className="flex items-center mb-4">
              <img
                src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740800906/tdxqcznu7dgezximbv6y.png"
                alt="Write to Us"
                className="w-10 h-10 mr-4"
              />
              <h2 className="text-xl font-semibold">Write To Us</h2>
            </div>

            <div className="text-[0.9rem]">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        <div className="ml-5 shadow-lg p-4 pt-10 w-[62.5%] rounded">
          <div className="w-full max-w-md flex">
            <label
              htmlFor="name"
              className="flex text-gray-700 font-bold mb-2"
            ></label>
            <input
              className="bg-gray-100 border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              title="Name"
            />
            <label
              htmlFor="email"
              className="flex ml-3 text-gray-700 font-bold mb-2"
            ></label>
            <input
              className="bg-gray-100 border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Your Email"
              title="Email"
            />
            <label
              htmlFor="phone"
              className="flex ml-3 text-gray-700 font-bold mb-2"
            ></label>
            <input
              className="bg-gray-100 border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="phone"
              id="phone"
              placeholder="Your Phone"
              title="Phone"
            />
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            ></label>
          </div>
          <textarea
            className="bg-gray-100 border mt-5 pb-32 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="message"
            id="message"
            placeholder="Your message"
            title="Message"
          ></textarea>

          <div className="mt-4">
            <button
              className="ml-[525px] bg-red-600 hover:bg-red-700 px-8 rounded text-white py-3 text-center"
              type="button"
            >
              Send Massage
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
