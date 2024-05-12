import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import fadeIn from "../../../Utilities/varient";
import Blog from "./Blog";

const Blogs = () => {
  const axiosNonSecure = useAxios();
  // tanstack
  const {
    data: blogs = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["blogs"],
  });

  // data to fetch
  const getData = async () => {
    const { data } = await axiosNonSecure.get("/blogs");
    return data;
  };
  if (isError || error) {
    console.log(error);
  }
  if (isLoading) return <Skeleton count={5}></Skeleton>;
  return (
    <div>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center"
      >
        <h2 className=" text-4xl font-semibold leading-relaxed font-font-oswald ">
          Discover the Latest in Tech: Explore Our Recent <br />
          <span className="text-[#f26767]">Blog Posts</span>
        </h2>
        <p className="text-sm leading-relaxed text-[#454545] ">
          Stay ahead of the curve with our curated selection of the most
          cutting-edge tech and AI-related blog posts. From artificial
          intelligence breakthroughs to emerging technologies, delve into
          fascinating insights and explore the future of innovation. Whether
          you&#39;re a tech enthusiast, a curious learner, or an industry
          professional, our collection of recent blogs offers something for
          everyone. Explore now and ignite your curiosity!
        </p>
      </motion.div>

      <div className="grid lg:mt-16 mt-10 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
