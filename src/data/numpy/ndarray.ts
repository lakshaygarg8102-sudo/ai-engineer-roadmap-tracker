import { Section } from "../../types/roadmap";

export const ndarray: Section = {
  id: "ndarray",
  title: "ndarray",

  groups: [

    {
      id: "core-concepts",
      title: "Core Concepts",

      topics: [
        {
          id: "what-is-ndarray",
          title: "What is ndarray?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "dimensions-shape",
          title: "Dimensions, Shape & Size",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "axes",
          title: "Understanding Axes",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "dtype",
          title: "Data Types (dtype)",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "memory-layout",
      title: "Memory Layout",

      topics: [
        {
          id: "contiguous-memory",
          title: "Contiguous Memory",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "strides",
          title: "Strides",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "itemsize",
          title: "itemsize, nbytes & Memory Usage",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "attributes",
      title: "Important Attributes",

      topics: [
        {
          id: "shape-size-ndim",
          title: "shape, size & ndim",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "flags",
          title: "Array Flags",
          estimatedMinutes: 25,
          interviewImportance: 4,
        },
        {
          id: "base",
          title: "base Attribute",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Concepts",

      topics: [
        {
          id: "views-vs-copies-preview",
          title: "Views vs Copies",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "memory-efficiency",
          title: "Memory Efficiency",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "dtype-selection",
          title: "Choosing the Right dtype",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-ndarray",
          title: "Explain ndarray Internals",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-strides",
          title: "What are Strides?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-dtype",
          title: "Why Does dtype Matter?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};