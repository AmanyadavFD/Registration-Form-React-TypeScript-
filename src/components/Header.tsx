import { type FC } from "react";
import type { HeaderProps } from "../type";

const Header: FC<HeaderProps> = ({
  mainHeading,
  subHeading,
  headerDescription,
}) => {
  return (
    <header>
      <h1>{mainHeading}</h1>
      <div className="wrapper">
        <h2>{subHeading}</h2>
        <p>{headerDescription}</p>
      </div>
    </header>
  );
};

export default Header;
