import axios from "axios";

const axiosNonSecure = axios.create({
  baseURL: "https://assignment-11-blogys-server.vercel.app",
});
const useAxios = () => {
  return axiosNonSecure;
};

export default useAxios;
