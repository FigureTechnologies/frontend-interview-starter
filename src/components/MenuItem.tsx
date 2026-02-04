import { CheckIcon } from './icons/CheckIcon';

interface MenuItemProps {
  id: string;
  name: string;
  isSelected: boolean;
  onClick: (id: string) => void;
}

export function MenuItem({ id, name, isSelected, onClick }: MenuItemProps) {
  return (
    <li role="menuitem">
      <button
        onClick={() => onClick(id)}
        className={`w-full text-left pl-6 pr-4 py-3 flex items-center justify-between transition-colors ${
          isSelected
            ? "bg-gray-800 text-white rounded-md mx-1"
            : "text-gray-700 hover:bg-gray-50"
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
