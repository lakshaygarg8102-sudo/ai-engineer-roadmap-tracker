import { Section } from "../../types/roadmap";

export const random: Section = {
  id: "random",
  title: "Random Number Generation",

  groups: [

    {
      id: "fundamentals",
      title: "Random Fundamentals",

      topics: [
        {
          id: "random-module-overview",
          title: "NumPy Random Module",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "generator-api",
          title: "Generator API vs Legacy RandomState",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "seed-reproducibility",
          title: "Seeds & Reproducibility",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "sampling",
      title: "Sampling",

      topics: [
        {
          id: "uniform-sampling",
          title: "Uniform Sampling",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "normal-distribution",
          title: "Normal Distribution",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "random-choice",
          title: "Random Choice & Weighted Sampling",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "shuffle-permutation",
          title: "Shuffle & Permutation",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "ml-applications",
      title: "Machine Learning Usage",

      topics: [
        {
          id: "dataset-shuffling",
          title: "Dataset Shuffling",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "train-test-splitting",
          title: "Train/Test Split Reproducibility",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "weight-initialization",
          title: "Weight Initialization",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "performance",
      title: "Performance",

      topics: [
        {
          id: "vectorized-random",
          title: "Vectorized Random Generation",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "random-large-arrays",
          title: "Generating Large Random Arrays Efficiently",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-random-generator",
          title: "Generator vs RandomState",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-seed",
          title: "Why Set Random Seeds?",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-random-choice",
          title: "choice() vs permutation()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    }

  ]
};