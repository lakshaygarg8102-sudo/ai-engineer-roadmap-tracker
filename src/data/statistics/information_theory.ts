import { Section } from "../../types/roadmap";

export const informationTheory: Section = {
  id: "information-theory",
  title: "Information Theory",

  groups: [

    {
      id: "fundamentals",
      title: "Information Fundamentals",

      topics: [
        {
          id: "what-is-information-theory",
          title: "What is Information Theory?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "information-content",
          title: "Information Content",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "entropy",
          title: "Entropy",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "cross-entropy",
          title: "Cross Entropy",
          estimatedMinutes: 50,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "divergence",
      title: "Probability Divergence",

      topics: [
        {
          id: "kl-divergence",
          title: "KL Divergence",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "js-divergence",
          title: "Jensen-Shannon Divergence",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "mutual-information",
          title: "Mutual Information",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "ai",
      title: "Information Theory in AI",

      topics: [
        {
          id: "decision-tree-entropy",
          title: "Entropy in Decision Trees",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "llm-cross-entropy",
          title: "Cross Entropy Loss in LLMs",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "feature-information-gain",
          title: "Information Gain",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Applications",

      topics: [
        {
          id: "language-model-loss",
          title: "Language Model Loss",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "distribution-comparison",
          title: "Comparing Probability Distributions",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "entropy-interview",
          title: "Explain Entropy",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "kl-interview",
          title: "KL Divergence Interview Questions",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    }

  ]
};