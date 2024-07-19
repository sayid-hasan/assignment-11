import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Pricing from "./PricingPlan/Pricing";
import Blogs from "./blogs/Blogs";
import NewsLetter from "./NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div className="max-w-[1250px] mx-auto">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <Blogs></Blogs>
      <Pricing></Pricing>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
