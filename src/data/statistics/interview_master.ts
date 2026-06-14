import { Section } from "../../types/roadmap";

export const interviewMaster: Section = {
  id: "interview-master",
  title: "Interview Mastery",

  groups: [

    {
      id: "statistics-round",
      title: "Core Statistics",

      topics: [
        {
          id: "probability-problems",
          title: "Probability Interview Problems",
          estimatedMinutes: 60,
          interviewImportance: 5,
        },
        {
          id: "bayes-problems",
          title: "Bayes Theorem Questions",
          estimatedMinutes: 60,
          interviewImportance: 5,
        },
        {
          id: "distribution-problems",
          title: "Distribution Questions",
          estimatedMinutes: 60,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "machine-learning-round",
      title: "Machine Learning Statistics",

      topics: [
        {
          id: "bias-variance",
          title: "Bias-Variance Tradeoff",
          estimatedMinutes: 60,
          interviewImportance: 5,
        },
        {
          id: "feature-selection-interview",
          title: "Feature Selection",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "cross-validation-interview",
          title: "Cross Validation",
          estimatedMinutes: 50,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "llm-round",
      title: "LLM Mathematics",

      topics: [
        {
          id: "entropy-loss",
          title: "Cross Entropy Loss",
          estimatedMinutes: 60,
          interviewImportance: 5,
        },
        {
          id: "softmax-probability",
          title: "Softmax Probabilities",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "token-probabilities",
          title: "Token Probability Distribution",
          estimatedMinutes: 50,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production-round",
      title: "Production AI",

      topics: [
        {
          id: "drift-debugging",
          title: "Production Drift Investigation",
          estimatedMinutes: 60,
          interviewImportance: 5,
        },
        {
          id: "monitoring-interview",
          title: "Model Monitoring",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "ab-testing-case",
          title: "A/B Testing Case Study",
          estimatedMinutes: 60,
          interviewImportance: 5,
        }
      ]
    }

  ]
};