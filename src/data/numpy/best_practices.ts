import { Section } from "../../types/roadmap";

export const bestPractices: Section = {
  id: "best-practices",
  title: "Best Practices & Production Usage",

  groups: [

    {
      id: "coding",
      title: "Writing Better NumPy Code",

      topics: [
        {
          id: "write-vectorized-code",
          title: "Prefer Vectorized Code",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "avoid-hidden-copies",
          title: "Avoid Hidden Copies",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "choose-correct-dtype",
          title: "Choose the Right dtype",
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
          id: "pipeline-design",
          title: "Building Data Processing Pipelines",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "memory-efficient-pipelines",
          title: "Memory-efficient Pipelines",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "error-handling",
          title: "Handling Invalid & Missing Data",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "common-mistakes",
      title: "Common Mistakes",

      topics: [
        {
          id: "shape-errors",
          title: "Shape Mismatch Errors",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "broadcasting-mistakes",
          title: "Broadcasting Mistakes",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "performance-antipatterns",
          title: "Performance Anti-patterns",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "ecosystem",
      title: "Working with the AI Stack",

      topics: [
        {
          id: "numpy-pandas",
          title: "NumPy + Pandas",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "numpy-pytorch",
          title: "NumPy + PyTorch",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "numpy-scikit",
          title: "NumPy + scikit-learn",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Senior Interview Questions",

      topics: [
        {
          id: "iq-production-numpy",
          title: "Production NumPy Best Practices",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-memory-optimization",
          title: "Memory Optimization Strategies",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-ai-pipelines",
          title: "Using NumPy in AI Pipelines",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    }

  ]
};