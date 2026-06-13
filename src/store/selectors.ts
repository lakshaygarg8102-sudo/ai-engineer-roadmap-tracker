import { roadmapModules } from "../data";
import { useRoadmapStore } from "./roadmapStore";

function getAllTopics() {
  return roadmapModules
    .flatMap((module) => module.sections)
    .flatMap((section) => section.groups)
    .flatMap((group) => group.topics);
}

export function getTotalTopics() {
  return getAllTopics().length;
}

export function getCompletedTopics() {
  return useRoadmapStore.getState().completedTopics.length;
}

export function getOverallProgress() {
  const total = getTotalTopics();
  const completed = getCompletedTopics();

  if (total === 0) return 0;

  return Math.round((completed / total) * 100);
}

export function getModuleProgress(moduleId: string) {
  const module = roadmapModules.find((m) => m.id === moduleId);

  if (!module) {
    return {
      total: 0,
      completed: 0,
      progress: 0,
    };
  }

  const topics = module.sections
    .flatMap((section) => section.groups)
    .flatMap((group) => group.topics);

  const completedTopics = useRoadmapStore.getState().completedTopics;

  const completed = topics.filter((topic) =>
    completedTopics.includes(topic.id)
  ).length;

  const total = topics.length;

  return {
    total,
    completed,
    progress: total === 0 ? 0 : Math.round((completed / total) * 100),
  };
}