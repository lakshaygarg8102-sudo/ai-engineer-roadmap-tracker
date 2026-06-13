import { Section } from "../../types/roadmap";

export const advancedTopics: Section = {
  id: "advanced-topics",
  title: "Advanced Topics",

  groups: [

    {
      id: "large-datasets",
      title: "Working with Large Datasets",

      topics: [
        {
          id: "memmap",
          title: "Memory Mapping with np.memmap",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "out-of-core",
          title: "Out-of-Core Processing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "memory-efficient-loading",
          title: "Memory-efficient Data Loading",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "missing-data",
      title: "Missing Data",

      topics: [
        {
          id: "masked-arrays",
          title: "Masked Arrays (numpy.ma)",
          estimatedMinutes: 35,
          interviewImportance: 4,
        },
        {
          id: "masked-vs-nan",
          title: "Masked Arrays vs NaN",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "handling-missing-data",
          title: "Strategies for Missing Data",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interoperability",
      title: "Interoperability",

      topics: [
        {
          id: "numpy-pandas-memory",
          title: "NumPy ↔ Pandas",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "numpy-pytorch-memory",
          title: "NumPy ↔ PyTorch",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "numpy-arrow",
          title: "NumPy ↔ Apache Arrow",
          estimatedMinutes: 35,
          interviewImportance: 4,
        },
        {
          id: "buffer-protocol-review",
          title: "Zero-copy Data Exchange",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Engineering",

      topics: [
        {
          id: "memory-sharing-ai",
          title: "Sharing Memory Across AI Pipelines",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "large-model-preprocessing",
          title: "Large-scale Data Preprocessing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "numpy-production-checklist",
          title: "Production Checklist",
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
          id: "iq-memmap",
          title: "When Should You Use np.memmap?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-zero-copy",
          title: "Explain Zero-copy Operations",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-numpy-pytorch",
          title: "How NumPy and PyTorch Share Memory",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    }

  ]
};