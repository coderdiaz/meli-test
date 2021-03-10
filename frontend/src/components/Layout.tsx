import Header from "@/components/Header";
import { FC } from "react";

type LayoutProps = {
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <>
    <Header />
    <main className="py-4">{children}</main>
  </>
}

export default Layout;