import * as flagsvgs from "../icons/svgs";
import { Flags } from "../Keyboard/flags";

interface FlagProps {
  flag: string;
  showLabel: boolean;
}

export const Flag = ({ flag, showLabel }: FlagProps) => {
  const getHeight = () => {
    const heights = [15, 50];
    const size = window.screen.width;

    const base = heights[size < 400 ? 0 : 1];
    const height = flag !== Flags.SPACE ? base : base * 2;
    return `${height}px`;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        justifyContent: "center",
      }}
    >
      <img
        style={{ height: getHeight() }}
        //@ts-ignore
        src={flagsvgs[Object.keys(Flags).find((k) => Flags[k] === flag)]}
      />
      {showLabel && (
        <span style={{ textTransform: "uppercase" }}>
          {flag === "." ? "end of message" : flag}
        </span>
      )}
    </div>
  );
};
