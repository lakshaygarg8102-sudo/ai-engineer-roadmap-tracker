import { roadmapModules } from "../data";
import { useRoadmapStore } from "./roadmapStore";

export function getTotalTopics(moduleId?: string): number {
  const modules = moduleId
    ? roadmapModules.filter(
        (m) => m.id === moduleId
      )
    : roadmapModules;

  let total = 0;

  modules.forEach((module) => {
    module.sections.forEach((section) => {
      section.groups.forEach((group) => {
        total += group.topics.length;
      });
    });
  });

  return total;
}

export function getCompletedTopics(
  moduleId?: string
): number {

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

  const total =
    getTotalTopics(moduleId);

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
  const total =
    getTotalTopics(moduleId);

  const completed =
    getCompletedTopics(moduleId);

  return {
    total,
    completed,
    progress:
      total === 0
        ? 0
        : Math.round(
            (completed / total) * 100
          ),
  };
}