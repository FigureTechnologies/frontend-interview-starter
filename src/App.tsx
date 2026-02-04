import { Grid3x3Icon } from "./components/Grid3x3Icon";
import { ChevronRightIcon } from "./components/ChevronRightIcon";

export function App() {
  return (
    <main className="min-h-screen w-screen bg-slate-200 flex justify-center items-center">
      <div className="max-w-2xl w-full grid grid-cols-3">
        <div className="h-96 bg-white border-4 border-r p-6 flex justify-center">
          <button className="flex items-center gap-2">
            <Grid3x3Icon className="text-gray-600" size={16} />
            Applications
            <ChevronRightIcon className="text-gray-600 ml-9" size={20} />
          </button>
        </div>
        <div className="col-span-2 h-96 bg-white border-4 border-l-0 p-6 flex justify-center items-center">
          <section>Menu</section>
        </div>
      </div>
    </main>
  );
}
