import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

type ContainerProp<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// This is called the Basic Polymorphic Component
const Box = <C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProp<C>) => {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
};

export default Box;
