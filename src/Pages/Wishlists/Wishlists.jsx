import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Wishlist from "./Wishlist";
import Swal from "sweetalert2";

const Wishlists = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const axiosNonSecure = useAxios();
  // tanstack
  const {
    data: wishlists = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["wishlist"],
  });

  // data to fetch
  const getData = async () => {
    const { data } = await axiosNonSecure.get(
      `/wishlists?email=${user?.email}`
    );
    return data;
  };

  // deleting wishlist
  const handleDelete = async (idx) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosNonSecure.delete(`/wishlist/${idx}`);
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
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
          <Wishlist
            key={wishlist._id}
            wishlist={wishlist}
            handleDelete={handleDelete}
          ></Wishlist>
        ))}
      </div>
    </div>
  );
};

export default Wishlists;
