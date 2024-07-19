import { useMutation, useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Skeleton from "react-loading-skeleton";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";
import Comment from "./Comment";
import { motion } from "framer-motion";
import fadeIn from "../../Utilities/varient";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BlogDetails = () => {
  const { user } = useContext(AuthContext);

  const axiosNonSecure = useAxios();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  console.log(id);
  // tanstack for getting single data
  const {
    data: blog = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["blog"],
  });

  // data to fetch
  const getData = async () => {
    const { data } = await axiosSecure.get(`/blogs/${id}`);
    return data;
  };
  // destructuring object data from data that gotten from database
  const {
    user_email,
    blog_title,

    image,
    category_name,
    _id: blog_id,
    short_description,
    long_description,
  } = blog;

  // tanstack for saving comments in db
  const { mutateAsync } = useMutation({
    mutationFn: async ({ commentData }) => {
      const { data } = await axiosNonSecure.post("/comments", commentData);
      console.log(data);
    },
    onSuccess: () => {
      toast.success("thanks for your opinion");
      refetch();
    },
  });

  // tanstack for getting comments based on blog_id
  const { data: comments = [], refetch } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/allcomment/${id}`);
      return data;
    },
    queryKey: ["comment"],
  });
  console.log(comments);

  // handling comment
  const handleComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    if (comment) {
      const { displayName, photoURL } = user;
      const commentData = { comment, displayName, photoURL, blog_id };
      console.log(commentData);

      //
      mutateAsync({ commentData });
    } else {
      toast.warning("please write something to post");
    }
  };

  // error and loading handling
  if (isError || error) {
    console.log(error);
  }
  if (isLoading) return <Skeleton count={5}></Skeleton>;
  return (
    <div>
      <Helmet>
        <title>Blog Details</title>
      </Helmet>

      <div className="font-roboto mt-14 mb-12">
        <motion.h2
          variants={fadeIn("right", 0.1)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.25 }}
          className="text-center  text-[#F26766] font-font-oswald font-bold text-2xl md:text-4xl mb-5 "
        >
          Blog Details
        </motion.h2>
        <motion.div
          variants={fadeIn("right", 0.13)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.25 }}
          className="md:p-6 px-2 gap-7   flex md:flex-row flex-col  md:items-center "
        >
          {/* 1 */}
          <motion.div
            variants={fadeIn("right", 0.16)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.25 }}
            className=" w-full md:w-1/2 flex justify-center "
          >
            <img
              src={image}
              className="object-contain object-center w-full h-auto md:h-[550px] rounded-lg"
            />
          </motion.div>
          {/* 2 */}
          <motion.div
            variants={fadeIn("left", 0.19)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.25 }}
            className="md:w-1/2 w-full"
          >
            <h1 className="text-2xl md:text-3xl leading-loose space-y-2  font-bold">
              {blog_title}
            </h1>
            <span className="block text-xs font-medium tracking-widest uppercase text-[#F26767] mt-5">
              {category_name}
            </span>

            <p className="py-6 text-[#454545] tracking-wide leading-9">
              {short_description}
            </p>

            {/* Long description status */}
            <div
              className=" my-3 text-[#454545] tracking-wide leading-9
               "
            >
              {long_description}
            </div>
            {/* back to homepage and update for owner */}
            <div className="flex justify-between">
              <Link
                to="/"
                className="               px-6 border border-transparent hover:text-black text-sm hover:bg-transparent hover:border hover:border-[#f26767] py-3 font-semibold rounded bg-[#F26767] text-white"
              >
                Go Back
              </Link>

              {user.email === user_email ? (
                <>
                  {" "}
                  <Link
                    to={`/updateblogs/${id}`}
                    className=" px-6 border border-[#f26767] hover:text-white text-sm hover:bg-[#f26767] hover:border-[#f26767] py-3 font-semibold rounded bg-transparent text-black "
                  >
                    update
                  </Link>
                </>
              ) : (
                ""
              )}
            </div>
          </motion.div>
        </motion.div>
        {/* text area for comment */}
        <div className="my-5 px-2 space-y-4">
          <form onSubmit={handleComment} className="my-5 space-y-4">
            {user.email === user_email ? (
              <>
                <p className="text-2xl text-[#F26767] font-font-oswald pl-4 font-semibold">
                  Can not comment on own Blog
                </p>
              </>
            ) : (
              <>
                {" "}
                <textarea
                  name="comment"
                  placeholder="Add Your Opinion"
                  className="textarea textarea-bordered textarea-md w-full "
                ></textarea>
                <input
                  type="submit"
                  className=" text-center  px-6 border border-transparent hover:text-black text-sm hover:bg-transparent hover:border hover:border-[#f26767] py-3 font-semibold rounded bg-[#F26767] text-white"
                  value="post"
                />
              </>
            )}
          </form>
        </div>
        <div className="my-5">
          {comments.map((commentObj) => (
            <Comment key={commentObj._id} commentObj={commentObj}></Comment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
