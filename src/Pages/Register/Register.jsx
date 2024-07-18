//import { data } from "autoprefixer";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import fadeIn from "../../Utilities/varient";
const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { loading, user, setUser, createUser, updateUserProfile } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, name, password, image } = data;

    // console.log(email, username, password, image);
    const from = "/";
    // creating user
    createUser(email, password)
      .then((res) => {
        toast.success("registered successfully");
        console.log(res.user);

        updateUserProfile(name, image)
          .then(() => {})
          .catch((err) => console.log(err));

        setUser({ ...user, displayName: name, photoURL: image });

        navigate(from);
      })
      .catch(() => {
        toast.error("user exist already");
      });
  };
  useEffect(() => {
    const subscription = watch(() => {
      // console.log(data);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);
  if (user && loading) return <Navigate to={"/"}></Navigate>;
  return (
    <div className="max-w-7xl mx-auto ">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="flex flex-col-reverse md:flex-row  md:justify-between overflow-x-hidden">
        <div className="w-full my-5  md:w-1/2 p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
          <motion.h1
            variants={fadeIn("right", 0.051)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-2xl font-font-oswald text-[#F26767] font-bold text-center"
          >
            Sign Up for more awsome features
          </motion.h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="space-y-6"
          >
            {/* Name */}
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-1 text-sm"
            >
              <label htmlFor="email" className="block dark:text-gray-600">
                Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md focus:border-[#F26767] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <span className="font-semibold text-red-600">
                {errors.name?.type === "required" && "Name is required"}
              </span>
            </motion.div>
            {/* email */}
            <motion.div
              variants={fadeIn("right", 0.15)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-1 text-sm"
            >
              <label htmlFor="email" className="block dark:text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md focus:border-[#F26767] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <span className="font-semibold text-red-600">
                {errors.email?.type === "required" && "Email is required"}
              </span>
            </motion.div>
            {/* password */}
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-1 text-sm"
            >
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <div className="flex items-center relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  id="password"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{6,}$/,
                  })}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md focus:border-[#F26767]  dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
                <div
                  className="absolute right-0 -translate-x-3 "
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </div>
              </div>
              <span className="font-semibold text-red-600">
                {errors.password?.type === "required" && "Password is required"}
                {errors.password?.type === "pattern" &&
                  "Password must have at least one uppercase letter, one special character and at least one digit, and be at least 6 characters long"}
              </span>
            </motion.div>
            {/* photo URL */}
            <motion.div
              variants={fadeIn("right", 0.25)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-1 text-sm"
            >
              <label htmlFor="email" className="block dark:text-gray-600">
                Photo URL
              </label>
              <input
                type="text"
                name="image"
                id="image"
                {...register("image", { required: true })}
                placeholder="Image URL"
                className="w-full px-4 py-3 rounded-md focus:border-[#F26767] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <span className="font-semibold text-red-600">
                {errors.image?.type === "required" && "Photo URL is required"}
              </span>
            </motion.div>

            <motion.button
              variants={fadeIn("right", 0.28)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="block w-full p-3 text-center border border-transparent rounded-lg bg-[#F26767]  text-white font-bold  dark:text-gray-50 hover:bg-transparent hover:text-black transition-all duration-300 hover:border-[#F26767] dark:bg-violet-600"
            >
              Sign Up
            </motion.button>
          </form>

          <p className="text-xs text-center sm:px-6 dark:text-gray-600">
            Already have an account?
            <Link
              to="/login"
              className="underline dark:text-gray-800 mx-3 text-[#F26767] font-semibold"
            >
              Sign in
            </Link>
          </p>
        </div>
        <motion.div
          variants={fadeIn("left", 0.15)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="md:w-1/2 w-full"
        >
          <img
            src={"https://i.imgur.com/t1RuSsO.jpg"}
            className="md:h-[535px] md:w-[535px] w-full aspect-auto rounded-lg"
            alt=""
          />
        </motion.div>
        {/* <ToastContainer></ToastContainer> */}
      </div>
    </div>
  );
};

export default Register;
