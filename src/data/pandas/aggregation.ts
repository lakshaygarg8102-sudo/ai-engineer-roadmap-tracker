import { Section } from "../../types/roadmap";

export const aggregation: Section = {
  id: "aggregation",
  title: "Aggregation",

  groups: [

    {
      id: "basic",
      title: "Basic Aggregations",

      topics: [
        {
          id: "sum",
          title: "sum()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "mean",
          title: "mean()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "count",
          title: "count()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "min-max",
          title: "min() & max()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "statistical",
      title: "Statistical Aggregations",

      topics: [
        {
          id: "median",
          title: "median()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "std",
          title: "Standard Deviation",
          estimatedMinutes: 30,
          interviewImportance: 5,
        },
        {
          id: "variance",
          title: "Variance",
          estimatedMinutes: 30,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "custom",
      title: "Custom Aggregations",

      topics: [
        {
          id: "custom-agg",
          title: "Custom agg() Functions",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "lambda-agg",
          title: "Aggregation with Lambda",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "multiple-custom",
          title: "Multiple Custom Aggregations",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Analytics",

      topics: [
        {
          id: "business-metrics",
          title: "Business Metrics",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "dashboard-metrics",
          title: "Dashboard Aggregations",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "aggregation-performance",
          title: "Aggregation Performance",
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
          id: "iq-agg",
          title: "Explain agg()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "iq-custom-aggregation",
          title: "Design Custom Aggregations",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    }

  ]
};