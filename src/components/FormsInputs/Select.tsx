import { type ComponentPropsWithoutRef, type FC } from "react";

type SelectProps = {
  label: string;
  id: string;
  options: { value: string; label: string }[];
} & ComponentPropsWithoutRef<"select">;
const Select: FC<SelectProps> = ({ label, id, options, ...props }) => {
  return (
    <div>
      <label htmlFor="state">
        <span>{label}</span>
      </label>
      <select id={id} {...props}>
        {options.map((opt) => (
          <option value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
