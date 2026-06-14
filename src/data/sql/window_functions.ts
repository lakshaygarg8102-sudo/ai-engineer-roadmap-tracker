import { Section } from "../../types/roadmap";

export const windowFunctions: Section = {
  id: "window-functions",
  title: "Window Functions",

  groups: [

    {
      id: "fundamentals",
      title: "Window Function Fundamentals",

      topics: [
        {
          id: "what-is-window-function",
          title: "What are Window Functions?",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "over-clause",
          title: "OVER() Clause",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "partition-by",
          title: "PARTITION BY",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "order-by-window",
          title: "ORDER BY in Windows",
          estimatedMinutes: 35,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "ranking",
      title: "Ranking Functions",

      topics: [
        {
          id: "row-number",
          title: "ROW_NUMBER()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "rank",
          title: "RANK()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "dense-rank",
          title: "DENSE_RANK()",
          estimatedMinutes: 35,
          interviewImportance: 5,
        },
        {
          id: "ntile",
          title: "NTILE()",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "analytic-functions",
      title: "Analytic Functions",

      topics: [
        {
          id: "lag",
          title: "LAG()",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "lead",
          title: "LEAD()",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "first-value",
          title: "FIRST_VALUE()",
          estimatedMinutes: 30,
          interviewImportance: 4,
        },
        {
          id: "last-value",
          title: "LAST_VALUE()",
          estimatedMinutes: 30,
          interviewImportance: 4,
        }
      ]
    },

    {
      id: "running-calculations",
      title: "Running Calculations",

      topics: [
        {
          id: "running-total",
          title: "Running Totals",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "moving-average",
          title: "Moving Average",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "window-frame",
          title: "Window Frames",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "production",
      title: "Production Analytics",

      topics: [
        {
          id: "cohort-analysis",
          title: "Cohort Analysis",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "retention-analysis",
          title: "Retention Analysis",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "top-n-per-group",
          title: "Top N per Group",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    },

    {
      id: "interview",
      title: "Interview Problems",

      topics: [
        {
          id: "nth-highest-salary",
          title: "Nth Highest Salary",
          estimatedMinutes: 45,
          interviewImportance: 5,
        },
        {
          id: "rank-vs-dense-rank",
          title: "RANK() vs DENSE_RANK()",
          estimatedMinutes: 40,
          interviewImportance: 5,
        },
        {
          id: "running-total-problem",
          title: "Running Total Interview Problem",
          estimatedMinutes: 45,
          interviewImportance: 5,
        }
      ]
    }

  ]
};