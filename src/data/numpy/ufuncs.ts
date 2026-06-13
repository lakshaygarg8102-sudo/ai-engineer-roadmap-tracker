import { Section } from "../../types/roadmap";

export const ufuncs: Section = {
  id: "ufuncs",
  title: "Universal Functions (ufuncs)",

  groups: [

    {
      id: "fundamentals",
      title: "Understanding ufuncs",

      topics: [
        {
          id: "what-are-ufuncs",
          title: "What are Universal Functions?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "why-ufuncs-fast",
          title: "Why ufuncs are Fast",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "element-wise-computation",
          title: "Element-wise Computation",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "operations",
      title: "Core Operations",

      topics: [
        {
          id: "math-ufuncs",
          title: "Mathematical ufuncs",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "comparison-ufuncs",
          title: "Comparison & Logical ufuncs",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "reduction-ufuncs",
          title: "Reduction Operations",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "advanced",
      title: "Advanced Features",

      topics: [
        {
          id: "ufunc-methods",
          title: "reduce(), accumulate(), reduceat(), outer()",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "where-parameter",
          title: "where & out Parameters",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "custom-ufuncs",
          title: "Creating Custom ufuncs",
          estimatedMinutes: 35,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "performance",
      title: "Performance",

      topics: [
        {
          id: "ufunc-memory",
          title: "Memory-efficient Computation",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "avoid-temporary-arrays",
          title: "Avoid Temporary Arrays",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Usage",

      topics: [
        {
          id: "feature-engineering-ufuncs",
          title: "Feature Engineering with ufuncs",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "image-processing-ufuncs",
          title: "Image Processing Pipelines",
          estimatedMinutes: 35,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "iq-ufunc",
          title: "Explain Universal Functions",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-reduce",
          title: "reduce() vs accumulate()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-out-parameter",
          title: "Why Use out=?",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    }

  ]
};