import { Section } from "../../types/roadmap";

export const interviewMaster: Section = {
  id: "interview-master",
  title: "Interview Mastery",

  groups: [

    {
      id: "eda",
      title: "Exploratory Data Analysis",

      topics: [
        {
          id: "eda-workflow",
          title: "Complete EDA Workflow",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "dataset-understanding",
          title: "Understanding Unknown Datasets",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "outlier-analysis",
          title: "Finding Outliers",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "correlation-analysis",
          title: "Correlation Analysis",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "large-data",
      title: "Large Dataset Processing",

      topics: [
        {
          id: "100gb-csv",
          title: "Processing a 100GB CSV",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "chunk-pipelines",
          title: "Chunk-based Processing",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "memory-pressure",
          title: "Handling Memory Pressure",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "stream-processing",
          title: "Streaming Data Processing",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "performance-debugging",
      title: "Performance & Debugging",

      topics: [
        {
          id: "settingwithcopywarning",
          title: "SettingWithCopyWarning",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "copy-vs-view",
          title: "Copy vs View",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "profiling-pipelines",
          title: "Profiling Slow Pipelines",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "memory-debugging",
          title: "Memory Debugging",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "architecture",
      title: "Production Architecture",

      topics: [
        {
          id: "pandas-vs-polars",
          title: "Pandas vs Polars",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "pandas-vs-spark",
          title: "Pandas vs Spark",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "pandas-vs-duckdb",
          title: "Pandas vs DuckDB",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "when-not-pandas",
          title: "When NOT to Use Pandas",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "case-studies",
      title: "Production Case Studies",

      topics: [
        {
          id: "sales-pipeline",
          title: "Build a Sales Analytics Pipeline",
          estimatedMinutes: 60,
          interviewImportance: 5,
        },
        {
          id: "feature-engineering-case",
          title: "Feature Engineering Case Study",
          estimatedMinutes: 60,
          interviewImportance: 5,
        },
        {
          id: "customer-analytics-case",
          title: "Customer Analytics Pipeline",
          estimatedMinutes: 60,
          interviewImportance: 5,
        },
        {
          id: "data-cleaning-case",
          title: "End-to-End Data Cleaning Pipeline",
          estimatedMinutes: 60,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "faang",
      title: "FAANG Interview Questions",

      topics: [
        {
          id: "faang-1",
          title: "Optimize a Slow Pandas Pipeline",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "faang-2",
          title: "Design a Feature Engineering Pipeline",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "faang-3",
          title: "Process Millions of Records Efficiently",
          estimatedMinutes: 50,
          interviewImportance: 5,
        },
        {
          id: "faang-4",
          title: "Memory Optimization Strategy",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "faang-5",
          title: "Complete Pandas Interview Revision",
          estimatedMinutes: 90,
          interviewImportance: 5,
        }
      ]
    }

  ]
};