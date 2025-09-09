import type { FC, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};
const Layout: FC<LayoutProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default Layout;
