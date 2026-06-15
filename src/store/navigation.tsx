import { LayoutDashboard } from "lucide-react";
import { roadmapModules } from "../data";
import { useRoadmapStore } from "../store/roadmapStore";
import { getOverallProgress } from "../store/selectors";

export default function Navigation() {
  const currentModule = useRoadmapStore((state) => state.currentModule);
  const setCurrentModule = useRoadmapStore((state) => state.setCurrentModule);
  const clearProgress = useRoadmapStore((state) => state.clearProgress);
  // Subscribe so nav re-renders when progress changes
  useRoadmapStore((state) => state.completedTopics);

  return (
    <nav className="flex h-full flex-col gap-2 p-4">
      {/* Dashboard */}
      <button
        onClick={() => setCurrentModule("dashboard")}
        className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${
          currentModule === "dashboard"
            ? "bg-blue-600 text-white"
            : "text-slate-400 hover:bg-slate-800 hover:text-white"
        }`}
      >
        <LayoutDashboard size={18} />
        <span className="font-medium">Dashboard</span>
      </button>

      {/* Divider */}
      <div className="my-2 border-t border-slate-800" />

      {/* Module list */}
      {roadmapModules.map((module) => {
        const progress = getOverallProgress(module.id);
        const isActive = currentModule === module.id;

        return (
          <button
            key={module.id}
            onClick={() => setCurrentModule(module.id)}
            className={`flex w-full flex-col rounded-xl px-4 py-3 text-left transition-all ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <span className="font-medium">{module.title}</span>

            {/* Progress bar */}
            <div className="mt-2 flex items-center gap-2">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-700">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    isActive ? "bg-white/60" : "bg-blue-500"
                  }`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className={`text-xs ${isActive ? "text-white/70" : "text-slate-500"}`}>
                {progress}%
              </span>
            </div>
          </button>
        );
      })}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Reset button */}
      <button
        onClick={() => {
          if (window.confirm("Reset all progress? This cannot be undone.")) {
            clearProgress();
          }
        }}
        className="rounded-xl px-4 py-3 text-left text-sm text-slate-600 transition hover:bg-slate-800 hover:text-red-400"
      >
        Reset progress
      </button>
    </nav>
  );
}