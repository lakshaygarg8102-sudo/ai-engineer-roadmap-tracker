import { useMemo } from "react";
import { roadmapModules } from "../../data";
import Section from "./Section";

import {
  getCompletedTopics,
  getOverallProgress,
  getTotalTopics,
} from "../../store/selectors";

import { useRoadmapStore } from "../../store/roadmapStore";

export default function Roadmap() {
  const currentModule = useRoadmapStore((state) => state.currentModule);
  const completedTopics = useRoadmapStore((state) => state.completedTopics);
  const getCurrentSection = useRoadmapStore((state) => state.getCurrentSection);

  if (currentModule === "dashboard") {
    return null;
  }

  const module = roadmapModules.find((m) => m.id === currentModule);

  if (!module) {
    return (
      <div className="py-20 text-center text-red-500">Module not found.</div>
    );
  }

  const total = getTotalTopics(module.id);
  const completed = getCompletedTopics(module.id);
  const progress = getOverallProgress(module.id);

  // Find which section index has the first incomplete topic
  // Used to know which section to auto-open when no lastVisited exists
  const firstIncompleteSectionId = useMemo(() => {
    for (const section of module.sections) {
      for (const group of section.groups) {
        for (const topic of group.topics) {
          if (!completedTopics.includes(topic.id)) {
            return section.id;
          }
        }
      }
    }
    return null;
  }, [completedTopics, module]);

  // If user has a lastVisited section, use that; otherwise use firstIncomplete
  const lastVisited = getCurrentSection(module.id);
  const targetSectionId = lastVisited ?? firstIncompleteSectionId;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">{module.title}</h1>
            <p className="mt-2 text-slate-400">
              {completed} of {total} topics completed
            </p>
          </div>

          <div className="text-right">
            <p className="text-5xl font-bold text-blue-400">{progress}%</p>
            <p className="text-slate-500">Completed</p>
          </div>
        </div>

        <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-blue-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {module.sections.map((section, index) => (
          <Section
            key={section.id}
            moduleId={module.id}
            section={section}
            // isFirstSection: true only for the section that should auto-open
            // This is either the last visited section or the first incomplete one
            isFirstSection={section.id === targetSectionId}
          />
        ))}
      </div>
    </div>
  );
}
