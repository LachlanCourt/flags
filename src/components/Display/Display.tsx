import { useRef } from "react";
import { Flag } from "../Flag/Flag";
import { Flags } from "../Keyboard/flags";
import html2canvas from "html2canvas";

interface DisplayProps {
  showInput?: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  showLabels: boolean;
}

export const Display = ({
  showInput = true,
  value,
  setValue,
  showLabels,
}: DisplayProps) => {
  const container = useRef(null);

  const getScale = () => {
    const scales = [1, 1, 0.75, 0.5, 0.4, 0.4, 0.3];
    return scales[Math.floor(value.length / 10)] || 0.1;
  };

  const download = () => {
    if (!container.current) return;
    html2canvas(container.current, {
      scale: getScale(),
    }).then((element) => {
      const data = element.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = data;
      downloadLink.download = "image.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <input
        value={value}
        onChange={({ target }) => setValue(target.value)}
        autoFocus
        style={{ ...{ display: showInput ? "inherit" : "none" } }}
      />
      <div id="container" ref={container} className="display-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(10, 1fr)",
            rowGap: "1rem",
            columnGap: "1rem",
          }}
        >
          {value
            .toLowerCase()
            .split("")
            .map((char) => (
              <Flag
                flag={char === Flags.SPACE ? "" : char}
                showLabel={showLabels}
              />
            ))}
        </div>
      </div>

      <button onClick={download}>Download</button>
    </div>
  );
};
