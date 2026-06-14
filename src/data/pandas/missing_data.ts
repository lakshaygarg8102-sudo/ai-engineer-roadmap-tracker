import { Section } from "../../types/roadmap";

export const missingData: Section = {
  id: "missing-data",
  title: "Missing Data",

  groups: [

    {
      id: "understanding",
      title: "Understanding Missing Data",

      topics: [
        {
          id: "missing-values",
          title: "What are Missing Values?",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "nan-none-na",
          title: "NaN vs None vs pd.NA",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "detect-missing",
          title: "Detecting Missing Values",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "handling",
      title: "Handling Missing Data",

      topics: [
        {
          id: "dropna",
          title: "dropna()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "fillna",
          title: "fillna()",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "replace-missing",
          title: "Replacing Missing Values",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "advanced",
      title: "Advanced Handling",

      topics: [
        {
          id: "forward-fill",
          title: "Forward Fill (ffill)",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "backward-fill",
          title: "Backward Fill (bfill)",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "interpolation",
          title: "Interpolation",
          estimatedMinutes: 40,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "production",
      title: "Production Strategies",

      topics: [
        {
          id: "missing-ai",
          title: "Handling Missing Data in ML Pipelines",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "quality-checks",
          title: "Data Quality Validation",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "missing-report",
          title: "Missing Data Reporting",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-fillna-dropna",
          title: "fillna() vs dropna()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-missing-strategy",
          title: "Choosing a Missing Data Strategy",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    }

  ]
};