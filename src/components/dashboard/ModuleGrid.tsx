import { roadmapModules } from "../../data";
import ModuleCard from "./ModuleCard";

import { useRoadmapStore } from "../../store/roadmapStore";
import { getModuleProgress } from "../../store/selectors";

const moduleIcons: Record<string, string> = {
  python: "🐍",
  numpy: "📦",
  pandas: "🐼",
  sql: "🗄️",
  statistics: "📊",
  machine_learning: "🧠",
  deep_learning: "🔥",
  pytorch: "⚡",
  llms: "🤖",
  rag: "📚",
  ai_agents: "🦾",
  mlops: "☁️",
  llmops: "🚀",
};

export default function ModuleGrid() {
  const setCurrentModule = useRoadmapStore(
    (state) => state.setCurrentModule
  );

  return (
    <section className="space-y-6">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Learning Modules
          </h2>

          <p className="text-slate-400 mt-1">
            Continue your AI Engineer journey
          </p>

        </div>

      </div>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
        "
      >

        {roadmapModules.map((module) => {

          const progress =
            getModuleProgress(module.id);

          return (

            <ModuleCard
              key={module.id}
              title={module.title}
              icon={
                moduleIcons[module.id] ??
                "📘"
              }
              completed={
                progress.completed
              }
              total={
                progress.total
              }
              progress={
                progress.progress
              }
              onClick={() =>
                setCurrentModule(
                  module.id
                )
              }
            />

          );

        })}

      </div>

    </section>
  );
}