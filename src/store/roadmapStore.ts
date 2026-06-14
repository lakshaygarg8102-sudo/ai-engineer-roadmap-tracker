import { create } from "zustand";

interface LastVisitedLocation {
  section: string | null;
}

interface RoadmapState {
  completedTopics: string[];

  currentModule: string;

  lastLearningModule: string;

  lastVisitedSections: Record<
    string,
    LastVisitedLocation
  >;

  setCurrentModule: (
    module: string
  ) => void;

  setCurrentSection: (
    module: string,
    section: string
  ) => void;

  getCurrentSection: (
    module: string
  ) => string | null;

  toggleTopic: (
    topicId: string
  ) => void;

  isCompleted: (
    topicId: string
  ) => boolean;

  clearProgress: () => void;
}

export const useRoadmapStore =
  create<RoadmapState>((set, get) => ({

    completedTopics: JSON.parse(
      localStorage.getItem(
        "completedTopics"
      ) || "[]"
    ),

    currentModule:
      localStorage.getItem(
        "currentModule"
      ) || "dashboard",

    lastLearningModule:
      localStorage.getItem(
        "lastLearningModule"
      ) || "python",

    lastVisitedSections: JSON.parse(
      localStorage.getItem(
        "lastVisitedSections"
      ) || "{}"
    ),

    setCurrentModule: (module) => {

      localStorage.setItem(
        "currentModule",
        module
      );

      if (module !== "dashboard") {

        localStorage.setItem(
          "lastLearningModule",
          module
        );

      }

      set({

        currentModule: module,

        lastLearningModule:
          module === "dashboard"
            ? get().lastLearningModule
            : module,

      });

    },

    setCurrentSection: (
      module,
      section
    ) => {

      const updated = {

        ...get().lastVisitedSections,

        [module]: {

          section,

        },

      };

      localStorage.setItem(

        "lastVisitedSections",

        JSON.stringify(updated)

      );

      set({

        lastVisitedSections:
          updated,

      });

    },

    getCurrentSection: (
      module
    ) => {

      return (
        get()
          .lastVisitedSections[
          module
        ]?.section ?? null
      );

    },

    toggleTopic: (topicId) => {

      const completed =
        get().completedTopics;

      const updated =
        completed.includes(
          topicId
        )
          ? completed.filter(
              (id) =>
                id !== topicId
            )
          : [
              ...completed,
              topicId,
            ];

      localStorage.setItem(

        "completedTopics",

        JSON.stringify(updated)

      );

      set({

        completedTopics:
          updated,

      });

    },

    isCompleted: (
      topicId
    ) => {

      return get()
        .completedTopics
        .includes(topicId);

    },

    clearProgress: () => {

      localStorage.removeItem(
        "completedTopics"
      );

      localStorage.removeItem(
        "lastVisitedSections"
      );

      localStorage.removeItem(
        "currentModule"
      );

      localStorage.removeItem(
        "lastLearningModule"
      );

      set({

        completedTopics: [],

        currentModule:
          "dashboard",

        lastLearningModule:
          "python",

        lastVisitedSections:
          {},

      });

    },

  }));