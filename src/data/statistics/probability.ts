import { Section } from "../../types/roadmap";

export const probability: Section = {
  id: "probability",
  title: "Probability",

  groups: [

    {
      id: "fundamentals",
      title: "Probability Fundamentals",

      topics: [
        {
          id: "what-is-probability",
          title: "What is Probability?",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "sample-space",
          title: "Sample Space",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "events",
          title: "Events",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "probability-rules",
          title: "Basic Probability Rules",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "conditional",
      title: "Conditional Probability",

      topics: [
        {
          id: "conditional-probability",
          title: "Conditional Probability",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "independent-events",
          title: "Independent Events",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "dependent-events",
          title: "Dependent Events",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "bayes-theorem",
          title: "Bayes' Theorem",
          estimatedMinutes: 50,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "random-variables",
      title: "Random Variables",

      topics: [
        {
          id: "random-variable",
          title: "Random Variables",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "expected-value",
          title: "Expected Value",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "variance-rv",
          title: "Variance of Random Variables",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Probability in AI",

      topics: [
        {
          id: "probability-ml",
          title: "Probability in Machine Learning",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "probability-llm",
          title: "Probability in LLMs",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "bayesian-thinking",
          title: "Bayesian Thinking",
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
          id: "bayes-interview",
          title: "Bayes Theorem Interview Questions",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "conditional-interview",
          title: "Conditional Probability Problems",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    }

  ]
};