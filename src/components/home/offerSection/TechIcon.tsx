import type { ReactNode } from "react";

const TechIcon = ({ children }: { children: ReactNode }) => {
  return (
    <div className="tech-icon">
      {children}
    </div>
  );
};

export default TechIcon;
