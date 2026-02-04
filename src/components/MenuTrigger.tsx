import { ReactNode } from "react";
import { ChevronRightIcon } from "./icons/ChevronRightIcon";

interface MenuTriggerProps {
  children: ReactNode;
  startIcon?: ReactNode;
  showChevron?: boolean;
  onClick: () => void;
}

export function MenuTrigger({
  children,
  startIcon,
  showChevron = true,
  onClick
}: MenuTriggerProps) {
  return (
    <button className="flex items-center gap-2" onClick={onClick}>
      {startIcon}
      {children}
      {showChevron && <ChevronRightIcon className="text-gray-600 ml-9" size={20} />}
    </button>
  );
}
