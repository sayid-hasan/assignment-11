import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import FeaturedBlogRow from "./FeaturedBlogRow";
import Skeleton from "react-loading-skeleton";

const FeaturedBlog = () => {
  const axiosNonSecure = useAxios();

  // tanstack
  const {
    data: featured = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["featured"],
  });
  console.log(featured);

  // data to fetch

  const getData = async () => {
    const { data } = await axiosNonSecure.get(`/featuredblogs`);
    return data;
  };
  console.log(featured);

  if (isError || error) {
    console.log(error);
  }
  if (isLoading) return <Skeleton count={5}></Skeleton>;

  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 text-black ">
        <h2 className="text-center  mb-4 text-4xl font-font-oswald font-semibold leading-loose ">
          Explore our featured <span className="text-[#F26767]">Blogs</span>
        </h2>
        <div className="mt-5 mb-10">
          <table className="w-full rounded-2xl space-y-4 p-6 text-xs text-left whitespace-wrap">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr className=" font-font-oswald">
                <th className="p-3 text-[#F26767] md:text-lg text-base"></th>
                <th className="p-3 text-[#F26767] md:text-lg text-base">
                  Title
                </th>
                <th className="p-3 text-[#F26767] md:text-lg text-base">
                  Owner
                </th>
                <th className="p-3 text-[#F26767] hidden md:block md:text-lg text-base">
                  Owner&#39;s Profile
                </th>
              </tr>
            </thead>
            {featured.map((feturedRow, idx) => (
              <FeaturedBlogRow
                key={idx}
                id={idx + 1}
                feturedRow={feturedRow}
              ></FeaturedBlogRow>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
