import { Section } from "../../types/roadmap";

export const fundamentals: Section = {
  id: "statistics-fundamentals",
  title: "Statistics Fundamentals",

  groups: [

    {
      id: "introduction",
      title: "Introduction",

      topics: [
        {
          id: "what-is-statistics",
          title: "What is Statistics?",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "statistics-in-ai",
          title: "Statistics in AI & Machine Learning",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "population-sample",
          title: "Population vs Sample",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "parameter-statistic",
          title: "Parameter vs Statistic",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "data-types",
      title: "Types of Data",

      topics: [
        {
          id: "categorical-data",
          title: "Categorical Data",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "numerical-data",
          title: "Numerical Data",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "discrete-continuous",
          title: "Discrete vs Continuous Data",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "measurement-scales",
          title: "Nominal, Ordinal, Interval & Ratio Scales",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "statistical-thinking",
      title: "Statistical Thinking",

      topics: [
        {
          id: "variability",
          title: "Variability",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "uncertainty",
          title: "Uncertainty",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "bias",
          title: "Bias",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "variance-concept",
          title: "Variance Concept",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Statistics in Production",

      topics: [
        {
          id: "statistics-data-engineering",
          title: "Statistics for Data Engineering",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "statistics-machine-learning",
          title: "Statistics for Machine Learning",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "statistics-llms",
          title: "Statistics for LLMs",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "why-statistics",
          title: "Why Statistics Matters in AI",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "sample-vs-population",
          title: "Population vs Sample Interview Question",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};