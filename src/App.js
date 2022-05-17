import "./styles.css";
import Themeprovider from "./Themeprovider";
import Multitheme from "./Multitheme";
import Header from "./Header";
import Home from "./Home";
import Banner from "./Banner";

export default function App() {
  return (
    <Themeprovider>
      <div className="App">
        <Multitheme />
        <Header />
        <Home />
        <Banner />
      </div>
    </Themeprovider>
  );
}
