import { Section } from "../../types/roadmap";

export const sampling: Section = {
  id: "sampling",
  title: "Sampling",

  groups: [

    {
      id: "sampling-basics",
      title: "Sampling Fundamentals",

      topics: [
        {
          id: "why-sampling",
          title: "Why Sampling?",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "sampling-techniques",
          title: "Sampling Techniques",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "sampling-error",
          title: "Sampling Error",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "sampling-methods",
      title: "Sampling Methods",

      topics: [
        {
          id: "simple-random",
          title: "Simple Random Sampling",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "stratified",
          title: "Stratified Sampling",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "systematic",
          title: "Systematic Sampling",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "cluster",
          title: "Cluster Sampling",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "bias",
      title: "Sampling Bias",

      topics: [
        {
          id: "selection-bias",
          title: "Selection Bias",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "survivorship-bias",
          title: "Survivorship Bias",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "sampling-bias",
          title: "Sampling Bias",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production AI",

      topics: [
        {
          id: "dataset-splitting",
          title: "Train/Test Split",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "cross-validation-sampling",
          title: "Cross Validation",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "imbalanced-datasets",
          title: "Sampling Imbalanced Datasets",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "sampling-interview",
          title: "Sampling Strategy Questions",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "bias-interview",
          title: "Sampling Bias Interview Questions",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    }

  ]
};