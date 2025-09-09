import type { ComponentPropsWithoutRef, FC } from "react";
type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;
const CheckBox: FC<InputProps> = ({ label, id, ...props }) => {
  return (
    <li>
      <input id={id} {...props} />
      <label htmlFor={id}>{label}</label>
    </li>
  );
};

export default CheckBox;
