import { create } from "zustand";

interface RoadmapState {

  completedTopics: string[];

  currentModule: string;

  setCurrentModule: (module: string) => void;

  toggleTopic: (topicId: string) => void;

  isCompleted: (topicId: string) => boolean;

  clearProgress: () => void;

}

export const useRoadmapStore = create<RoadmapState>((set, get) => ({

  completedTopics: JSON.parse(

    localStorage.getItem("completedTopics") || "[]"

  ),

  currentModule: "python",

  setCurrentModule: (module) => {

    set({

      currentModule: module

    });

  },

  toggleTopic: (topicId) => {

    const completed = get().completedTopics;

    let updated: string[];

    if (completed.includes(topicId)) {

      updated = completed.filter(

        id => id !== topicId

      );

    }

    else {

      updated = [

        ...completed,

        topicId

      ];

    }

    localStorage.setItem(

      "completedTopics",

      JSON.stringify(updated)

    );

    set({

      completedTopics: updated

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

    set({

      completedTopics: []

    });

  }

}));