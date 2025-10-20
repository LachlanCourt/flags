import { Flag } from "../Flag/Flag";

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
  return (
    <>
      <input
        value={value}
        onChange={({ target }) => setValue(target.value)}
        autoFocus
        style={{ ...{ display: showInput ? "inherit" : "none" } }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          rowGap: "1rem",
          columnGap: "1rem",
          paddingTop: "2rem",
        }}
      >
        {value.split("").map((char) => (
          <Flag flag={char} showLabel={showLabels} />
        ))}
      </div>
    </>
  );
};
