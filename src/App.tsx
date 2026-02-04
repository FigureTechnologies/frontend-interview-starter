import { useState, useEffect, useRef } from 'react';
import { Grid3x3Icon } from "./components/icons/Grid3x3Icon";
import { MenuTrigger } from "./components/MenuTrigger";
import { MenuContent } from "./components/MenuContent";
import { Application } from "./types";

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [data, setData] = useState<Application[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState('');
  const selectedApplication = data?.filter(item => item.id === selected).map(item => item.name);
  const menuRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLElement>(null);

  // Fetch data on App load
  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData(itemCount = 10) {
      try {
        setLoading(true);
        const response = await fetch('../data.json', {
          signal: abortController.signal
        });

        if (!response.ok) {
          throw new Error('Network error');
        }

        const responseData = await response.json();
        setData(responseData.slice(0, itemCount));
        setLoading(false);
      } catch (e: unknown) {
        if (e instanceof Error && e.name === 'AbortError') {
          return;
        }
        setError(e instanceof Error ? e.message : 'An error occurred');
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [])

  // Close menu on outside menu clicks
  useEffect(() => {
    function handleMenuClose(e: MouseEvent) {
      if (
        menuRef.current &&
        menuRef.current.contains(e.target as Node)
      ) {
        return;
      }
      setIsMenuOpen(false);
    }

    if (isMenuOpen && appRef.current) {
      appRef.current.addEventListener('click', handleMenuClose);
    }

    return () => {
      if (appRef.current) {
        appRef.current.removeEventListener('click', handleMenuClose);
      }
    };
  }, [isMenuOpen]);

  function handleSelectedClick(id: string) {
    setSelected(id);
  }

  return (
    <main ref={appRef} className="min-h-screen w-screen bg-slate-200 flex flex-col justify-center items-center">
      {selected && <h1>Selected application: {selectedApplication}</h1>}
      <div className="max-w-2xl w-full grid grid-cols-3">

        <div className="h-96 bg-white border-4 border-r p-6 flex justify-center">
          <MenuTrigger
            startIcon={<Grid3x3Icon className="text-gray-600" size={16} />}
            showChevron={true}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Applications
          </MenuTrigger>
        </div>
        <div className="col-span-2 h-96 bg-white border-4 border-l-0 p-6 flex justify-center items-start">
          {isMenuOpen && (
            <div className="w-full h-full overflow-y-auto p-2 animate-[fadeIn_0.2s_ease-out]">
              <MenuContent items={data} loading={loading} error={error} onClick={handleSelectedClick} ref={menuRef} selectedId={selected}/>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
