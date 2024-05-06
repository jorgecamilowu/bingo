import { useRef } from "react";
import "./App.css";
import { Board } from "./components/ui/Board";
import { NumberSlot } from "./components/ui/NumberSlot";
import { Typography } from "./components/ui/Typography";
import { generateBoard } from "./modules/boardGeneration";
import { useCapture } from "./modules/download/useCapture";
import { Button } from "./components/ui/Button";

function App() {
  const boardData = generateBoard();
  const divRef = useRef<HTMLDivElement>(null);
  const capture = useCapture(divRef);

  return (
    <>
      <div ref={divRef} className="flex justify-center">
        <div className="w-3/4">
          <Board>
            <div className="flex flex-col gap-8">
              <Typography variant="h1" color="secondary">
                Bingo
              </Typography>
              <div className="flex justify-center">
                <div className="grid grid-cols-9 gap-1">
                  {boardData.map((row, idx) => {
                    return (
                      <>
                        {idx % 3 === 0 && <div className="h-4 col-span-9" />}
                        {row.map((ele) => (
                          <NumberSlot value={ele} />
                        ))}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </Board>
        </div>
      </div>

      <Button position="floating" size="lg" onClick={capture}>
        Download
      </Button>
    </>
  );
}

export default App;
