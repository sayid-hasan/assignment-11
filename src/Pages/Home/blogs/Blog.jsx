import PropTypes from "prop-types";
import fadeIn from "../../../Utilities/varient";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const {
    blog_title,
    _id,

    image,
    category_name,

    short_description,
  } = blog;
  console.log(_id);
  return (
    <div>
      <div className=" max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <motion.img
          variants={fadeIn("right", 0)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="object-cover object-center w-full h-56"
          src={image}
          alt="avatar"
        />

        <motion.div
          variants={fadeIn("left", 0.1)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex items-center px-6 py-3 bg-gray-900"
        >
          <h1 className="mx-3 text-[#F26767] text-lg font-font-oswald font-semibold ">
            {category_name}
          </h1>
        </motion.div>

        <div className="px-6 py-4">
          <motion.h1
            variants={fadeIn("right", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            h1
            className="text-xl font-semibold  min-h-[85px] font-font-oswald text-gray-800 dark:text-white"
          >
            {blog_title}
          </motion.h1>

          <motion.div
            variants={fadeIn("left", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="py-2 text-gray-700 min-h-[90px] dark:text-gray-400"
          >
            {short_description}
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex  justify-between  items-center mt-4 text-gray-700 dark:text-gray-200"
          >
            <Link
              to={`/blogs/${_id}`}
              className="px-6 border border-transparent hover:text-black text-sm hover:bg-transparent hover:border hover:border-[#f26767] py-3 font-semibold rounded bg-[#F26767] text-white"
            >
              See Details
            </Link>
            <button className="px-6 border border-[#f26767] hover:text-white text-sm hover:bg-[#f26767] hover:border-[#f26767] py-3 font-semibold rounded bg-transparent text-black ">
              Wishlist
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
