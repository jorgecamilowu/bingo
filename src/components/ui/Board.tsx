import { FC, PropsWithChildren } from "react";

export const Board: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-red-600 rounded-lg min-w-96 px-2 py-1 sm:px-16 sm:py-8">
      {children}
    </div>
  );
};
