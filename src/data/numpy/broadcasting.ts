import { Section } from "../../types/roadmap";

export const broadcasting: Section = {
  id: "broadcasting",
  title: "Broadcasting",

  groups: [

    {
      id: "fundamentals",
      title: "Broadcasting Fundamentals",

      topics: [
        {
          id: "what-is-broadcasting",
          title: "What is Broadcasting?",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "broadcasting-rules",
          title: "Broadcasting Rules",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "shape-compatibility",
          title: "Shape Compatibility",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "broadcasting-internals",
      title: "How Broadcasting Works",

      topics: [
        {
          id: "virtual-expansion",
          title: "Virtual Expansion (No Data Copy)",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "broadcast-memory",
          title: "Memory Efficiency",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "broadcast-strides",
          title: "Broadcasting & Strides",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "real-world",
      title: "Production Usage",

      topics: [
        {
          id: "feature-normalization",
          title: "Feature Normalization",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "image-processing",
          title: "Image Processing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "batch-operations",
          title: "Batch Operations in ML",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "debugging",
      title: "Debugging Broadcasting",

      topics: [
        {
          id: "broadcast-errors",
          title: "Shape Mismatch Errors",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "debugging-shapes",
          title: "Debugging Shape Issues",
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
          id: "broadcast-vs-loop",
          title: "Broadcasting vs Python Loops",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "avoid-unnecessary-copies",
          title: "Avoiding Unnecessary Copies",
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
          id: "iq-broadcasting",
          title: "Explain Broadcasting",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-shape-rules",
          title: "Broadcasting Rules",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-performance-broadcasting",
          title: "Why Broadcasting is Fast",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};