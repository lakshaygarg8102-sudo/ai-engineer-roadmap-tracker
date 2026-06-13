import { Section } from "../../types/roadmap";

export const performance: Section = {
  id: "performance",
  title: "Performance Optimization",

  groups: [
    {
      id: "fundamentals",
      title: "Performance Fundamentals",

      topics: [
        {
          id: "performance-thinking",
          title: "Performance Mindset",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "measure-before-optimize",
          title: "Measure Before Optimizing",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "cpu-memory-io",
          title: "CPU vs Memory vs I/O Bottlenecks",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "profiling",
      title: "Profiling",

      topics: [
        {
          id: "timeit",
          title: "timeit",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "cprofile-review",
          title: "cProfile",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "profiling-workflow",
          title: "Performance Profiling Workflow",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "optimization",
      title: "Optimization Techniques",

      topics: [
        {
          id: "algorithmic-optimization",
          title: "Algorithmic Optimization",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "memory-optimization-review",
          title: "Memory Optimization",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "lazy-evaluation",
          title: "Lazy Evaluation",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "caching",
          title: "Caching (lru_cache & cache)",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Performance",

      topics: [
        {
          id: "performance-monitoring",
          title: "Performance Monitoring",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "benchmarking",
          title: "Benchmarking",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "optimization-ai",
          title: "Optimizing AI/ML Applications",
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
          id: "iq-performance",
          title: "Python Performance Optimization",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-caching",
          title: "When to Use Caching",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "iq-profiling",
          title: "Finding Performance Bottlenecks",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }
  ]
};