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
          id: "numpy-performance-model",
          title: "NumPy Performance Model",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "where-time-goes",
          title: "CPU vs Memory vs I/O Bottlenecks",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "profiling-first",
          title: "Profile Before Optimizing",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "optimization",
      title: "Optimization Techniques",

      topics: [
        {
          id: "vectorization-review",
          title: "Maximizing Vectorization",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "broadcasting-optimization",
          title: "Broadcasting for Performance",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "avoid-python-loops",
          title: "Eliminating Python Loops",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "in-place-operations",
          title: "In-place Operations",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "memory",
      title: "Memory Optimization",

      topics: [
        {
          id: "temporary-arrays",
          title: "Avoid Temporary Arrays",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "cache-friendly-computation",
          title: "Cache-friendly Computation",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "dtype-performance",
          title: "Choosing Efficient dtypes",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "native-performance",
      title: "Native Performance",

      topics: [
        {
          id: "blas-lapack",
          title: "BLAS & LAPACK",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "simd-awareness",
          title: "SIMD & CPU Vector Instructions",
          estimatedMinutes: 35,
          interviewImportance: 4,
        },
        {
          id: "multithreaded-blas",
          title: "Multithreaded BLAS Libraries",
          estimatedMinutes: 35,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "profiling",
      title: "Profiling",

      topics: [
        {
          id: "timeit-numpy",
          title: "Benchmarking with timeit",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "memory-profiling-numpy",
          title: "Memory Profiling",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "performance-debugging",
          title: "Finding Performance Bottlenecks",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Optimization",

      topics: [
        {
          id: "large-datasets",
          title: "Working with Large Arrays",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "numpy-in-ai",
          title: "Optimizing AI Data Pipelines",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "when-not-to-use-numpy",
          title: "When NumPy is the Wrong Tool",
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
          id: "iq-numpy-fast",
          title: "Why is NumPy Fast?",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "iq-vectorization-performance",
          title: "Vectorization vs Loops",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-memory-performance",
          title: "Optimizing Large NumPy Workloads",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    }

  ]
};