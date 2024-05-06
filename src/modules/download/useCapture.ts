import { RefObject } from "react";
import html2canvas from "html2canvas";

export function useCapture(ref: RefObject<HTMLDivElement>) {
  async function capture() {
    if (ref.current === null) {
      return;
    }

    const canvas = await html2canvas(ref.current);

    const dataURL = canvas.toDataURL("[bingo_card]/png");

    const anchor = document.createElement("a");
    anchor.href = dataURL;
    anchor.download = "bingo_card.png";

    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);
  }

  return capture;
}
