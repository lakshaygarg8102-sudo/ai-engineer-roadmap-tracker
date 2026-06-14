import { Section } from "../../types/roadmap";

export const advancedTopics: Section = {
  id: "advanced-topics",
  title: "Advanced Topics",

  groups: [

    {
      id: "window-functions",
      title: "Window Operations",

      topics: [
        {
          id: "rolling-vs-expanding",
          title: "Rolling vs Expanding Windows",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "ewm",
          title: "Exponentially Weighted Windows",
          estimatedMinutes: 35,
          interviewImportance: 4,
        },
        {
          id: "window-analytics",
          title: "Window Analytics",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "reshape",
      title: "Reshaping Data",

      topics: [
        {
          id: "pivot",
          title: "pivot()",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "pivot-table",
          title: "pivot_table()",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "melt",
          title: "melt()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "stack-unstack",
          title: "stack() & unstack()",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "advanced-indexing",
      title: "Advanced Indexing",

      topics: [
        {
          id: "multiindex-operations",
          title: "MultiIndex Operations",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "cross-section",
          title: "Cross Sections (xs)",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "hierarchical-indexing",
          title: "Hierarchical Indexing",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "extensions",
      title: "Extension Features",

      topics: [
        {
          id: "extension-arrays",
          title: "Extension Arrays",
          estimatedMinutes: 40,
          interviewImportance: 4,
        },
        {
          id: "nullable-dtypes",
          title: "Nullable Data Types",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "pyarrow-engine",
          title: "PyArrow Backend",
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
          id: "pandas-in-ml",
          title: "Pandas in ML Pipelines",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "pandas-in-data-engineering",
          title: "Pandas in Data Engineering",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "when-not-to-use-pandas",
          title: "When NOT to Use Pandas",
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
          id: "iq-pivot-vs-pivot-table",
          title: "pivot() vs pivot_table()",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-pandas-scale",
          title: "How Would You Scale Pandas?",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    }

  ]
};