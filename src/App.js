import DGXLogo from "./components/DGXLogo";
import DGXDropdown from "./components/DGXDropdown";
import DGXContainer from "./components/DGXContainer";
import "./App.css";
import "./fonts/font.css";
import dropItems from "./mock/drop-items.json";
import { useState } from "react";
function App() {
  const [result, setResult] = useState("هیچ!");
  const handleResultChange = (selectedItem) => {
    setResult(selectedItem);
  };

  return (
    <div
      id="app"
      className="flex"
      style={{ backgroundImage: 'url("/assets/pixel-arts/pixel-wall.png")' }}
    >
      <DGXContainer className="top">
        <DGXLogo className="flex" />
        <div className="mt">
          <DGXDropdown
            onListChange={handleResultChange}
            selectedValue={result}
            list={dropItems}
          />
        </div>
        <div className="result">{result}</div>
      </DGXContainer>
    </div>
  );
}

export default App;
