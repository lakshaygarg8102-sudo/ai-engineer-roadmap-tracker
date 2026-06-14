import { Section } from "../../types/roadmap";

export const correlationCovariance: Section = {
  id: "correlation-covariance",
  title: "Correlation & Covariance",

  groups: [

    {
      id: "covariance",
      title: "Covariance",

      topics: [
        {
          id: "what-is-covariance",
          title: "What is Covariance?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "positive-negative-covariance",
          title: "Positive vs Negative Covariance",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "covariance-matrix",
          title: "Covariance Matrix",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "correlation",
      title: "Correlation",

      topics: [
        {
          id: "pearson",
          title: "Pearson Correlation",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "spearman",
          title: "Spearman Correlation",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "kendall",
          title: "Kendall Rank Correlation",
          estimatedMinutes: 35,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "feature-analysis",
      title: "Feature Analysis",

      topics: [
        {
          id: "multicollinearity",
          title: "Multicollinearity",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "feature-selection",
          title: "Correlation-based Feature Selection",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "correlation-matrix",
          title: "Correlation Matrix",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production ML",

      topics: [
        {
          id: "feature-redundancy",
          title: "Removing Redundant Features",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "drift-analysis",
          title: "Correlation Drift",
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
          id: "correlation-vs-covariance",
          title: "Correlation vs Covariance",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "correlation-causation",
          title: "Correlation ≠ Causation",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    }

  ]
};