import type { ReactNode } from "react";

export type StoryIconProps = {
  children: ReactNode;
  colorClass?: string;
};

const StoryIcon = ({ children, colorClass = "" }: StoryIconProps) => {
  return (
    <span className={`story-icon ${colorClass}`}>
      {children}
    </span>
  );
};

export default StoryIcon;
