import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Skeleton from "react-loading-skeleton";
import fadeIn from "../../Utilities/varient";
import { motion } from "framer-motion";

import Allblog from "./Allblog";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const Allblogs = () => {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const axiosNonSecure = useAxios();
  // tanstack
  const {
    data: blogs = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["allblogs", filter, search],
  });
  console.log(blogs);

  // data to fetch

  const getData = async () => {
    const { data } = await axiosNonSecure.get(
      `/allblogs?filter=${filter}&search=${search}`
    );
    return data;
  };

  // filter category
  const handleChange = (e) => {
    const selectedCategory = e.target.value;
    setFilter(selectedCategory);
  };

  // search by title
  const handleSearch = (e) => {
    if (e.code === "Enter") {
      e.preventDefault();
      setSearch(searchText);
    }
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
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex items-center justify-center gap-5"
      >
        <div className="w-1/5">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">category </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="category "
              value={filter}
              onChange={handleChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Artificial Intelligence">
                Artificial Intelligence
              </MenuItem>
              <MenuItem value="Technology">Technology</MenuItem>
              <MenuItem value="Robotics">Robotics</MenuItem>
              <MenuItem value="Quantum Computing">Quantum Computing</MenuItem>
              <MenuItem value="Augmented Reality">Augmented Reality</MenuItem>
              <MenuItem value="Blockchain">Blockchain</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>

            <input
              onKeyDown={handleSearch}
              type="text"
              name="search"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              value={searchText}
              className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="Search"
            />
          </div>
        </div>
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
