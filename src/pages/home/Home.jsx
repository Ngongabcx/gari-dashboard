import { EuiSpacer } from "@elastic/eui";
import { Header } from "../../components/header/header";
import { Body } from "../../components/body/Body"

const Home = () => {
  return (
    <div>      
      <Header />      
      <EuiSpacer />
      <Body />
    </div>
  );
};

export default Home;
