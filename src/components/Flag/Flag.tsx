import * as flagsvgs from "../icons/svgs";
import { Flags } from "../Keyboard/flags";

interface FlagProps {
  flag: string;
  showLabel: boolean;
}

export const Flag = ({ flag, showLabel }: FlagProps) => {
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
        style={{ height: flag !== Flags.SPACE ? "50px" : "100px" }}
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
