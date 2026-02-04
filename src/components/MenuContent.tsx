import { useState } from 'react';
import { MenuItem } from './MenuItem';

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
        {items.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            name={item.name}
            isSelected={selected === item.id}
            onClick={handleClick}
          />
        ))}
      </ul>
    </div>
  );
}
