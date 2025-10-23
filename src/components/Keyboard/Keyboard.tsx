import { useState } from "react";
import { Display } from "../Display/Display";
import { Flag } from "../Flag/Flag";
import { Flags } from "./flags";
import { Checkbox } from "../Checkbox/Checkbox";
import { shuffle } from "../../functions/shuffle";

const flagDef = [
  [
    Flags.LETTER_Q,
    Flags.LETTER_W,
    Flags.LETTER_E,
    Flags.LETTER_R,
    Flags.LETTER_T,
    Flags.LETTER_Y,
    Flags.LETTER_U,
    Flags.LETTER_I,
    Flags.LETTER_O,
    Flags.LETTER_P,
  ],
  [
    Flags.LETTER_A,
    Flags.LETTER_S,
    Flags.LETTER_D,
    Flags.LETTER_F,
    Flags.LETTER_G,
    Flags.LETTER_H,
    Flags.LETTER_J,
    Flags.LETTER_K,
    Flags.LETTER_L,
  ],
  [
    Flags.LETTER_Z,
    Flags.LETTER_X,
    Flags.LETTER_C,
    Flags.LETTER_V,
    Flags.LETTER_B,
    Flags.LETTER_N,
    Flags.LETTER_M,
  ],
  [Flags.ZERO, Flags.ONE, Flags.TWO, Flags.THREE],
  [Flags.FOUR, Flags.FIVE, Flags.SIX, Flags.SEVEN],
  [Flags.EIGHT, Flags.NINE, Flags.EOM],
  [Flags.SPACE],
];

export const Keyboard = () => {
  const [flags, setFlags] = useState(structuredClone(flagDef));

  const randomiseKeyboard = () => {
    const letterFlags = flagDef.slice(0, 3).flat();
    const numberFlags = flagDef.slice(3, 6).flat();
    const space = flagDef.slice(6).flat();

    const randomLetters = shuffle(letterFlags);
    const randomNumbers = shuffle(numberFlags);

    const newKeyboard: Array<Array<Flags>> = [];
    newKeyboard.push(randomLetters.slice(0, 10));
    newKeyboard.push(randomLetters.slice(10, 19));
    newKeyboard.push(randomLetters.slice(19));

    newKeyboard.push(randomNumbers.slice(0, 4));
    newKeyboard.push(randomNumbers.slice(4, 8));
    newKeyboard.push(randomNumbers.slice(8));

    newKeyboard.push(space);

    setFlags(newKeyboard);
  };

  const [value, setValue] = useState("");
  const [showInput, setShowInput] = useState(true);
  const [showLabelsOnKeyboard, setShowLabelsOnKeyboard] = useState(false);
  const [showLabelsOnDisplay, setShowLabelsOnDisplay] = useState(false);

  return (
    <>
      {flags.map((row, rowIndex) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              padding: "1rem",
              justifyContent: "center",
            }}
          >
            {row.map((flag, flagIndex) => {
              return (
                <div
                  onClick={() => setValue((old) => old + flag)}
                  style={{ cursor: "pointer" }}
                >
                  <Flag
                    key={`${rowIndex}-${flagIndex}`}
                    flag={flag}
                    showLabel={showLabelsOnKeyboard}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => setValue((old) => old.slice(0, old.length - 1))}
        >
          DELETE
        </button>
        <button style={{ backgroundColor: "red" }} onClick={() => setValue("")}>
          CLEAR ALL
        </button>
        <button onClick={randomiseKeyboard}>RANDOMISE KEYBOARD</button>
        <button onClick={() => setFlags(structuredClone(flagDef))}>
          RESET KEYBOARD
        </button>
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", padding: "1rem" }}
      >
        <Checkbox
          label={"Show labels on keyboard"}
          onChange={setShowLabelsOnKeyboard}
        />
        <Checkbox
          label={"Show text box"}
          defaultChecked
          onChange={setShowInput}
        />
        <Checkbox
          label={"Show labels on display"}
          onChange={setShowLabelsOnDisplay}
        />
      </div>
      <Display
        value={value}
        setValue={setValue}
        showInput={showInput}
        showLabels={showLabelsOnDisplay}
      />
    </>
  );
};
