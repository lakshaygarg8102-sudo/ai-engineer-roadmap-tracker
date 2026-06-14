import { Section } from "../../types/roadmap";

export const bestPractices: Section = {
  id: "best-practices",
  title: "Best Practices",

  groups: [

    {
      id: "coding",
      title: "Writing Better Pandas Code",

      topics: [
        {
          id: "readability",
          title: "Readable Pandas Code",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "method-chaining",
          title: "Method Chaining",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "avoid-side-effects",
          title: "Avoid Side Effects",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "performance",
      title: "Performance Guidelines",

      topics: [
        {
          id: "avoid-iterrows",
          title: "Avoid iterrows()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "prefer-vectorization",
          title: "Prefer Vectorized Operations",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "efficient-filtering",
          title: "Efficient Filtering",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "data-quality",
      title: "Data Quality",

      topics: [
        {
          id: "validate-input",
          title: "Validate Input Data",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "schema-validation",
          title: "Schema Validation",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "reproducibility",
          title: "Reproducible Pipelines",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Engineering",

      topics: [
        {
          id: "modular-pipelines",
          title: "Modular Data Pipelines",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "logging",
          title: "Logging & Monitoring",
          estimatedMinutes: 35,
          interviewImportance: 4,
        },
        {
          id: "testing-pipelines",
          title: "Testing Data Pipelines",
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
          id: "iq-production-pandas",
          title: "Production Pandas Best Practices",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-performance-best-practices",
          title: "Writing High-Performance Pandas Code",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    }

  ]
};