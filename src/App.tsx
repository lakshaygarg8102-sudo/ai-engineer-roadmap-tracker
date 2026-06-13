import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Roadmap from "./components/roadmap/Roadmap";

export default function App() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <Dashboard />

        <div className="px-8 pb-10">
          <Roadmap />
        </div>
      </div>
    </div>
  );
}