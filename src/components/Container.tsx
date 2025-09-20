import type { FC } from "react";

type TContainerProps = {
  children: React.ReactNode;
};

export const Container: FC<TContainerProps> = ({ children }) => {
  return <div className="max-w-7xl mx-auto">{children}</div>;
};
