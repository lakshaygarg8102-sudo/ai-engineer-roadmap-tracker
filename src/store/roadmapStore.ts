import { create } from "zustand";

interface RoadmapState {
  completedTopics: string[];

  currentModule: string;

  lastLearningModule: string;

  currentSection: string | null;

  setCurrentModule: (module: string) => void;

  setCurrentSection: (
    section: string | null
  ) => void;

  toggleTopic: (topicId: string) => void;

  isCompleted: (topicId: string) => boolean;

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

    currentSection:
      localStorage.getItem(
        "currentSection"
      ) || null,

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

        // New module starts from top
        localStorage.removeItem(
          "currentSection"
        );

        set({

          currentModule: module,

          lastLearningModule: module,

          currentSection: null,

        });

        return;
      }

      set({

        currentModule: module,

      });

    },

    setCurrentSection: (section) => {

      if (section) {

        localStorage.setItem(
          "currentSection",
          section
        );

      } else {

        localStorage.removeItem(
          "currentSection"
        );

      }

      set({

        currentSection: section,

      });

    },

    toggleTopic: (topicId) => {

      const completed =
        get().completedTopics;

      const updated =
        completed.includes(topicId)
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

        completedTopics: updated,

      });

    },

    isCompleted: (topicId) => {

      return get()
        .completedTopics
        .includes(topicId);

    },

    clearProgress: () => {

      localStorage.removeItem(
        "completedTopics"
      );

      localStorage.removeItem(
        "currentSection"
      );

      set({

        completedTopics: [],

        currentSection: null,

      });

    },

  }));