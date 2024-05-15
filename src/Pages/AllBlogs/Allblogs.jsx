import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Skeleton from "react-loading-skeleton";
import fadeIn from "../../Utilities/varient";
import { motion } from "framer-motion";

import Allblog from "./Allblog";

const Allblogs = () => {
  const axiosNonSecure = useAxios();
  // tanstack
  const {
    data: blogs = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["allblogs"],
  });
  console.log(blogs);

  // data to fetch
  const getData = async () => {
    const { data } = await axiosNonSecure.get("/allblogs");
    return data;
  };
  if (isError || error) {
    console.log(error);
  }
  if (isLoading) return <Skeleton count={5}></Skeleton>;
  return (
    <div className="mx-auto">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center"
      >
        <h2 className=" text-4xl font-semibold leading-relaxed font-font-oswald ">
          Welcome to Tech Insights:
          <br />
          <span className="text-[#f26767]"> Exploring AI and Beyond </span>
        </h2>

        <p className="text-sm leading-relaxed text-[#454545] ">
          Tech Insights is your gateway to the latest in AI and technology
          trends. Join us as we delve into the dynamic world of artificial
          intelligence, robotics, machine learning, and more. Discover
          thought-provoking blogs, insightful articles, and engaging discussions
          that illuminate the cutting edge of innovation. Whether you&#39;re a
          seasoned tech enthusiast or just starting your journey, there&#39;s
          something here for everyone. Let&#39;s explore the future together.
        </p>
      </motion.div>

      <div className="grid lg:mt-16 mt-10 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.map((blog) => (
          <Allblog key={blog._id} blog={blog}></Allblog>
        ))}
      </div>
    </div>
  );
};

export default Allblogs;
