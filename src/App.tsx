import { useEffect } from "react";
import * as C from "./App.style";
import { Character } from "./components/Character/index";
import { useCharacter } from "./hooks/useCharacter";

function App() {
  const char = useCharacter();

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case "ArrowDown":
      case "KeyS":
        char.moveDown();
        break;

      case "ArrowUp":
      case "KeyW":
        char.moveUp();
        break;
      case "ArrowRight":
      case "KeyD":
        char.moveRight();
        break;

      case "ArrowLeft":
      case "KeyA":
        char.moveLeft();
        break;
    }
  };

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} />
      </C.Map>
    </C.Container>
  );
}

export default App;
