import "./styles.css";
import Themeprovider from "./Themeprovider";
import Multitheme from "./Multitheme";

export default function App() {
  return (
    <Themeprovider>
      <div className="App">
        <Multitheme />
      </div>
    </Themeprovider>
  );
}
