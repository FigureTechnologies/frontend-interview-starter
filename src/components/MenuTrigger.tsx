import { ReactNode } from "react";
import { ChevronRightIcon } from "./ChevronRightIcon";

interface MenuTriggerProps {
  children: ReactNode;
  startIcon?: ReactNode;
  showChevron?: boolean;
  className?: string;
}

export function MenuTrigger({
  children,
  startIcon,
  showChevron = true,
  className = "",
}: MenuTriggerProps) {
  return (
    <button className={`flex items-center gap-2 ${className}`}>
      {startIcon}
      {children}
      {showChevron && <ChevronRightIcon className="text-gray-600 ml-9" size={20} />}
    </button>
  );
}
