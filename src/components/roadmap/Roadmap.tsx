import { roadmapModules } from "../../data";
import Section from "./Section";

import {
  getCompletedTopics,
  getOverallProgress,
  getTotalTopics,
} from "../../store/selectors";

export default function Roadmap() {
  const total = getTotalTopics();
  const completed = getCompletedTopics();
  const progress = getOverallProgress();

  return (
    <div className="space-y-10">

      {/* Header */}

      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8">

        <h1 className="text-4xl font-bold mb-6">
          🧠 AI Engineer Roadmap
        </h1>

        <div className="space-y-4">

          <div className="flex justify-between text-sm">

            <span>Overall Progress</span>

            <span>{progress}%</span>

          </div>

          <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden">

            <div
              className="h-full bg-blue-500 transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

          <div className="flex justify-between text-slate-400">

            <span>{completed} Completed</span>

            <span>{total} Topics</span>

          </div>

        </div>

      </div>

      {/* Modules */}

      {roadmapModules.map((module) => (

        <div
          key={module.id}
          className="space-y-6"
        >

          <div className="border-b border-slate-800 pb-4">

            <h2 className="text-3xl font-bold">
              {module.title}
            </h2>

          </div>

          {module.sections.map((section) => (

            <Section
              key={section.id}
              section={section}
            />

          ))}

        </div>

      ))}

    </div>
  );
}