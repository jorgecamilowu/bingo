import { FC } from "react";
import { Typography } from "./Typography";

interface Props {
  value: number | null;
}

export const NumberSlot: FC<Props> = ({ value }) => {
  return (
    <div className="bg-gray-100 size-16 flex justify-center">
      <Typography variant="h1">{value}</Typography>
    </div>
  );
};
