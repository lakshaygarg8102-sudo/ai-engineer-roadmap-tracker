import { Section } from "../../types/roadmap";

export const debugging: Section = {
  id: "debugging",
  title: "Statistical Debugging",

  groups: [

    {
      id: "dataset-problems",
      title: "Dataset Problems",

      topics: [
        {
          id: "biased-data",
          title: "Biased Data",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "imbalanced-data",
          title: "Imbalanced Data",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "data-leakage",
          title: "Data Leakage",
          estimatedMinutes: 50,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "model-analysis",
      title: "Model Analysis",

      topics: [
        {
          id: "overfitting-signals",
          title: "Overfitting Indicators",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "underfitting-signals",
          title: "Underfitting Indicators",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "statistical-validation",
          title: "Statistical Validation",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Scenarios",

      topics: [
        {
          id: "ab-test-failure",
          title: "Debug a Failed A/B Test",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "dataset-debugging",
          title: "Dataset Investigation",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    }

  ]
};