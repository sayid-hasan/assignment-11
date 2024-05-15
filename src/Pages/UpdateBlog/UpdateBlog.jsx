import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

//import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
//import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

import fadeIn from "../../Utilities/varient";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateBlog = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const axiosNonSecure = useAxios();
  // getting id for fetching data
  const { id } = useParams();
  // getting data from previous page throug props for a single blog
  // tanstack for getting single data
  const {
    data: blog = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["blogUp"],
  });

  // data to fetch
  const getData = async () => {
    const { data } = await axiosSecure.get(`/blogs/${id}?email=${user.email}`);
    return data;
  };
  console.log(blog);
  // getting data from form
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();

  // tanstack for updating data on server
  const { mutateAsync } = useMutation({
    mutationFn: async ({ blogdata }) => {
      const { data } = await axiosNonSecure.patch(`updateblog/${id}`, blogdata);
      console.log(data);
    },
    onSuccess: () => {
      toast.success("data updated successfully");
      refetch();
    },
  });
  const onSubmit = (data) => {
    const {
      user_email,
      blog_title,
      user_name,
      image,
      category_name,

      short_description,
      long_description,
    } = data;

    const blogdata = {
      user_email,
      blog_title,
      user_name,
      image,
      category_name,

      short_description,
      long_description,
    };
    console.log(blogdata);
    //   //   updating data
    mutateAsync({ blogdata });
  };
  useEffect(() => {
    const subscription = watch(() => {
      // console.log(data);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);
  // error and loading handling
  if (isError || error) {
    console.log(error);
  }
  if (isLoading) return <Skeleton count={5}></Skeleton>;
  return (
    <div>
      <div className="  flex flex-col-reverse md:flex-row md:gap-12 md:justify-between items-center ">
        <Helmet>
          <title>Update Blogs</title>
        </Helmet>
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full md:w-1/2"
        >
          <div className="w-full   my-5 bg-[#05A081] bg-opacity-5 p-4 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
            <h1 className="text-4xl font-font-oswald  mb-8 font-bold text-center font-jacquard">
              Update Your <span className="text-[#F26767]">Blogs</span>
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate=""
              action=""
              className="space-y-7"
            >
              {/* row 1 */}
              <div className="flex gap-3 ">
                {/* name */}

                <motion.div
                  variants={fadeIn("right", 0.1)}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="space-y-1 text-sm w-1/2"
                >
                  <label
                    htmlFor="blog_title"
                    className="block dark:text-gray-600"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="blog_title"
                    defaultValue={blog.blog_title}
                    id="blog_title"
                    {...register("blog_title", {
                      required: true,
                    })}
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-md focus:border-[#05A081] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />

                  <span className="font-semibold text-red-600">
                    {errors.username?.type === "required" &&
                      "Blog title is required"}
                  </span>
                </motion.div>

                {/* Image Url */}
                <motion.div
                  variants={fadeIn("right", 0.2)}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="space-y-1 text-sm w-1/2"
                >
                  <label htmlFor="image" className="block dark:text-gray-600">
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="image"
                    defaultValue={blog.image}
                    id="image"
                    {...register("image", {
                      pattern: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                    })}
                    placeholder="Image URL"
                    className="w-full px-4 py-3 rounded-md focus:border-[#05A081] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />

                  <span className="font-semibold text-red-600">
                    {errors.image?.type === "pattern" &&
                      "Please enter a valid URL"}
                  </span>
                </motion.div>
              </div>

              {/* row 2 */}
              <div className="flex gap-3 ">
                {/* Category  name */}

                <motion.div
                  variants={fadeIn("right", 0.1)}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="space-y-1 text-sm w-1/2"
                >
                  <label
                    htmlFor="sub_category_name"
                    className="block dark:text-gray-600"
                  >
                    Category Name
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-md focus:border-[#F26767] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                    name="category_name"
                    id="category_name"
                    defaultValue={blog.category_name}
                    {...register("category_name", {
                      required: true,
                    })}
                  >
                    <option value={blog?.category_name}>
                      {blog?.category_name}
                    </option>
                    <option value="Artificial Intelligence">
                      Artificial Intelligence
                    </option>
                    <option value="Technology">Technology</option>
                    <option value="Robotics">Robotics</option>
                    <option value="Quantum Computing">Quantum Computing</option>
                    <option value="Augmented Reality">Augmented Reality</option>
                    <option value="Blockchain">Blockchain</option>
                  </select>

                  <span className="font-semibold text-red-600">
                    {errors.category_name?.type === "required" &&
                      "short description is required"}
                  </span>
                </motion.div>

                {/* short description */}
                <motion.div
                  variants={fadeIn("right", 0.2)}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="space-y-1 text-sm w-1/2"
                >
                  <label
                    htmlFor="short_description"
                    className="block dark:text-gray-600"
                  >
                    Short Description
                  </label>
                  <input
                    type="text"
                    name="short_description"
                    id="short_description"
                    defaultValue={blog.short_description}
                    {...register("short_description")}
                    placeholder="Description here"
                    className="w-full px-4 py-3 rounded-md focus:border-[#05A081] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                </motion.div>
              </div>

              {/* row 3*/}

              <div className="flex gap-3">
                {/* user  email */}
                <motion.div
                  variants={fadeIn("right", 0.1)}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="space-y-1 text-sm w-1/2"
                >
                  <label
                    htmlFor="user_email"
                    className="block dark:text-gray-600"
                  >
                    User Email
                  </label>
                  <input
                    type="user_email"
                    name="user_email"
                    id="user_email"
                    defaultValue={user.email}
                    {...register("user_email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    })}
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-md focus:border-[#05A081] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />

                  <span className="font-semibold text-red-600">
                    {errors.user_email?.type === "required" &&
                      "Email is required"}
                    {errors.user_email?.type === "pattern" &&
                      "Please enter a valid email address"}
                  </span>
                </motion.div>
                {/* user  N */}
                <motion.div
                  variants={fadeIn("right", 0.2)}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="space-y-1 text-sm w-1/2"
                >
                  <label
                    htmlFor="user_name"
                    className="block dark:text-gray-600"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    defaultValue={user.displayName}
                    {...register("user_name", {
                      required: true,
                      pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                    })}
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-md focus:border-[#05A081] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />

                  <span className="font-semibold text-red-600">
                    {errors.user_name?.type === "required" &&
                      "Name is required"}
                    {errors.user_name?.type === "pattern" &&
                      "Please enter a valid name"}
                  </span>
                </motion.div>
              </div>
              {/* row 6*/}

              <div className="flex gap-3">
                {/* Long Description*/}
                <motion.div
                  variants={fadeIn("right", 0.2)}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="space-y-1 text-sm w-full"
                >
                  <label
                    htmlFor="long_description"
                    className="block dark:text-gray-600"
                  >
                    Long Description
                  </label>
                  <input
                    type="text"
                    name="long_description"
                    id="long_description"
                    defaultValue={blog.long_description}
                    {...register("long_description", {
                      required: true,
                    })}
                    placeholder="detailed description"
                    className="w-full px-4 py-3 rounded-md focus:border-[#05A081] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />

                  <span className="font-semibold text-red-600">
                    {errors.long_description?.type === "required" &&
                      "Name is required"}
                  </span>
                </motion.div>
              </div>

              <motion.button
                variants={fadeIn("right", 0.2)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="block w-full p-3 text-center rounded-lg bg-[#F26767]  text-white font-bold  dark:text-gray-50 dark:bg-violet-600"
              >
                Add
              </motion.button>
            </form>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full md:w-1/2 justify-self-end "
        >
          <img
            src="https://i.ibb.co/3mTj2M5/add-blogs-2.jpg"
            className="max-h-[530px] rounded-xl"
            alt=""
          />
        </motion.div>
        {/* <ToastContainer></ToastContainer> */}
      </div>
    </div>
  );
};

export default UpdateBlog;
