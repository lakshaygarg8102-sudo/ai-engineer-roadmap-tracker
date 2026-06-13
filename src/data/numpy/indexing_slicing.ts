import { Section } from "../../types/roadmap";

export const indexingSlicing: Section = {
  id: "indexing-slicing",
  title: "Indexing & Slicing",

  groups: [

    {
      id: "basic-indexing",
      title: "Basic Indexing",

      topics: [
        {
          id: "single-index",
          title: "Single & Multi-dimensional Indexing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "negative-indexing",
          title: "Negative Indexing",
          estimatedMinutes: 20,
          interviewImportance: 4,
        },
        {
          id: "basic-slicing",
          title: "Basic Slicing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "advanced-indexing",
      title: "Advanced Indexing",

      topics: [
        {
          id: "fancy-indexing",
          title: "Fancy Indexing",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "boolean-indexing",
          title: "Boolean Indexing",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "advanced-slicing",
          title: "Advanced Slicing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "views",
      title: "Views vs Copies",

      topics: [
        {
          id: "views-vs-copies",
          title: "Views vs Copies",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "copy-function",
          title: "copy()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "shared-memory",
          title: "Shared Memory Pitfalls",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "performance",
      title: "Performance",

      topics: [
        {
          id: "slice-performance",
          title: "Slicing Performance",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "advanced-index-performance",
          title: "Advanced Indexing Performance",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Real-world Usage",

      topics: [
        {
          id: "dataset-filtering",
          title: "Filtering Large Datasets",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "masking",
          title: "Masking for ML Pipelines",
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
          id: "iq-view-copy",
          title: "View vs Copy",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-fancy-indexing",
          title: "Fancy Indexing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-boolean-indexing",
          title: "Boolean Indexing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};