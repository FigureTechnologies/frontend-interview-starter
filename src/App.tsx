import {useState, useEffect} from 'react';
import { Grid3x3Icon } from "./components/Grid3x3Icon";
import { MenuTrigger } from "./components/MenuTrigger";

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen w-screen bg-slate-200 flex justify-center items-center">
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
        <div className="col-span-2 h-96 bg-white border-4 border-l-0 p-6 flex justify-center items-center">
          {isMenuOpen && <section>Menu</section>}
        </div>
      </div>
    </main>
  );
}
