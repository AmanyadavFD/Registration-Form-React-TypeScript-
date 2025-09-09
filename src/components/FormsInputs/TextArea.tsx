import { type ComponentPropsWithoutRef, type FC } from "react";
type TextAreaProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"textarea">;
const TextArea: FC<TextAreaProps> = ({ label, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...props}></textarea>
    </div>
  );
};

export default TextArea;
