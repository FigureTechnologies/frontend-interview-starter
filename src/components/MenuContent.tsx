import { useState } from 'react';
import { CheckIcon } from './CheckIcon';

interface MenuItem {
  id: string;
  name: string;
}

interface MenuContentProps {
  items: MenuItem[] | null;
  loading?: boolean;
  error?: string;
  emptyMessage?: string;
  onClick: (id: string) => void;
  title?: string;
}

export function MenuContent({ 
  items, 
  loading, 
  error,
  emptyMessage = "No items found",
  onClick,
  title = "Applications",
}: MenuContentProps) {
  const [selected, setSelected] = useState('')
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!items || items.length === 0) {
    return <div>{emptyMessage}</div>;
  }

  function handleClick(id: string) {
    setSelected(id);
    onClick(id);
  }

  return (
    <div className="bg-white rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border border-gray-100 w-full max-h-full flex flex-col overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 flex-shrink-0">
        <h2 className="text-xs font-medium text-gray-500">{title}</h2>
      </div>
      <ul className="py-2 list-none overflow-y-auto flex-1 space-y-1">
        {items.map((item) => {
          const isSelected = selected === item.id;
          return (
            <li key={item.id} role="menuitem">
              <button
                onClick={() => handleClick(item.id)}
                className={`w-full text-left pl-6 pr-4 py-3 flex items-center justify-between transition-colors ${
                  isSelected
                    ? "bg-gray-800 text-white rounded-md mx-1"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="text-sm font-medium">{item.name}</span>
                {isSelected && (
                  <CheckIcon className="text-white ml-2" size={16} />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
