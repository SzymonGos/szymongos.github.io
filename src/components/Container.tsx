import type { FC } from "react";

type TContainerProps = {
  children: React.ReactNode;
};

export const Container: FC<TContainerProps> = ({ children }) => {
  return <div className="px-4 md:px-0 max-w-7xl mx-auto">{children}</div>;
};
