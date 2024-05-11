import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Pricing from "./PricingPlan/Pricing";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <Pricing></Pricing>
    </div>
  );
};

export default Home;
