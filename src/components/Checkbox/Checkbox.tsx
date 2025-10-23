import { useId } from "react";

interface CheckboxProps {
  label: string;
  onChange?: (value: boolean) => void;
  defaultChecked?: boolean;
}

export const Checkbox = ({
  label,
  onChange,
  defaultChecked = false,
}: CheckboxProps) => {
  const id = useId();
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        fontSize: "1.5rem",
        justifyContent: "center",
      }}
    >
      <input
        type="checkbox"
        id={id}
        onChange={({ target }) => onChange?.(target.checked)}
        defaultChecked={defaultChecked}
        style={{ width: "1.2rem" }}
      />
      <label style={{ cursor: "pointer" }} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
