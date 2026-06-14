import { Section } from "../../types/roadmap";

export const productionStatistics: Section = {
  id: "production-statistics",
  title: "Production Statistics",

  groups: [

    {
      id: "data-quality",
      title: "Data Quality",

      topics: [
        {
          id: "missing-data-analysis",
          title: "Missing Data Analysis",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "outlier-analysis",
          title: "Outlier Detection",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "distribution-monitoring",
          title: "Distribution Monitoring",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "ml-monitoring",
      title: "Model Monitoring",

      topics: [
        {
          id: "data-drift",
          title: "Data Drift",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "concept-drift",
          title: "Concept Drift",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "prediction-drift",
          title: "Prediction Drift",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production-ai",
      title: "Production AI",

      topics: [
        {
          id: "feature-monitoring",
          title: "Feature Monitoring",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "model-confidence",
          title: "Model Confidence",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "uncertainty-monitoring",
          title: "Uncertainty Monitoring",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "analytics",
      title: "Business Analytics",

      topics: [
        {
          id: "kpi-monitoring",
          title: "KPI Monitoring",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "dashboard-statistics",
          title: "Statistical Dashboards",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    }

  ]
};