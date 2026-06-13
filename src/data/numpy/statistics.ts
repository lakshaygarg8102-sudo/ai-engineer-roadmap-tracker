import { Section } from "../../types/roadmap";

export const statistics: Section = {
  id: "statistics",
  title: "Statistics",

  groups: [

    {
      id: "descriptive",
      title: "Descriptive Statistics",

      topics: [
        {
          id: "mean-median-std",
          title: "Mean, Median, Variance & Standard Deviation",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "min-max-percentiles",
          title: "Min, Max, Percentiles & Quantiles",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "axis-statistics",
          title: "Axis-wise Statistics",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "aggregation",
      title: "Aggregation",

      topics: [
        {
          id: "aggregation-functions",
          title: "Aggregation Functions",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "nan-functions",
          title: "Handling Missing Values (NaN-aware APIs)",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "keepdims",
          title: "keepdims & Shape Preservation",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "correlation",
      title: "Relationships",

      topics: [
        {
          id: "covariance",
          title: "Covariance",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "correlation",
          title: "Correlation",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "correlation-matrices",
          title: "Correlation Matrices",
          estimatedMinutes: 35,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "production",
      title: "Production Data Analysis",

      topics: [
        {
          id: "feature-analysis",
          title: "Feature Analysis",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "outlier-analysis",
          title: "Outlier Detection",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "distribution-analysis",
          title: "Distribution Analysis",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "performance",
      title: "Performance",

      topics: [
        {
          id: "efficient-statistics",
          title: "Efficient Statistical Computation",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "large-datasets",
          title: "Statistics on Large Arrays",
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
          id: "iq-axis",
          title: "Understanding axis Parameter",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iq-nan",
          title: "Handling Missing Values",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-correlation",
          title: "Correlation vs Covariance",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};