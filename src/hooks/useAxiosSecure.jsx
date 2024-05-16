import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://assignment-11-blogys-server.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
