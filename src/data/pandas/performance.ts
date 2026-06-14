import { Section } from "../../types/roadmap";

export const performance: Section = {
  id: "performance",
  title: "Performance Optimization",

  groups: [

    {
      id: "memory",
      title: "Memory Optimization",

      topics: [
        {
          id: "memory-usage",
          title: "memory_usage()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "optimize-dtypes",
          title: "Optimizing dtypes",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "categorical-data",
          title: "Categorical Data Type",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "vectorization",
      title: "Vectorization",

      topics: [
        {
          id: "why-vectorization",
          title: "Why Vectorization?",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "avoid-loops",
          title: "Avoiding Python Loops",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "vectorized-string",
          title: "Vectorized String Operations",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "large-datasets",
      title: "Large Dataset Processing",

      topics: [
        {
          id: "chunk-processing",
          title: "Chunk Processing",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "lazy-loading",
          title: "Lazy Data Loading",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "parquet-performance",
          title: "Parquet Performance",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "benchmarking",
      title: "Benchmarking",

      topics: [
        {
          id: "timing-code",
          title: "Timing Pandas Operations",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "profiling",
          title: "Profiling Data Pipelines",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "bottleneck-analysis",
          title: "Finding Bottlenecks",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Best Practices",

      topics: [
        {
          id: "scaling-pandas",
          title: "Scaling Pandas Workloads",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "pandas-vs-polars",
          title: "Pandas vs Polars",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "when-to-use-spark",
          title: "When to Use Spark Instead",
          estimatedMinutes: 45,
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
          title: "Optimize a Slow Pandas Pipeline",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "iq-memory",
          title: "Reducing Memory Usage",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    }

  ]
};