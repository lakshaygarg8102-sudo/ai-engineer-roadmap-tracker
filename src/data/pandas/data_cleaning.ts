import { Section } from "../../types/roadmap";

export const dataCleaning: Section = {
  id: "data-cleaning",
  title: "Data Cleaning",

  groups: [

    {
      id: "duplicates",
      title: "Duplicate Data",

      topics: [
        {
          id: "duplicated",
          title: "duplicated()",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "drop-duplicates",
          title: "drop_duplicates()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "text-cleaning",
      title: "Cleaning Text",

      topics: [
        {
          id: "strip-text",
          title: "Removing Extra Spaces",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "replace-text",
          title: "Replacing Text",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "string-methods",
          title: "Vectorized String Methods (.str)",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "data-types",
      title: "Fixing Data Types",

      topics: [
        {
          id: "astype",
          title: "astype()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "to-numeric",
          title: "to_numeric()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "to-datetime",
          title: "to_datetime()",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Data Cleaning",

      topics: [
        {
          id: "validation",
          title: "Data Validation",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "cleaning-pipeline",
          title: "Building Cleaning Pipelines",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "reproducible-cleaning",
          title: "Reproducible Cleaning Workflows",
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
          id: "iq-cleaning",
          title: "End-to-End Data Cleaning Strategy",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "iq-data-types",
          title: "Why Correct dtypes Matter",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};