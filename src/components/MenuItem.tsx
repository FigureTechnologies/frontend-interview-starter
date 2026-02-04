import { CheckIcon } from './icons/CheckIcon';

interface MenuItemProps {
  id: string;
  name: string;
  isSelected: boolean;
  onClick: (id: string) => void;
}

export function MenuItem({ id, name, isSelected, onClick }: MenuItemProps) {
  return (
    <li role="menuitem" className={isSelected ? "mx-1" : ""}>
      <button
        onClick={() => onClick(id)}
        className={`text-left pl-6 pr-4 py-3 flex items-center justify-between transition-colors ${
          isSelected
            ? "bg-gray-800 text-white rounded-md w-[calc(100%-0.5rem)]"
            : "text-gray-700 hover:bg-gray-50 w-full"
        }`}
      >
        <span className="text-sm font-medium">{name}</span>
        {isSelected && (
          <CheckIcon className="text-white ml-2" size={16} />
        )}
      </button>
    </li>
  );
}
