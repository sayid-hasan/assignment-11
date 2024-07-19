import { motion } from "framer-motion";
import fadeIn from "../../../Utilities/varient";
const Pricing = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900  overflow-x-hidden">
        <div className=" px-6 py-8 mx-auto">
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.25 }}
          >
            <h2 className="text-4xl font-semibold leading-relaxed font-font-oswald text-center">
              Embark on a Journey of Tech Enlightenment:
              <br /> <span className="text-[#F26767]">Choose Your Path</span>
            </h2>
            <p className="text-sm leading-relaxed text-[#454545] text-center ">
              Step into the boundless expanse of technological wonder with our
              pricing plans, meticulously crafted to fuel your journey of
              discovery. Each tier is a gateway to unparalleled insights, from
              the foundational Explorer plan to the visionary Enterprise tier.
              Dive into the pulse of innovation, where tech and AI converge to
              shape tomorrow.
            </p>
          </motion.div>

          <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.25 }}
              className="px-6 py-4 transition-colors duration-300 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 flex flex-col justify-between"
            >
              <p className="text-2xl font-bold font-font-oswald text-[#F26767] dark:text-gray-100 ">
                Explorer
              </p>

              <h4 className="mt-2 text-3xl font-semibold text-gray-800 dark:text-gray-100 font-font-oswald">
                $19{" "}
                <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                  / Month
                </span>
              </h4>

              <p className="mt-4 text-gray-500 min-h-[72px] dark:text-gray-300">
                Find out our most affordable plan
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 dark:text-gray-300">
                    Access to all blog articles
                  </span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 dark:text-gray-300">
                    Monthly newsletter subscription
                  </span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 dark:text-gray-300">
                    Chat support
                  </span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 dark:text-gray-300">
                    Community forum participation
                  </span>
                </div>
              </div>

              <button className="w-full px-6 border duration-300 border-transparent hover:text-black text-sm hover:bg-transparent hover:border hover:border-[#f26767] py-3 font-semibold rounded bg-[#F26767] text-white ">
                Choose plan
              </button>
            </motion.div>

            <motion.div
              variants={fadeIn("right", 0.15)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.25 }}
              className="px-6 py-4 transition-colors duration-300 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 flex flex-col justify-between"
            >
              <p className="text-2xl font-bold font-font-oswald text-[#F26767] dark:text-gray-100">
                Innovator
              </p>

              <h4 className="mt-2 text-3xl font-semibold text-gray-800 dark:text-gray-100 font-font-oswald">
                $39{" "}
                <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                  / Month
                </span>
              </h4>

              <p className="mt-4 text-gray-500  min-h-[72px] dark:text-gray-300">
                Become a innovator with our innovator plan.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 dark:text-gray-300">
                    Everything in Basic, plus:
                  </span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 dark:text-gray-300">
                    Exclusive access to premium content
                  </span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 dark:text-gray-300">
                    Ad-free browsing experience
                  </span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 dark:text-gray-300">
                    Priority customer support
                  </span>
                </div>
              </div>

              <button className="w-full px-6 border duration-300 border-transparent hover:text-black text-sm hover:bg-transparent hover:border hover:border-[#f26767] py-3 font-semibold rounded bg-[#F26767] text-white ">
                Choose plan
              </button>
            </motion.div>

            <motion.div
              variants={fadeIn("right", 0.2)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.25 }}
              className="px-6 py-4 transition-colors duration-300 transform bg-gray-700 rounded-lg dark:bg-gray-800 flex flex-col justify-between"
            >
              <p className="text-2xl font-bold font-font-oswald text-[#F26767] dark:text-gray-100">
                Visionary
              </p>

              <h4 className="mt-2 text-3xl font-font-oswald font-semibold text-gray-100">
                $99{" "}
                <span className="text-base font-normal text-gray-400">
                  / Month
                </span>
              </h4>

              <p className="mt-4  min-h-[72px] text-gray-300">
                Find the best offer that premium with affordable quality.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-300">
                    Everything in Standard, plus:
                  </span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-300">
                    Early access to new features
                  </span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-300">
                    Access to member-only webinars and workshops
                  </span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-300">
                    Personalized content recommendations
                  </span>
                </div>
              </div>

              <button className="w-full px-6 border duration-300 border-transparent hover:text-black text-sm hover:bg-transparent hover:border hover:border-[#f26767] py-3 font-semibold rounded bg-[#F26767] text-white ">
                Choose plan
              </button>
            </motion.div>

            <motion.div
              variants={fadeIn("right", 0.25)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.25 }}
              className="px-6 py-4 transition-colors duration-300 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 flex flex-col justify-between"
            >
              <p className="text-2xl font-bold font-font-oswald text-[#F26767] dark:text-gray-100">
                Enterprise
              </p>

              <h4 className="mt-2 text-3xl font-semibold text-gray-800 dark:text-gray-100 font-font-oswald">
                $199{" "}
                <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                  / Month
                </span>
              </h4>

              <p className="mt-4  min-h-[72px] text-gray-500 dark:text-gray-300">
                Enjoy most premium of our offer that are exclusive for you
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 dark:text-gray-300">
                    Everything in Premium, plus:
                  </span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 dark:text-gray-300">
                    Customized content solutions for businesses
                  </span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 dark:text-gray-300">
                    Team collaboration tools
                  </span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 dark:text-gray-300">
                    Dedicated account manager
                  </span>
                </div>
              </div>

              <button className="w-full px-6 border duration-300 border-transparent hover:text-black text-sm hover:bg-transparent hover:border hover:border-[#f26767] py-3 font-semibold rounded bg-[#F26767] text-white ">
                Choose plan
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
