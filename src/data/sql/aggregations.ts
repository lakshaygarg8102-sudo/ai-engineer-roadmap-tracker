import { Section } from "../../types/roadmap";

export const aggregations: Section = {
  id: "aggregations",
  title: "Aggregations",

  groups: [

    {
      id: "aggregate-functions",
      title: "Aggregate Functions",

      topics: [
        {
          id: "count",
          title: "COUNT()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "sum",
          title: "SUM()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        },
        {
          id: "avg",
          title: "AVG()",
          estimatedMinutes: 25,
          interviewImportance: 5,
        },
        {
          id: "min-max",
          title: "MIN() & MAX()",
          estimatedMinutes: 20,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "grouping",
      title: "Grouping",

      topics: [
        {
          id: "group-by",
          title: "GROUP BY",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "having",
          title: "HAVING",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "grouping-errors",
          title: "Common GROUP BY Mistakes",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "advanced-grouping",
      title: "Advanced Aggregation",

      topics: [
        {
          id: "grouping-sets",
          title: "GROUPING SETS",
          estimatedMinutes: 40,
          interviewImportance: 4,
        },
        {
          id: "rollup",
          title: "ROLLUP",
          estimatedMinutes: 35,
          interviewImportance: 4,
        },
        {
          id: "cube",
          title: "CUBE",
          estimatedMinutes: 35,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "production",
      title: "Business Analytics",

      topics: [
        {
          id: "daily-metrics",
          title: "Daily Business Metrics",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "sales-analysis",
          title: "Sales Aggregation",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "customer-kpis",
          title: "Customer KPIs",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Problems",

      topics: [
        {
          id: "highest-salary",
          title: "Highest Salary by Department",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "top-customers",
          title: "Top Customers by Revenue",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "duplicate-records",
          title: "Find Duplicate Records",
          estimatedMinutes: 40,
          interviewImportance: 5,
        }
      ]
    }

  ]
};