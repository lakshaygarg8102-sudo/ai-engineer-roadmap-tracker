import { Section } from "../../types/roadmap";

export const hypothesisTesting: Section = {
  id: "hypothesis-testing",
  title: "Hypothesis Testing",

  groups: [

    {
      id: "fundamentals",
      title: "Hypothesis Testing Fundamentals",

      topics: [
        {
          id: "what-is-hypothesis-testing",
          title: "What is Hypothesis Testing?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "null-hypothesis",
          title: "Null Hypothesis (H₀)",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "alternative-hypothesis",
          title: "Alternative Hypothesis (H₁)",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "errors",
      title: "Statistical Errors",

      topics: [
        {
          id: "type1-error",
          title: "Type I Error",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "type2-error",
          title: "Type II Error",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "statistical-power",
          title: "Statistical Power",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "tests",
      title: "Common Statistical Tests",

      topics: [
        {
          id: "z-test",
          title: "Z-Test",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "t-test",
          title: "T-Test",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "chi-square-test",
          title: "Chi-Square Test",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "anova",
          title: "ANOVA",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production AI",

      topics: [
        {
          id: "ab-testing",
          title: "A/B Testing",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "experiment-design",
          title: "Experiment Design",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "online-experiments",
          title: "Online Experiments",
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
          id: "p-value-interview",
          title: "Explain p-value",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "ab-testing-interview",
          title: "Design an A/B Test",
          estimatedMinutes: 50,
          interviewImportance: 5,
        }
      ]
    }

  ]
};