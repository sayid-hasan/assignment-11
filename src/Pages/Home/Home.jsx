import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Pricing from "./PricingPlan/Pricing";
import Blogs from "./blogs/Blogs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <Blogs></Blogs>
      <Pricing></Pricing>
    </div>
  );
};

export default Home;
