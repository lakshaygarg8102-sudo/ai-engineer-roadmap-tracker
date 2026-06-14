import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Roadmap from "./components/roadmap/Roadmap";

import { useRoadmapStore } from "./store/roadmapStore";

export default function App() {
  const currentModule = useRoadmapStore(
    (state) => state.currentModule
  );

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="flex-1 px-8 py-8">

          {currentModule === "dashboard" ? (

            <Dashboard />

          ) : (

            <Roadmap />

          )}

        </main>

      </div>

    </div>
  );
}