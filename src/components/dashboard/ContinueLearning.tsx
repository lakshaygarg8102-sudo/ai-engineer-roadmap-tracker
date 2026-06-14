import { ArrowRight, BookOpen } from "lucide-react";
import { roadmapModules } from "../../data";
import { useRoadmapStore } from "../../store/roadmapStore";

export default function ContinueLearning() {
  const completedTopics = useRoadmapStore(
    (state) => state.completedTopics
  );

  const currentModule = useRoadmapStore(
    (state) => state.currentModule
  );

  const setCurrentModule = useRoadmapStore(
    (state) => state.setCurrentModule
  );

  // If we're on dashboard, resume the last learning module.
  // Otherwise use the currently opened module.
  const activeModuleId =
    currentModule === "dashboard"
      ? useRoadmapStore.getState().lastLearningModule
      : currentModule;

  const orderedModules = [
    ...roadmapModules.filter(
      (m) => m.id === activeModuleId
    ),
    ...roadmapModules.filter(
      (m) => m.id !== activeModuleId
    ),
  ];

  let nextTopic:
    | {
        moduleId: string;
        module: string;
        section: string;
        title: string;
        minutes: number;
      }
    | undefined;

  outer:
  for (const module of orderedModules) {
    for (const section of module.sections) {
      for (const group of section.groups) {
        for (const topic of group.topics) {
          if (!completedTopics.includes(topic.id)) {
            nextTopic = {
              moduleId: module.id,
              module: module.title,
              section: section.title,
              title: topic.title,
              minutes: topic.estimatedMinutes,
            };

            break outer;
          }
        }
      }
    }
  }

  if (!nextTopic) {
    return (
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="text-2xl font-bold">
          🎉 Roadmap Completed
        </h2>

        <p className="mt-4 text-slate-400">
          You have completed every topic.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="flex items-center gap-3">
        <BookOpen
          className="text-blue-400"
          size={28}
        />

        <h2 className="text-2xl font-bold">
          Continue Learning
        </h2>
      </div>

      <div className="mt-8 space-y-5">

        <div>
          <p className="text-slate-500">
            Module
          </p>

          <h3 className="mt-1 text-xl font-semibold">
            {nextTopic.module}
          </h3>
        </div>

        <div>
          <p className="text-slate-500">
            Section
          </p>

          <h3 className="mt-1 text-xl font-semibold">
            {nextTopic.section}
          </h3>
        </div>

        <div>
          <p className="text-slate-500">
            Next Topic
          </p>

          <h3 className="mt-1 text-xl font-semibold">
            {nextTopic.title}
          </h3>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Estimated Time
          </span>

          <span className="font-semibold">
            {nextTopic.minutes} mins
          </span>
        </div>

        <button
          onClick={() =>
            setCurrentModule(nextTopic.moduleId)
          }
          className="mt-6 flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 hover:bg-blue-700 transition-all"
        >
          Continue

          <ArrowRight size={18} />
        </button>

      </div>

    </div>
  );
}