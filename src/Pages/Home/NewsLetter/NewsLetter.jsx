import { toast } from "react-toastify";

const NewsLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    if (email) {
      toast.success("Thank you for subscribing to our newsletter");
    }
  };
  return (
    <div>
      <section className="flex flex-col   overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48 my-10">
        <div className="md:flex md:items-center md:justify-center w-full md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
          <div className="px-6 py-6 md:px-8 md:py-0">
            <h2 className="md:text-2xl text-lg mb-5 font-font-oswald font-bold text-gray-700 dark:text-white md:text-gray-100">
              Sign Up For <span className="text-[#f26767]">Project</span>{" "}
              Updates
            </h2>

            <p className="mt-2 text-sm text-[#454545] dark:text-gray-400 md:text-gray-400 md:leading-loose md:tracking-wider">
              By Subscribing to our page you are going to get any blog related
              update and so many more amazing tech info
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center pb-6 md:py-0 w-full md:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                type="text"
                name="email"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />

              <input
                type="submit"
                className="px-4 py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#f26767] rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
                value={"  subscribe"}
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
