import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Wishlist from "./Wishlist";

const Wishlists = () => {
  const { user } = useContext(AuthContext);

  const axiosNonSecure = useAxios();
  // tanstack
  const {
    data: wishlists = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["wishlist"],
  });

  // data to fetch
  const getData = async () => {
    const { data } = await axiosNonSecure.get(`/wishlists?email=${user.email}`);
    return data;
  };
  console.log(wishlists, user);
  if (isError || error) {
    console.log(error);
  }
  if (isLoading) return <div className="loading-spinner loading"></div>;
  return (
    <div>
      <div>
        <h1 className="text-4xl font-font-oswald  mb-8 font-bold text-center font-jacquard">
          See Your <span className="text-[#F26767]">Wish</span>
        </h1>
      </div>
      <div className="grid lg:mt-16 mt-10 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {wishlists.map((wishlist) => (
          <Wishlist key={wishlist._id} wishlist={wishlist}></Wishlist>
        ))}
      </div>
    </div>
  );
};

export default Wishlists;
