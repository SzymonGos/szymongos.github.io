import type { FC } from "react";

type TLabelProps = {
  title: string;
};

const Label: FC<TLabelProps> = ({ title }) => {
  return (
    <div className="px-3 py-1 text-xs text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-full">
      {title}
    </div>
  );
};

export default Label;
