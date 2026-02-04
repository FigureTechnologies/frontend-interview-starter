interface MenuItem {
  id: string;
  name: string;
}

interface MenuContentProps {
  items: MenuItem[] | null;
  loading?: boolean;
  error?: string;
  emptyMessage?: string;
}

export function MenuContent({ 
  items, 
  loading, 
  error,
  emptyMessage = "No items found" 
}: MenuContentProps) {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!items || items.length === 0) {
    return <div>{emptyMessage}</div>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
