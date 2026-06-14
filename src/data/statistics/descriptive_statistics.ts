import { Section } from "../../types/roadmap";

export const descriptiveStatistics: Section = {
  id: "descriptive-statistics",
  title: "Descriptive Statistics",

  groups: [

    {
      id: "central-tendency",
      title: "Measures of Central Tendency",

      topics: [
        {
          id: "mean",
          title: "Mean",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "median",
          title: "Median",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "mode",
          title: "Mode",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "weighted-mean",
          title: "Weighted Mean",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "dispersion",
      title: "Measures of Dispersion",

      topics: [
        {
          id: "range",
          title: "Range",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "variance",
          title: "Variance",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "standard-deviation",
          title: "Standard Deviation",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "iqr",
          title: "Interquartile Range (IQR)",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "distribution-shape",
      title: "Distribution Shape",

      topics: [
        {
          id: "skewness",
          title: "Skewness",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "kurtosis",
          title: "Kurtosis",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "percentiles",
          title: "Percentiles",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "quartiles",
          title: "Quartiles",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "visualization",
      title: "Statistical Visualization",

      topics: [
        {
          id: "histogram",
          title: "Histogram",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "boxplot",
          title: "Box Plot",
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
      id: "interview",
      title: "Interview Questions",

      topics: [
        {
          id: "mean-vs-median",
          title: "Mean vs Median",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "variance-vs-standard-deviation",
          title: "Variance vs Standard Deviation",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};