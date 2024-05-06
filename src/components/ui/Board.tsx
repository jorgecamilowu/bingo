import { FC, PropsWithChildren } from "react";

export const Board: FC<PropsWithChildren> = ({ children }) => {
  return <div className="bg-red-600 rounded-lg px-16 py-8">{children}</div>;
};
