import DGXLogo from "./components/DGXLogo";
import DGXDropdown from "./components/DGXDropdown";
import DGXContainer from "./components/DGXContainer";
import "./App.css";
import "./fonts/font.css";

function App() {
  let result = "هیچ!";
  return (
    <div
      id="app"
      className="flex"
      style={{ backgroundImage: 'url("/assets/pixel-arts/pixel-wall.png")' }}
    >
      <DGXContainer className="top">
        <DGXLogo className="flex" />
        <div className="mt">
          <DGXDropdown />
        </div>
        <div className="result">{result}</div>
      </DGXContainer>
    </div>
  );
}

export default App;
