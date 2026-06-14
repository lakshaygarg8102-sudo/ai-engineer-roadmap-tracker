import { Section } from "../../types/roadmap";

export const groupby: Section = {
  id: "groupby",
  title: "GroupBy",

  groups: [

    {
      id: "fundamentals",
      title: "GroupBy Fundamentals",

      topics: [
        {
          id: "what-is-groupby",
          title: "Understanding GroupBy",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "single-column-grouping",
          title: "Grouping by One Column",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "multiple-column-grouping",
          title: "Grouping by Multiple Columns",
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
          id: "agg",
          title: "agg()",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "multiple-aggregations",
          title: "Multiple Aggregations",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "named-aggregations",
          title: "Named Aggregations",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "transform-filter",
      title: "Transform & Filter",

      topics: [
        {
          id: "groupby-transform",
          title: "transform() with GroupBy",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "groupby-filter",
          title: "filter()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "groupby-apply",
          title: "apply() with GroupBy",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "advanced",
      title: "Advanced GroupBy",

      topics: [
        {
          id: "groupby-multiindex",
          title: "GroupBy with MultiIndex",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "groupby-custom-functions",
          title: "Custom Aggregation Functions",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "groupby-window",
          title: "Window Operations after GroupBy",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Analytics",

      topics: [
        {
          id: "customer-analytics",
          title: "Customer Analytics",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "sales-analytics",
          title: "Sales Analytics",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "feature-generation",
          title: "Generating ML Features",
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
          id: "iq-groupby",
          title: "Explain GroupBy Internals",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "iq-transform-vs-agg",
          title: "transform() vs agg()",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    }

  ]
};