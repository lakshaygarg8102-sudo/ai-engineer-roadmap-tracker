import { Section } from "../../types/roadmap";

export const memoryInternals: Section = {
  id: "memory-internals",
  title: "Memory Model & Internals",

  groups: [

    {
      id: "memory-layout",
      title: "Memory Layout",

      topics: [
        {
          id: "contiguous-arrays",
          title: "Contiguous Arrays",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "row-major-column-major",
          title: "Row-major vs Column-major Memory",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "strides-review",
          title: "Strides Deep Dive",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "views-copies",
      title: "Views & Copies",

      topics: [
        {
          id: "views-vs-copies-deep",
          title: "Views vs Copies (Deep Dive)",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "memory-sharing",
          title: "Shared Memory",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "copy-cost",
          title: "Cost of Copying Arrays",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "internals",
      title: "NumPy Internals",

      topics: [
        {
          id: "ndarray-memory-layout",
          title: "ndarray Internal Structure",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "dtype-memory-layout",
          title: "dtype Memory Representation",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "buffer-interface",
          title: "Python Buffer Protocol",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "performance",
      title: "Performance Engineering",

      topics: [
        {
          id: "cache-locality",
          title: "CPU Cache Locality",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "memory-bandwidth",
          title: "Memory Bandwidth",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "zero-copy",
          title: "Zero-copy Operations",
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
          id: "iq-strides-memory",
          title: "Explain Strides",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-contiguous",
          title: "Contiguous Memory",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-view-copy-memory",
          title: "Views vs Copies",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    }

  ]
};