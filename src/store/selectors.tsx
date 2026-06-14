import { roadmapModules } from "../data";
import { useRoadmapStore } from "./roadmapStore";

export function getTotalTopics(moduleId?: string): number {
  const modules = moduleId
    ? roadmapModules.filter(
        (m) => m.id === moduleId
      )
    : roadmapModules;

  return modules.reduce(
    (moduleTotal, module) =>
      moduleTotal +
      module.sections.reduce(
        (sectionTotal, section) =>
          sectionTotal +
          section.groups.reduce(
            (groupTotal, group) =>
              groupTotal +
              group.topics.length,
            0
          ),
        0
      ),
    0
  );
}

export function getCompletedTopics(
  moduleId?: string
): number {

  // ✅ Read directly from Zustand store.
  const completedTopics =
    useRoadmapStore.getState().completedTopics;

  const modules = moduleId
    ? roadmapModules.filter(
        (m) => m.id === moduleId
      )
    : roadmapModules;

  let completed = 0;

  modules.forEach((module) => {
    module.sections.forEach((section) => {
      section.groups.forEach((group) => {
        group.topics.forEach((topic) => {
          if (
            completedTopics.includes(topic.id)
          ) {
            completed++;
          }
        });
      });
    });
  });

  return completed;
}

export function getOverallProgress(
  moduleId?: string
): number {

  const total = getTotalTopics(moduleId);

  if (total === 0) {
    return 0;
  }

  return Math.round(
    (getCompletedTopics(moduleId) /
      total) *
      100
  );
}

export function getModuleProgress(
  moduleId: string
) {

  const completed =
    getCompletedTopics(moduleId);

  const total =
    getTotalTopics(moduleId);

  return {
    completed,
    total,
    progress:
      total === 0
        ? 0
        : Math.round(
            (completed / total) * 100
          ),
  };
}