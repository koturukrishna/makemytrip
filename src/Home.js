import "./App.css";
import Header from "./components/Header";
import NavButtons from "./components/NavButtons";
import { Flights } from "./pages/Flights";

function Home() {
  return (
    <div className="App">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
      <NavButtons />
      {/* <Flights /> */}
    </div>
  );
}

export default Home;
