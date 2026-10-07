import { BrowserRouter } from "react-router-dom";
import Counter from "./components/counter";
import LikesDislikes from "./components/likesdislikes";
import flower from "./flower.jpg";

function App() {
  return (
    <BrowserRouter>
      <div style={{ textAlign: "center" }}>
        <h1>My React App</h1>

        <img
          src={flower}
          alt="Flower"
          style={{
            width: "300px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "20px"
          }}
        />

        <Counter />

        <LikesDislikes />
      </div>
    </BrowserRouter>
  );
}

export default App;