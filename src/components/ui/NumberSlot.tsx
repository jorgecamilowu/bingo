import { FC } from "react";
import { Typography } from "./Typography";

interface Props {
  value: number | null;
}

export const NumberSlot: FC<Props> = ({ value }) => {
  return (
    <div className="bg-gray-100 lg:size-16 text-center">
      <Typography variant="h1">{value}</Typography>
    </div>
  );
};
