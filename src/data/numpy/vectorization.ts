import { Section } from "../../types/roadmap";

export const vectorization: Section = {
  id: "vectorization",
  title: "Vectorization",

  groups: [

    {
      id: "fundamentals",
      title: "Vectorization Fundamentals",

      topics: [
        {
          id: "what-is-vectorization",
          title: "What is Vectorization?",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "vectorization-vs-loops",
          title: "Vectorization vs Python Loops",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "why-vectorization-fast",
          title: "Why Vectorization is Fast",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "optimization",
      title: "Optimization Techniques",

      topics: [
        {
          id: "loop-elimination",
          title: "Eliminating Python Loops",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "broadcasting-vectorization",
          title: "Combining Broadcasting & Vectorization",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "chained-operations",
          title: "Optimizing Chained Operations",
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
          id: "benchmark-vectorized-code",
          title: "Benchmarking Vectorized Code",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "memory-vs-speed",
          title: "Memory vs Speed Trade-offs",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "temporary-arrays-vectorization",
          title: "Temporary Arrays & Performance",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production AI Usage",

      topics: [
        {
          id: "vectorized-feature-engineering",
          title: "Feature Engineering",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "batch-processing",
          title: "Batch Data Processing",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "preprocessing-pipelines",
          title: "ML Data Preprocessing Pipelines",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "anti-patterns",
      title: "Common Mistakes",

      topics: [
        {
          id: "fake-vectorization",
          title: "False Vectorization",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "memory-explosion",
          title: "Memory Explosion Problems",
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
          id: "iq-vectorization",
          title: "Explain Vectorization",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-loop-performance",
          title: "Why are Python Loops Slow?",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-vectorization-ai",
          title: "Vectorization in ML Pipelines",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};